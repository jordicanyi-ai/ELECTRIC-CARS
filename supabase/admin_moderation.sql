-- 08 - Moderación de anuncios (ejecutar una sola vez en Supabase SQL Editor)
-- La aprobación se hace mediante funciones SECURITY DEFINER con verificación explícita de administrador.
create or replace function public.is_site_admin()
returns boolean language sql stable security definer set search_path='' as $$
 select exists(select 1 from public.site_admins a where a.user_id=(select auth.uid()))
$$;
revoke all on function public.is_site_admin() from public;
grant execute on function public.is_site_admin() to authenticated;

drop policy if exists admin_listings_read on public.vehicle_listings;
create policy admin_listings_read on public.vehicle_listings for select to authenticated
using (public.is_site_admin());
drop policy if exists admin_photos_read on public.vehicle_photos;
create policy admin_photos_read on public.vehicle_photos for select to authenticated
using (public.is_site_admin());
drop policy if exists admin_dealers_read on public.dealers;
create policy admin_dealers_read on public.dealers for select to authenticated
using (public.is_site_admin());
drop policy if exists admin_photo_storage_read on storage.objects;
create policy admin_photo_storage_read on storage.objects for select to authenticated
using (bucket_id='dealer-vehicles' and public.is_site_admin());

create or replace function public.moderate_vehicle_listing(target_id uuid, decision text)
returns void language plpgsql security definer set search_path='' as $$
declare listing public.vehicle_listings%rowtype; photo_count integer;
begin
 if auth.uid() is null or not public.is_site_admin() then
  raise exception 'Administrator access required';
 end if;
 if decision not in ('approve','reject') then
  raise exception 'Invalid moderation decision';
 end if;
 select * into listing from public.vehicle_listings where id=target_id for update;
 if not found then raise exception 'Listing not found'; end if;
 if listing.status<>'pending' then raise exception 'Only pending listings can be moderated'; end if;
 if decision='approve' then
  select count(*) into photo_count from public.vehicle_photos where listing_id=target_id;
  if photo_count<3 then raise exception 'At least 3 photos required'; end if;
  update public.vehicle_listings set status='published',published_at=now(),expires_at=now()+interval '60 days',updated_at=now() where id=target_id;
 else
  update public.vehicle_listings set status='rejected',published_at=null,expires_at=null,updated_at=now() where id=target_id;
 end if;
end;
$$;
revoke all on function public.moderate_vehicle_listing(uuid,text) from public,anon;
grant execute on function public.moderate_vehicle_listing(uuid,text) to authenticated;
