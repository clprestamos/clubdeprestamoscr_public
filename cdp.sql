--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: clients_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE clients_tb (
    id integer NOT NULL,
    user_id integer NOT NULL,
    loan_id integer NOT NULL
);


ALTER TABLE clients_tb OWNER TO postgres;

--
-- Name: clients_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE clients_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE clients_tb_id_seq OWNER TO postgres;

--
-- Name: clients_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE clients_tb_id_seq OWNED BY clients_tb.id;


--
-- Name: document_types_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE document_types_tb (
    id integer NOT NULL,
    name text,
    type_id text
);


ALTER TABLE document_types_tb OWNER TO postgres;

--
-- Name: document_types_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE document_types_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE document_types_tb_id_seq OWNER TO postgres;

--
-- Name: document_types_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE document_types_tb_id_seq OWNED BY document_types_tb.id;


--
-- Name: documents_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE documents_tb (
    id text NOT NULL,
    user_id integer NOT NULL,
    file_name text NOT NULL,
    dowload_link text NOT NULL,
    type_id text NOT NULL
);


ALTER TABLE documents_tb OWNER TO postgres;

--
-- Name: investors_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE investors_tb (
    id integer NOT NULL,
    user_id integer NOT NULL,
    loan_id integer NOT NULL,
    percentage integer NOT NULL,
    last_update text NOT NULL
);


ALTER TABLE investors_tb OWNER TO postgres;

--
-- Name: investors_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE investors_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE investors_tb_id_seq OWNER TO postgres;

--
-- Name: investors_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE investors_tb_id_seq OWNED BY investors_tb.id;


--
-- Name: loan_investor_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE loan_investor_tb (
    id integer NOT NULL,
    loan_id integer NOT NULL,
    investor_id integer NOT NULL,
    percentage integer NOT NULL
);


ALTER TABLE loan_investor_tb OWNER TO postgres;

--
-- Name: loan_investor_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE loan_investor_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE loan_investor_tb_id_seq OWNER TO postgres;

--
-- Name: loan_investor_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE loan_investor_tb_id_seq OWNED BY loan_investor_tb.id;


--
-- Name: loans_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE loans_tb (
    id integer NOT NULL,
    amount numeric NOT NULL,
    term text NOT NULL,
    reason text NOT NULL,
    company text,
    state_id integer NOT NULL,
    request_loan_date text NOT NULL,
    user_id integer NOT NULL,
    last_update text,
    interest integer,
    score integer,
    approved_date text
);


ALTER TABLE loans_tb OWNER TO postgres;

--
-- Name: loans_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE loans_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE loans_tb_id_seq OWNER TO postgres;

--
-- Name: loans_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE loans_tb_id_seq OWNED BY loans_tb.id;


--
-- Name: notifications_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE notifications_tb (
    id integer NOT NULL,
    message text,
    date text,
    user_id integer,
    is_read boolean,
    read_date text
);


ALTER TABLE notifications_tb OWNER TO postgres;

--
-- Name: notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE notifications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE notifications_id_seq OWNER TO postgres;

--
-- Name: notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE notifications_id_seq OWNED BY notifications_tb.id;


--
-- Name: roles_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE roles_tb (
    id integer NOT NULL,
    name text NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE roles_tb OWNER TO postgres;

--
-- Name: roles_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE roles_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE roles_tb_id_seq OWNER TO postgres;

--
-- Name: roles_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE roles_tb_id_seq OWNED BY roles_tb.id;


--
-- Name: scores_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE scores_tb (
    id integer NOT NULL,
    sex text,
    home text,
    other_properties boolean,
    job_sector text,
    marital_status text,
    job_category text,
    academic_level text,
    has_vehicle boolean,
    sugef_nic text,
    job_time integer,
    age integer,
    salary_month integer,
    credit_payments integer,
    client_id integer
);


ALTER TABLE scores_tb OWNER TO postgres;

--
-- Name: scores_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE scores_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE scores_tb_id_seq OWNER TO postgres;

--
-- Name: scores_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE scores_tb_id_seq OWNED BY scores_tb.id;


--
-- Name: states_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE states_tb (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE states_tb OWNER TO postgres;

--
-- Name: states_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE states_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE states_tb_id_seq OWNER TO postgres;

--
-- Name: states_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE states_tb_id_seq OWNED BY states_tb.id;


--
-- Name: users_tb; Type: TABLE; Schema: public; Owner: postgres
--

-- Table: public.users_tb

-- DROP TABLE public.users_tb;

-- Table: public.users_tb

-- DROP TABLE public.users_tb;

CREATE TABLE public.users_tb
(
    id integer NOT NULL DEFAULT nextval('users_tb_id_seq1'::regclass),
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
    CONSTRAINT users_tb_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_tb
    OWNER to postgres;``

--
-- Name: users_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_tb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_tb_id_seq OWNER TO postgres;

--
-- Name: users_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_tb_id_seq OWNED BY users_tb.id;


--
-- Name: zipcodelist_tb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE zipcodelist_tb (
    id integer NOT NULL,
    province text,
    canton text,
    district text,
    zip_code integer
);


ALTER TABLE zipcodelist_tb OWNER TO postgres;

--
-- Name: zipCodeList_tb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "zipCodeList_tb_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "zipCodeList_tb_id_seq" OWNER TO postgres;

--
-- Name: zipCodeList_tb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "zipCodeList_tb_id_seq" OWNED BY zipcodelist_tb.id;


--
-- Name: clients_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY clients_tb ALTER COLUMN id SET DEFAULT nextval('clients_tb_id_seq'::regclass);


--
-- Name: document_types_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY document_types_tb ALTER COLUMN id SET DEFAULT nextval('document_types_tb_id_seq'::regclass);


--
-- Name: investors_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY investors_tb ALTER COLUMN id SET DEFAULT nextval('investors_tb_id_seq'::regclass);


--
-- Name: loan_investor_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loan_investor_tb ALTER COLUMN id SET DEFAULT nextval('loan_investor_tb_id_seq'::regclass);


--
-- Name: loans_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loans_tb ALTER COLUMN id SET DEFAULT nextval('loans_tb_id_seq'::regclass);


--
-- Name: notifications_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY notifications_tb ALTER COLUMN id SET DEFAULT nextval('notifications_id_seq'::regclass);


--
-- Name: roles_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles_tb ALTER COLUMN id SET DEFAULT nextval('roles_tb_id_seq'::regclass);


--
-- Name: scores_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY scores_tb ALTER COLUMN id SET DEFAULT nextval('scores_tb_id_seq'::regclass);


--
-- Name: states_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states_tb ALTER COLUMN id SET DEFAULT nextval('states_tb_id_seq'::regclass);


--
-- Name: users_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_tb ALTER COLUMN id SET DEFAULT nextval('users_tb_id_seq'::regclass);


--
-- Name: zipcodelist_tb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY zipcodelist_tb ALTER COLUMN id SET DEFAULT nextval('"zipCodeList_tb_id_seq"'::regclass);


--
-- Data for Name: documents_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.documents_tb(
	id, user_id, file_name, dowload_link, type_id)
	VALUES ('0B2W0AXZOjFKzOUtqc0VjaGJlN2M', 84, 'sugefLS.pdf', 'https://docs.google.com/uc?id=0B2W0AXZOjFKzOUtqc0VjaGJlN2M', 'sug');

INSERT INTO public.roles_tb(
	name, role_id)
	VALUES ('client', 1);
INSERT INTO public.roles_tb(
	name, role_id)
	VALUES ('investor', 2);
INSERT INTO public.roles_tb(
	name, role_id)
	VALUES ('admi', 3);

INSERT INTO public.states_tb(
	name)
	VALUES ('Nuevo ingreso');
INSERT INTO public.states_tb(
	name)
	VALUES ('Nuevo ingreso');
INSERT INTO public.states_tb(
	name)
	VALUES ('Aprobado');
INSERT INTO public.states_tb(
	name)
	VALUES ('En espera');
INSERT INTO public.states_tb(
	name)
	VALUES ('Black List');
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Carmen', 10101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Merced', 10102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Hospital', 10103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Catedral', 10104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Zapote', 10105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'San Francisco de Dos Ríos', 10106);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Uruca', 10107);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Mata Redonda', 10108);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Pavas', 10109);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'Hatillo', 10110);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'San José', 'San Sebastián', 10111);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Escazú', 'Escazú', 10201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Escazú', 'San Antonio', 10202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Escazú', 'San Rafael', 10203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Desamparados', 10301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'San Miguel', 10302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'San Juan de Dios', 10303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'San Rafael Arriba', 10304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'San Antonio', 10305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Frailes', 10306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Patarrá', 10307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'San Cristóbal', 10308);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Rosario', 10309);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Damas', 10310);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'San Rafael Abajo', 10311);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Gravilias', 10312);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Desamparados', 'Los Guido', 10313);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Santiago', 10401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Mercedes Sur', 10402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Barbacoas', 10403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Grifo Alto', 10404);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'San Rafael', 10405);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Candelarita', 10406);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Desamparaditos', 10407);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'San Antonio', 10408);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Puriscal', 'Chires', 10409);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tarrazú', 'San Marcos', 10501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tarrazú', 'San Lorenzo', 10502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tarrazú', 'San Carlos', 10503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'Aserrí', 10601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'Tarbaca', 10602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'Vuelta de Jorco', 10603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'San Gabriel', 10604);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'Legua', 10605);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'Monterrey', 10606);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Aserrí', 'Salitrillos', 10607);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Mora', 'Colón', 10701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Mora', 'Guayabo', 10702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Mora', 'Tabarcia', 10703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Mora', 'Piedras Negras', 10704);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Mora', 'Picagres', 10705);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Mora', 'Jaris', 10706);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'Guadalupe', 10801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'San Francisco', 10802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'Calle Blancos', 10803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'Mata de Plátano', 10804);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'Ipís', 10805);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'Rancho Redondo', 10806);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Goicoechea', 'Purral', 10807);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Santa Ana', 'Santa Ana', 10901);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Santa Ana', 'Salitral', 10902);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Santa Ana', 'Pozos', 10903);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Santa Ana', 'Uruca', 10904);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Santa Ana', 'Piedades', 10905);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Santa Ana', 'Brasil', 10906);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Alajuelita', 'Alajuelita', 11001);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Alajuelita', 'San Josecito', 11002);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Alajuelita', 'San Antonio', 11003);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Alajuelita', 'Concepción', 11004);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Alajuelita', 'San Felipe', 11005);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Vásquez de Coronado', 'San Isidro', 11101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Vásquez de Coronado', 'San Rafael', 11102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Vásquez de Coronado', 'Dulce Nombre de Jesús', 11103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Vásquez de Coronado', 'Patalillo', 11104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Vásquez de Coronado', 'Cascajal', 11105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Acosta', 'San Ignacio', 11201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Acosta', 'Guaitil', 11202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Acosta', 'Palmichal', 11203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Acosta', 'Cangrejal', 11204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Acosta', 'Sabanillas', 11205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tibás', 'San Juan', 11301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tibás', 'Cinco Esquinas', 11302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tibás', 'Anselmo Llorente', 11303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tibás', 'León XIII', 11304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Tibás', 'Colima', 11305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Moravia', 'San Vicente', 11401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Moravia', 'San Jerónimo', 11402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Moravia', 'La Trinidad', 11403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Montes de Oca', 'San Pedro', 11501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Montes de Oca', 'Sabanilla', 11502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Montes de Oca', 'Mercedes', 11503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Montes de Oca', 'San Rafael', 11504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Turrubares', 'San Pablo', 11601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Turrubares', 'San Pedro', 11602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Turrubares', 'San Juan de Mata', 11603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Turrubares', 'San Luis', 11604);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Turrubares', 'Carara', 11605);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Dota', 'Santa María', 11701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Dota', 'Jardín', 11702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Dota', 'Copey', 11703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Curridabat', 'Curridabat', 11801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Curridabat', 'Granadilla', 11802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Curridabat', 'Sánchez', 11803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Curridabat', 'Tirrases', 11804);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'San Isidro de El General', 11901);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'General', 11902);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Daniel Flores', 11903);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Rivas', 11904);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'San Pedro', 11905);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Platanares', 11906);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Pejibaye', 11907);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Cajón', 11908);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Barú', 11909);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Río Nuevo', 11910);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'Pérez Zeledón', 'Páramo', 11911);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'León Cortés', 'San Pablo', 12001);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'León Cortés', 'San Andrés', 12002);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'León Cortés', 'Llano Bonito', 12003);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'León Cortés', 'San Isidro', 12004);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'León Cortés', 'Santa Cruz', 12005);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('San José', 'León Cortés', 'San Antonio', 12006);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Alajuela', 20101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'San José', 20102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Carrizal', 20103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'San Antonio', 20104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Guácima', 20105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'San Isidro', 20106);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Sabanilla', 20107);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'San Rafael', 20108);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Río Segundo', 20109);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Desamparados', 20110);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Turrúcares', 20111);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Tambor', 20112);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Garita', 20113);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alajuela', 'Sarapiquí', 20114);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'San Ramón', 20201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Santiago', 20202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'San Juan', 20203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Piedades Norte', 20204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Piedades Sur', 20205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'San Rafael', 20206);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'San Isidro', 20207);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Los Ángeles', 20208);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Alfaro', 20209);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Volio', 20210);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Concepción', 20211);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Zapotal', 20212);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Ramón', 'Peñas Blancas', 20213);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'Grecia', 20301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'San Isidro', 20302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'San José', 20303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'San Roque', 20304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'Tacares', 20305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'Río Cuarto', 20306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'Puente de Piedra', 20307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Grecia', 'Bolívar', 20308);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Mateo', 'San Mateo', 20401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Mateo', 'Desmonte', 20402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Mateo', 'Jesús María', 20403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'Atenas', 20501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'Jesús', 20502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'Mercedes', 20503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'San Isidro', 20504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'Concepción', 20505);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'San José', 20506);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'Santa Eulalia', 20507);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Atenas', 'Escobal', 20508);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'Naranjo', 20601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'San Miguel', 20602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'San José', 20603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'Cirrí Sur', 20604);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'San Jerónimo', 20605);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'San Juan', 20606);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'El Rosario', 20607);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Naranjo', 'Palmitos', 20608);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'Palmares', 20701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'Zaragoza', 20702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'Buenos Aires', 20703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'Santiago', 20704);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'Candelaria', 20705);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'Esquipulas', 20706);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Palmares', 'La Granja', 20707);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Poás', 'San Pedro', 20801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Poás', 'San Juan', 20802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Poás', 'San Rafael', 20803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Poás', 'Carrillos', 20804);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Poás', 'Sabana Redonda', 20805);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Orotina', 'Orotina', 20901);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Orotina', 'El Mastate', 20902);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Orotina', 'Hacienda Vieja', 20903);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Orotina', 'Coyolar', 20904);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Orotina', 'La Ceiba', 20905);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Quesada', 21001);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Florencia', 21002);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Buenavista', 21003);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Aguas Zarcas', 21004);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Venecia', 21005);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Pital', 21006);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'La Fortuna', 21007);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'La Tigra', 21008);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'La Palmera', 21009);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Venado', 21010);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Cutris', 21011);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Monterrey', 21012);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'San Carlos', 'Pocosol', 21013);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Zarcero', 21101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Laguna', 21102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Tapesco', 21103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Guadalupe', 21104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Palmira', 21105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Zapote', 21106);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Alfaro Ruiz', 'Brisas', 21107);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Valverde Vega', 'Sarchí Norte', 21201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Valverde Vega', 'Sarchí Sur', 21202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Valverde Vega', 'Toro Amarillo', 21203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Valverde Vega', 'San Pedro', 21204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Valverde Vega', 'Rodríguez', 21205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'Upala', 21301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'Aguas Claras', 21302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'San José o Pizote', 21303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'Bijagua', 21304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'Delicias', 21305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'Dos Ríos', 21306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Upala', 'Yoliyllal', 21307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Los Chiles', 'Los Chiles', 21401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Los Chiles', 'Caño Negro', 21402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Los Chiles', 'El Amparo', 21403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Los Chiles', 'San Jorge', 21404);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Guatuso', 'San Rafael', 21501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Guatuso', 'Buenavista', 21502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Guatuso', 'Cote', 21503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Alajuela', 'Guatuso', 'Katira', 21504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Oriental', 30101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Occidental', 30102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Carmen', 30103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'San Nicolás', 30104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Aguacaliente (San Francisco)', 30105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Guadalupe (Arenilla)', 30106);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Corralillo', 30107);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Tierra Blanca', 30108);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Dulce Nombre', 30109);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Llano Grande', 30110);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Cartago', 'Quebradilla', 30111);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Paraíso', 'Paraíso', 30201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Paraíso', 'Santiago', 30202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Paraíso', 'Orosi', 30203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Paraíso', 'Cachí', 30204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Paraíso', 'Llanos de Santa Lucía', 30205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'Tres Ríos', 30301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'San Diego', 30302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'San Juan', 30303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'San Rafael', 30304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'Concepción', 30305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'Dulce Nombre', 30306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'San Ramón', 30307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'La Unión', 'Río Azul', 30308);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Jiménez', 'Juan Viñas', 30401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Jiménez', 'Tucurrique', 30402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Jiménez', 'Pejibaye', 30403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Turrialba', 30501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'La Suiza', 30502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Peralta', 30503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Santa Cruz', 30504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Santa Teresita', 30505);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Pavones', 30506);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Tuis', 30507);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Tayutic', 30508);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Santa Rosa', 30509);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Tres Equis', 30510);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'La Isabel', 30511);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Turrialba', 'Chirripó', 30512);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Alvarado', 'Pacayas', 30601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Alvarado', 'Cervantes', 30602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Alvarado', 'Capellades', 30603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Oreamuno', 'San Rafael', 30701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Oreamuno', 'Cot', 30702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Oreamuno', 'Potrero Cerrado', 30703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Oreamuno', 'Cipreses', 30704);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'Oreamuno', 'Santa Rosa', 30705);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'El Guarco', 'El Tejar', 30801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'El Guarco', 'San Isidro', 30802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'El Guarco', 'Tobosi', 30803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Cartago', 'El Guarco', 'Patio de Agua', 30804);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Heredia', 'Heredia', 40101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Heredia', 'Mercedes', 40102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Heredia', 'San Francisco', 40103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Heredia', 'Ulloa', 40104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Heredia', 'Varablanca', 40105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Barva', 'Barva', 40201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Barva', 'San Pedro', 40202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Barva', 'San Pablo', 40203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Barva', 'San Roque', 40204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Barva', 'Santa Lucía', 40205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Barva', 'San José de la Montaña', 40206);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'Santo Domingo', 40301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'San Vicente', 40302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'San Miguel', 40303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'Paracito', 40304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'Santo Tomás', 40305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'Santa Rosa', 40306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'Tures', 40307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santo Domingo', 'Para', 40308);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santa Bárbara', 'Santa Bárbara', 40401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santa Bárbara', 'San Pedro', 40402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santa Bárbara', 'San Juan', 40403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santa Bárbara', 'Jesús', 40404);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santa Bárbara', 'Santo Domingo', 40405);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Santa Bárbara', 'Puraba', 40406);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Rafael', 'San Rafael', 40501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Rafael', 'San Josécito', 40502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Rafael', 'Santiago', 40503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Rafael', 'Los Ángeles', 40504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Rafael', 'Concepción', 40505);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Isidro', 'San Isidro', 40601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Isidro', 'San José', 40602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Isidro', 'Concepción', 40603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Isidro', 'San Francisco', 40604);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Belén', 'San Antonio', 40701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Belén', 'La Ribera', 40702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Belén', 'La Asunción', 40703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Flores', 'San Joaquín de Flores', 40801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Flores', 'Barrantes', 40802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Flores', 'Llorente', 40803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Pablo', 'San Pablo', 40901);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'San Pablo', 'Rincón de Sabanilla', 40902);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Sarapiquí', 'Puerto Viejo', 41001);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Sarapiquí', 'La Virgen', 41002);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Sarapiquí', 'Horquetas', 41003);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Sarapiquí', 'Llanuras del Gaspar', 41004);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Heredia', 'Sarapiquí', 'Cureña', 41005);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Liberia', 'Liberia', 50101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Liberia', 'Cañas Dulces', 50102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Liberia', 'Mayorga', 50103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Liberia', 'Nacascolo', 50104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Liberia', 'Curubande', 50105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'Nicoya', 50201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'Mansion', 50202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'San Antonio', 50203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'Quebrada Honda', 50204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'Samara', 50205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'Nosara', 50206);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nicoya', 'Belén de Nosarita', 50207);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Santa Cruz', 50301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Bolson', 50302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Veintisiete de Abril', 50303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Tempate', 50304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Cartagena', 50305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Cuajiniquil', 50306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Diria', 50307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Cabo Velas', 50308);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Santa Cruz', 'Tamarindo', 50309);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Bagaces', 'Bagaces', 50401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Bagaces', 'Fortuna', 50402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Bagaces', 'Mogote', 50403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Bagaces', 'Río Naranjo', 50404);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Carrillo', 'Filadelfia', 50501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Carrillo', 'Palmira', 50502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Carrillo', 'Sardinal', 50503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Carrillo', 'Belén', 50504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Cañas', 'Cañas', 50601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Cañas', 'Palmira', 50602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Cañas', 'San Miguel', 50603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Cañas', 'Bebedero', 50604);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Cañas', 'Porozal', 50605);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Abangares', 'Juntas', 50701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Abangares', 'Sierra', 50702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Abangares', 'San Juan', 50703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Abangares', 'Colorado', 50704);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Tilarán', 50801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Quebrada Grande', 50802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Tronadora', 50803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Santa Rosa', 50804);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Líbano', 50805);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Tierras Morenas', 50806);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Tilarán', 'Arenal', 50807);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nandayure', 'Carmona', 50901);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nandayure', 'Santa Rita', 50902);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nandayure', 'Zapotal', 50903);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nandayure', 'San Pablo', 50904);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nandayure', 'Porvenir', 50905);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Nandayure', 'Bejuco', 50906);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'La Cruz', 'La Cruz', 51001);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'La Cruz', 'Santa Cecilia', 51002);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'La Cruz', 'Garita', 51003);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'La Cruz', 'Santa Elena', 51004);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Hojancha', 'Hojancha', 51101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Hojancha', 'Monte Romo', 51102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Hojancha', 'Puerto Carrillo', 51103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Guanacaste', 'Hojancha', 'Huacas', 51104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Puntarenas', 60101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Pitahaya', 60102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Chomes', 60103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Lepanto', 60104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Paquera', 60105);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Manzanillo', 60106);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Guacimal', 60107);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Barranca', 60108);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Monte Verde', 60109);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Isla del Coco', 60110);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Cobano', 60111);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Chacarita', 60112);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Chira', 60113);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Acapulco', 60114);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'El Roble', 60115);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Puntarenas', 'Arancibia', 60116);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Esparza', 'Espiritu Santo', 60201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Esparza', 'San Juan Grande', 60202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Esparza', 'Macacona', 60203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Esparza', 'San Rafael', 60204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Esparza', 'San Jerónimo', 60205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Buenos Aires', 60301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Volcan', 60302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Potrero Grande', 60303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Boruca', 60304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Pilas', 60305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Colinas', 60306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Changena', 60307);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Briolley', 60308);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Buenos Aires', 'Brunka', 60309);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Montes de Oro', 'Miramar', 60401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Montes de Oro', 'La Unión', 60402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Montes de Oro', 'San Isidro', 60403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Osa', 'Puerto Cortes', 60501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Osa', 'Palmar', 60502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Osa', 'Sierpe', 60503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Osa', 'Bahia Ballena', 60504);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Osa', 'Piedras Blancas', 60505);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Aguirre', 'Quepos', 60601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Aguirre', 'Savegre', 60602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Aguirre', 'Naranjito', 60603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Golfito', 'Golfito', 60701);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Golfito', 'Puerto Jiménez', 60702);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Golfito', 'Guaycara', 60703);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Golfito', 'Pavon', 60704);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Coto Brus', 'San Vito', 60801);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Coto Brus', 'Sabalito', 60802);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Coto Brus', 'Aguabuena', 60803);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Coto Brus', 'Limóncito', 60804);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Coto Brus', 'Pittier', 60805);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Parrita', 'Parrita', 60901);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Corredores', 'Corredor', 61001);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Corredores', 'La Cuesta', 61002);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Corredores', 'Canoas', 61003);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Corredores', 'Laurel', 61004);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Garabito', 'Jacó', 61101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Puntarenas', 'Garabito', 'Tarcoles', 61102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Limón', 'Limón', 70101);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Limón', 'Valle La Estrella', 70102);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Limón', 'Río Blanco', 70103);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Limón', 'Matama', 70104);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Pococí', 'Guapiles', 70201);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Pococí', 'Jiménez', 70202);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Pococí', 'Rita', 70203);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Pococí', 'Roxana', 70204);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Pococí', 'Cariari', 70205);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Pococí', 'Colorado', 70206);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Siquirres', 'Siquirres', 70301);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Siquirres', 'Pacuarito', 70302);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Siquirres', 'Florida', 70303);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Siquirres', 'Germania', 70304);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Siquirres', 'Cairo', 70305);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Siquirres', 'Alegria', 70306);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Talamanca', 'Bratsi', 70401);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Talamanca', 'Sixaola', 70402);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Talamanca', 'Cahuita', 70403);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Talamanca', 'Telire', 70404);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Matina', 'Matina', 70501);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Matina', 'Battan', 70502);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Matina', 'Carrandi', 70503);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Guácimo', 'Guácimo', 70601);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Guácimo', 'Mercedes', 70602);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Guácimo', 'Pocora', 70603);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Guácimo', 'Río Jiménez', 70604);
INSERT INTO public.zipcodelist_tb(province, canton, district, zip_code) VALUES ('Limón', 'Guácimo', 'Duacari', 70605);
