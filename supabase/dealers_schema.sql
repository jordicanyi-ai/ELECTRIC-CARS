-- Preparación de la zona privada. Ejecutar manualmente en Supabase tras configurar proyecto.
-- No activar la interfaz pública hasta probar RLS, almacenamiento y moderación.
create extension if not exists pgcrypto;
create table public.dealers (
 id uuid primary key default gen_random_uuid(),
 name text not null check (char_length(name) between 2 and 160),
 contact_email text not null,
 phone text,
 city text,
 province text,
 status text not null default 'pending' check (status in ('pending','active','suspended')),
 created_at timestamptz not null default now()
);
create table public.dealer_members (
 dealer_id uuid not null references public.dealers(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 role text not null default 'editor' check (role in ('owner','editor')),
 primary key (dealer_id,user_id)
);
create table public.vehicle_listings (
 id uuid primary key default gen_random_uuid(),
 dealer_id uuid not null references public.dealers(id),
 model_id integer not null,
 trim_name text,
 condition text not null check (condition in ('new','demo','used')),
 year integer not null check (year between 2000 and 2100),
 mileage_km integer not null check (mileage_km >= 0),
 price_eur numeric(12,2) not null check (price_eur > 0),
 city text not null,
 province text not null,
 description text not null default '',
 status text not null default 'draft' check (status in ('draft','pending','published','rejected','sold','withdrawn')),
 published_at timestamptz,
 expires_at timestamptz,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 constraint publication_dates check (status <> 'published' or (published_at is not null and expires_at > published_at))
);
create table public.vehicle_photos (
 id uuid primary key default gen_random_uuid(),
 listing_id uuid not null references public.vehicle_listings(id) on delete cascade,
 storage_path text not null,
 position integer not null default 0 check (position >= 0),
 unique (listing_id,storage_path)
);
create index on public.vehicle_listings(dealer_id,status);
create index on public.vehicle_photos(listing_id,position);
create or replace function public.is_dealer_member(target_dealer uuid)
returns boolean language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.dealer_members m where m.dealer_id = target_dealer and m.user_id = (select auth.uid()))
$$;
revoke all on function public.is_dealer_member(uuid) from public;
grant execute on function public.is_dealer_member(uuid) to authenticated;
alter table public.dealers enable row level security;
alter table public.dealer_members enable row level security;
alter table public.vehicle_listings enable row level security;
alter table public.vehicle_photos enable row level security;
-- Solo lectura pública de concesionarios activos y anuncios publicados vigentes.
create policy dealers_public_read on public.dealers for select to anon, authenticated
 using (status = 'active' or public.is_dealer_member(id));
create policy members_own_read on public.dealer_members for select to authenticated using (user_id = (select auth.uid()));
create policy listings_read on public.vehicle_listings for select to anon, authenticated
 using ((status = 'published' and published_at <= now() and expires_at > now()
 and exists(select 1 from public.dealers d where d.id=dealer_id and d.status='active'))
 or public.is_dealer_member(dealer_id));
create policy listings_insert on public.vehicle_listings for insert to authenticated
 with check (public.is_dealer_member(dealer_id) and status = 'draft');
create policy listings_update on public.vehicle_listings for update to authenticated
 using (public.is_dealer_member(dealer_id) and status in ('draft','rejected','published','sold','withdrawn'))
 with check (public.is_dealer_member(dealer_id) and status in ('draft','pending','sold','withdrawn'));
-- Evita que el concesionario apruebe su propio anuncio; el cambio a published lo hará una función de administración.
-- Las fotos NO se exponen mediante acceso directo a tablas: gestionarlas con rutas privadas y URLs firmadas.
-- No se conceden políticas de escritura de fotos hasta implementar subida segura y validación de propiedad.
