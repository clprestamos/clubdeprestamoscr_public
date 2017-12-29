-- Table: public.users_tb

-- DROP TABLE public.users_tb;

CREATE TABLE public.users_tb
(
    id integer NOT NULL DEFAULT nextval('users_tb_id_seq'::regclass),
    name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    identification text COLLATE pg_catalog."default",
    nationality text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    reference_phone text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
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
    payment_id integer,
    password text COLLATE pg_catalog."default" NOT NULL,
    last_update text COLLATE pg_catalog."default",
    password_key text COLLATE pg_catalog."default",
    password_date text COLLATE pg_catalog."default",
    bank text COLLATE pg_catalog."default",
    client_account integer,
    iban integer,
    CONSTRAINT user_id PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_tb
    OWNER to postgres;
