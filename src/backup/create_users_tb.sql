-- Table: public.users_tb

-- DROP TABLE public.users_tb;

CREATE TABLE public.users_tb
(
    name text COLLATE pg_catalog."default" NOT NULL,
    last_name text COLLATE pg_catalog."default" NOT NULL,
    identification text COLLATE pg_catalog."default" NOT NULL,
    nationality text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    reference_phone text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default",
    province text COLLATE pg_catalog."default",
    canton text COLLATE pg_catalog."default",
    district text COLLATE pg_catalog."default",
    zip_code integer,
    relative_phone text COLLATE pg_catalog."default",
    cellphone text COLLATE pg_catalog."default",
    facebook text COLLATE pg_catalog."default",
    twitter text COLLATE pg_catalog."default",
    signup_date text COLLATE pg_catalog."default",
    last_signin_date text COLLATE pg_catalog."default",
    is_active boolean NOT NULL,
    role_id integer NOT NULL,
    payment_id text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    last_update text COLLATE pg_catalog."default",
    password_key text COLLATE pg_catalog."default",
    password_date text COLLATE pg_catalog."default",
    bank text COLLATE pg_catalog."default",
    client_account bigint,
    iban bigint,
    avatar text COLLATE pg_catalog."default",
    sex text COLLATE pg_catalog."default",
    marital_status text COLLATE pg_catalog."default",
    home text COLLATE pg_catalog."default",
    other_properties boolean,
    job_sector text COLLATE pg_catalog."default",
    job_category text COLLATE pg_catalog."default",
    academic_level text COLLATE pg_catalog."default",
    has_vehicle boolean,
    job_time text COLLATE pg_catalog."default",
    age integer,
    salary bigint,
    credit bigint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_tb
    OWNER to postgres;
ALTER TABLE public.users_tb
    ADD COLUMN id bigserial NOT NULL;
ALTER TABLE public.users_tb
    ADD PRIMARY KEY (id);