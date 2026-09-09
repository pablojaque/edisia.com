-- Ejecuta esto una vez en Supabase: Dashboard -> SQL Editor -> New query -> pega y "Run".

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  plan text not null default 'free' check (plan in ('free', 'premium')),
  stripe_customer_id text,
  stripe_subscription_id text,
  updated_at timestamptz not null default now()
);

alter table public.profiles add column if not exists name text;

alter table public.profiles enable row level security;

-- Cada usuario solo puede leer su propia fila (el plan se actualiza
-- desde el servidor con la clave secreta, que salta RLS).
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Crea automáticamente una fila en profiles cuando alguien se registra.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Registro de análisis de tiendas (para el límite de 2 al día en el plan
-- gratis). Los inserts los hace el servidor con la clave secreta.
create table if not exists public.store_analyses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  url text not null,
  created_at timestamptz not null default now()
);

alter table public.store_analyses enable row level security;

create policy "Users can view their own store analyses"
  on public.store_analyses for select
  using (auth.uid() = user_id);

create index if not exists store_analyses_user_created_idx
  on public.store_analyses (user_id, created_at desc);
