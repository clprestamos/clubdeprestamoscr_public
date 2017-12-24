-- Table: public.clients_tb

-- DROP TABLE public.clients_tb;

CREATE TABLE public.clients_tb
(
    id integer NOT NULL DEFAULT nextval('clients_tb_id_seq'::regclass),
    user_id integer NOT NULL,
    loan_id integer NOT NULL,
    CONSTRAINT clients_tb_pkey PRIMARY KEY (id),
    CONSTRAINT fk_loan_id FOREIGN KEY (loan_id)
        REFERENCES public.loans_tb (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES public.users_tb (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.clients_tb
    OWNER to postgres;
