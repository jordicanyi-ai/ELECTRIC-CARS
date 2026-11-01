-- 10 - Permitir guardar cambios en anuncios rechazados
-- El problema: WITH CHECK no incluía el estado 'rejected'.
-- Se mantienen las restricciones del trigger guard_dealer_listing_changes.
drop policy if exists listings_update on public.vehicle_listings;
create policy listings_update on public.vehicle_listings
for update to authenticated
using (
 public.is_dealer_member(dealer_id)
 and status in ('draft','rejected','published','pending')
)
with check (
 public.is_dealer_member(dealer_id)
 and status in ('draft','rejected','pending','sold','withdrawn')
);
