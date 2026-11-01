-- Ejecutar en Supabase SQL Editor como administrador del proyecto.
-- Admins solo se asignan desde SQL Editor, nunca desde el navegador.
create table if not exists public.site_admins (
 user_id uuid primary key references auth.users(id) on delete cascade,
 created_at timestamptz not null default now()
);
alter table public.site_admins enable row level security;
drop policy if exists site_admins_self_read on public.site_admins;
create policy site_admins_self_read on public.site_admins
for select to authenticated using (user_id=(select auth.uid()));

insert into public.site_admins(user_id)
select id from auth.users where lower(email)='jordicanyi@gmail.com'
on conflict (user_id) do nothing;

-- Comprobación: debe devolver exactamente una fila.
select a.user_id, u.email from public.site_admins a
join auth.users u on u.id=a.user_id
where lower(u.email)='jordicanyi@gmail.com';
