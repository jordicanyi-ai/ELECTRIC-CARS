-- 09 - Corrección de permisos de moderación
-- Sustituye la función de protección para reconocer al administrador autorizado.
-- No modifica anuncios existentes ni desactiva RLS.
create or replace function public.guard_dealer_listing_changes()
returns trigger language plpgsql security invoker set search_path='' as $$
declare photo_count integer;
begin
 if auth.role()='service_role' or public.is_site_admin() then
   return new;
 end if;
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
