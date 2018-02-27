-- Table: public.loans_tb

-- DROP TABLE public.loans_tb;

CREATE TABLE public.loans_tb
(
    id bigserial NOT NULL,
    amount numeric NOT NULL,
    term text COLLATE pg_catalog."default" NOT NULL,
    reason text COLLATE pg_catalog."default" NOT NULL,
    company text COLLATE pg_catalog."default",
    state_id integer NOT NULL,
    request_loan_date text COLLATE pg_catalog."default" NOT NULL,
    last_update text COLLATE pg_catalog."default",
    interest integer,
    score integer,
    approved_date text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.loans_tb
    OWNER to postgres;
ALTER TABLE public.loans_tb
    ADD PRIMARY KEY (id);
