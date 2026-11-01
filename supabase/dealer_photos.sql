-- Run once in Supabase SQL Editor AFTER dealers_schema.sql and dealers_hardening.sql.
-- Private bucket: files only accessible with authenticated RLS or short-lived signed URLs.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('dealer-vehicles','dealer-vehicles',false,8388608,array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=false,file_size_limit=8388608,allowed_mime_types=excluded.allowed_mime_types;

-- Path format: dealer_id/listing_id/random-file-name.ext.
create or replace function public.can_manage_dealer_photo_path(path text)
returns boolean language sql stable security definer set search_path='' as $$
 select exists (
  select 1 from public.vehicle_listings l
  where l.id::text = split_part(path,'/',2)
    and l.dealer_id::text = split_part(path,'/',1)
    and public.is_dealer_member(l.dealer_id)
    and l.status in ('draft','rejected')
    and array_length(string_to_array(path,'/'),1) = 3
 );
$$;
revoke all on function public.can_manage_dealer_photo_path(text) from public;
grant execute on function public.can_manage_dealer_photo_path(text) to authenticated;

drop policy if exists dealer_vehicle_storage_insert on storage.objects;
create policy dealer_vehicle_storage_insert on storage.objects for insert to authenticated
with check (bucket_id='dealer-vehicles' and public.can_manage_dealer_photo_path(name));
drop policy if exists dealer_vehicle_storage_select on storage.objects;
create policy dealer_vehicle_storage_select on storage.objects for select to authenticated
using (bucket_id='dealer-vehicles' and exists (
 select 1 from public.vehicle_listings l
 where l.id::text=split_part(name,'/',2) and l.dealer_id::text=split_part(name,'/',1)
 and public.is_dealer_member(l.dealer_id)
));
drop policy if exists dealer_vehicle_storage_delete on storage.objects;
create policy dealer_vehicle_storage_delete on storage.objects for delete to authenticated
using (bucket_id='dealer-vehicles' and public.can_manage_dealer_photo_path(name));

-- Validate the listing owner and restrict photos to editable drafts/rejections.
create or replace function public.guard_dealer_photo_changes()
returns trigger language plpgsql security invoker set search_path='' as $$
declare listing public.vehicle_listings%rowtype; n integer;
begin
 if auth.role()='service_role' then return coalesce(new,old); end if;
 select * into listing from public.vehicle_listings where id=coalesce(new.listing_id,old.listing_id);
 if not found or not public.is_dealer_member(listing.dealer_id) or listing.status not in ('draft','rejected') then
  raise exception 'Photos can only be edited on your draft or rejected listings';
 end if;
 if tg_op='INSERT' then
  if new.storage_path not like listing.dealer_id::text||'/'||listing.id::text||'/%'
   or array_length(string_to_array(new.storage_path,'/'),1)<>3 then
   raise exception 'Invalid photo storage path';
  end if;
  select count(*) into n from public.vehicle_photos where listing_id=new.listing_id;
  if n>=15 then raise exception 'Maximum 15 photos per listing'; end if;
 elsif tg_op='UPDATE' then
  if new.listing_id<>old.listing_id or new.storage_path<>old.storage_path then
   raise exception 'Photo ownership and path cannot be changed';
  end if;
 end if;
 return coalesce(new,old);
end;
$$;
drop trigger if exists trg_guard_dealer_photo_changes on public.vehicle_photos;
create trigger trg_guard_dealer_photo_changes before insert or update or delete on public.vehicle_photos
for each row execute function public.guard_dealer_photo_changes();

drop policy if exists dealer_photos_read on public.vehicle_photos;
create policy dealer_photos_read on public.vehicle_photos for select to authenticated
using (exists(select 1 from public.vehicle_listings l where l.id=listing_id and public.is_dealer_member(l.dealer_id)));
drop policy if exists dealer_photos_insert on public.vehicle_photos;
create policy dealer_photos_insert on public.vehicle_photos for insert to authenticated
with check (exists(select 1 from public.vehicle_listings l where l.id=listing_id and l.status in ('draft','rejected') and public.is_dealer_member(l.dealer_id)));
drop policy if exists dealer_photos_update on public.vehicle_photos;
create policy dealer_photos_update on public.vehicle_photos for update to authenticated
using (exists(select 1 from public.vehicle_listings l where l.id=listing_id and l.status in ('draft','rejected') and public.is_dealer_member(l.dealer_id)))
with check (exists(select 1 from public.vehicle_listings l where l.id=listing_id and l.status in ('draft','rejected') and public.is_dealer_member(l.dealer_id)));
drop policy if exists dealer_photos_delete on public.vehicle_photos;
create policy dealer_photos_delete on public.vehicle_photos for delete to authenticated
using (exists(select 1 from public.vehicle_listings l where l.id=listing_id and l.status in ('draft','rejected') and public.is_dealer_member(l.dealer_id)));

-- Submission requires at least three photos; enforced server-side.
create or replace function public.guard_dealer_listing_changes()
returns trigger language plpgsql security invoker set search_path='' as $$
declare photo_count integer;
begin
 if auth.role()='service_role' then return new; end if;
 if tg_op='INSERT' then
  if new.status<>'draft' or new.published_at is not null or new.expires_at is not null then
   raise exception 'New listings must be drafts without publication dates';
  end if;
 elsif tg_op='UPDATE' then
  if new.dealer_id is distinct from old.dealer_id or new.published_at is distinct from old.published_at or new.expires_at is distinct from old.expires_at then
   raise exception 'Protected listing fields cannot be changed';
  end if;
  if new.status is distinct from old.status then
   if not ((old.status in ('draft','rejected') and new.status in ('draft','pending','withdrawn'))
    or (old.status='published' and new.status in ('sold','withdrawn'))
    or (old.status='pending' and new.status='withdrawn')) then
    raise exception 'This listing status transition requires admin approval';
   end if;
   if new.status='pending' then
    select count(*) into photo_count from public.vehicle_photos where listing_id=old.id;
    if photo_count<3 then raise exception 'At least 3 photos required to request review'; end if;
   end if;
   if old.status='published' and new.status in ('sold','withdrawn') then
    if (to_jsonb(new) - 'status' - 'updated_at') is distinct from (to_jsonb(old) - 'status' - 'updated_at') then
     raise exception 'Published listing details cannot be changed';
    end if;
   end if;
  elsif old.status not in ('draft','rejected') and (to_jsonb(new)-'updated_at') is distinct from (to_jsonb(old)-'updated_at') then
   raise exception 'Only draft or rejected listings may be edited';
  end if;
 end if;
 new.updated_at=now();return new;
end;
$$;
