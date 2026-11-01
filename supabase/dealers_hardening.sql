-- Hardening for dealer-owned listings. Run after dealers_schema.sql.
-- Block direct mutations of protected fields; only backend admin (service_role) may approve.
create or replace function public.guard_dealer_listing_changes()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if auth.role() = 'service_role' then
    return new;
  end if;
  if tg_op = 'INSERT' then
    if new.status <> 'draft' or new.published_at is not null or new.expires_at is not null then
      raise exception 'New listings must be drafts without publication dates';
    end if;
  elsif tg_op = 'UPDATE' then
    if new.dealer_id is distinct from old.dealer_id
       or new.published_at is distinct from old.published_at
       or new.expires_at is distinct from old.expires_at then
      raise exception 'Protected listing fields cannot be changed';
    end if;
    if new.status is distinct from old.status then
      if not (
        (old.status in ('draft','rejected') and new.status in ('draft','pending','withdrawn'))
        or (old.status = 'published' and new.status in ('sold','withdrawn'))
        or (old.status = 'pending' and new.status = 'withdrawn')
        or (old.status in ('sold','withdrawn') and new.status = old.status)
      ) then
        raise exception 'This listing status transition requires admin approval';
      end if;
    elsif old.status not in ('draft','rejected') and row(new.*) is distinct from row(old.*) then
      raise exception 'Only draft or rejected listings may be edited';
    end if;
  end if;
  new.updated_at = now();
  return new;
end;
$$;
drop trigger if exists trg_guard_dealer_listing_changes on public.vehicle_listings;
create trigger trg_guard_dealer_listing_changes
before insert or update on public.vehicle_listings
for each row execute function public.guard_dealer_listing_changes();

-- Tighten row-level update rights: an approved listing may only be marked sold/withdrawn.
drop policy if exists listings_update on public.vehicle_listings;
create policy listings_update on public.vehicle_listings for update to authenticated
using (public.is_dealer_member(dealer_id) and status in ('draft','rejected','published','pending'))
with check (public.is_dealer_member(dealer_id) and status in ('draft','pending','sold','withdrawn'));

-- Dealer profile and membership changes are admin-only until secure onboarding is built.
-- Photos remain read/write denied to browser roles until secure upload workflow is ready.
