-- Table: public.investors_tb

-- DROP TABLE public.investors_tb;

CREATE TABLE public.investors_tb
(
    id integer NOT NULL DEFAULT nextval('investors_tb_id_seq'::regclass),
    user_id integer NOT NULL,
    loan_id integer NOT NULL,
    percentage integer NOT NULL,
    last_update text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT investors_tb_pkey PRIMARY KEY (id),
    CONSTRAINT fk_loan_id FOREIGN KEY (loan_id)
        REFERENCES public.loans_tb (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES public.users_tb (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.investors_tb
    OWNER to postgres;
