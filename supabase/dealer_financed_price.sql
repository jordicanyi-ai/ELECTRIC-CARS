-- 12 - Precio financiado opcional de anuncios
alter table public.vehicle_listings add column if not exists financed_price_eur numeric(12,2);
alter table public.vehicle_listings drop constraint if exists financed_price_positive;
alter table public.vehicle_listings add constraint financed_price_positive check (financed_price_eur is null or financed_price_eur > 0);
-- La edición sigue restringida por las políticas RLS y el trigger de moderación existentes.
