CREATE TABLE public.roles_tb
(
    id serial NOT NULL,
    name text NOT NULL,
    role_id integer NOT NULL,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.roles_tb
    OWNER to postgres;

INSERT INTO public.roles_tb(
	id, name, role_id)
	VALUES (1, 'client', 1);
INSERT INTO public.roles_tb(
	id, name, role_id)
	VALUES (2, 'investor', 2);
INSERT INTO public.roles_tb(
	id, name, role_id)
	VALUES (3, 'admin', 3);
