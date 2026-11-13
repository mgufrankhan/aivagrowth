-- Create this table before using FORM_DELIVERY=database.
-- The app does not migrate the database for you.

create table if not exists demo_requests (
  id bigserial primary key,
  full_name text not null,
  work_email text not null,
  company_name text not null,
  website text,
  business_type text,
  main_challenge text not null,
  interested_in text,
  message text,
  created_at timestamptz not null default now()
);

-- Existing databases created before interested_in was added:
-- alter table demo_requests add column if not exists interested_in text;
