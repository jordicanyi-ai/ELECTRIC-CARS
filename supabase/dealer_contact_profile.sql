-- 11 - Datos de contacto del concesionario
-- Ejecutar una sola vez en Supabase SQL Editor.
alter table public.dealers add column if not exists address text;
alter table public.dealers add column if not exists postal_code text;
alter table public.dealers add column if not exists website text;
alter table public.dealers add column if not exists whatsapp text;
-- Solo los miembros propietarios pueden modificar el perfil de su concesionario.
-- La política SELECT existente sigue permitiendo leer el perfil a miembros y concesionarios activos.
drop policy if exists dealers_owner_update on public.dealers;
create policy dealers_owner_update on public.dealers for update to authenticated
using (exists(select 1 from public.dealer_members m where m.dealer_id=id and m.user_id=(select auth.uid()) and m.role='owner'))
with check (exists(select 1 from public.dealer_members m where m.dealer_id=id and m.user_id=(select auth.uid()) and m.role='owner'));
-- Limitar las columnas editables desde el navegador para evitar cambios de status o campos administrativos.
revoke update on public.dealers from authenticated;
grant update (name,contact_email,phone,city,province,address,postal_code,website,whatsapp) on public.dealers to authenticated;
