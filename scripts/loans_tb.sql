-- Table: public.loans_tb

-- DROP TABLE public.loans_tb;

CREATE TABLE public.loans_tb
(
    id integer NOT NULL DEFAULT nextval('loans_tb_id_seq'::regclass),
    amount numeric NOT NULL,
    term text COLLATE pg_catalog."default" NOT NULL,
    reason text COLLATE pg_catalog."default" NOT NULL,
    company text COLLATE pg_catalog."default",
    state_id integer NOT NULL,
    request_loan_date text COLLATE pg_catalog."default" NOT NULL,
    user_id integer NOT NULL,
    last_update text COLLATE pg_catalog."default",
    interest integer,
    score integer,
    approved_date text COLLATE pg_catalog."default",
    percentage_inverted integer,
    CONSTRAINT loans_tb_pkey PRIMARY KEY (id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES public.users_tb (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.loans_tb
    OWNER to postgres;
