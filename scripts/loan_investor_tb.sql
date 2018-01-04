-- Table: public.loan_investor_tb

-- DROP TABLE public.loan_investor_tb;

CREATE TABLE public.loan_investor_tb
(
    id integer NOT NULL DEFAULT nextval('loan_investor_tb_id_seq'::regclass),
    loan_id integer NOT NULL,
    investor_id integer NOT NULL,
    percentage integer NOT NULL,
    CONSTRAINT loan_investor_tb_pkey PRIMARY KEY (id),
    CONSTRAINT fk_investor FOREIGN KEY (investor_id)
        REFERENCES public.users_tb (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_loan FOREIGN KEY (loan_id)
        REFERENCES public.loans_tb (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.loan_investor_tb
    OWNER to postgres;
