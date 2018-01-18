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

CREATE TABLE users_tb (
    id integer NOT NULL,
    name text,
    last_name text,
    identification text,
    nationality text,
    phone text,
    reference_phone text,
    email text,
    address text,
    province text,
    canton text,
    district text,
    zip_code integer,
    relative_phone text,
    cellphone text,
    facebook text,
    twitter text,
    signup_date text,
    last_signin_date text,
    is_active boolean NOT NULL,
    role_id integer NOT NULL,
    payment_id integer,
    password text NOT NULL,
    last_update text,
    password_key text,
    password_date text,
    bank text,
    client_account bigint,
    iban bigint,
    avatar text
);


ALTER TABLE users_tb OWNER TO postgres;

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
-- Data for Name: clients_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY clients_tb (id, user_id, loan_id) FROM stdin;
4	13	79
5	17	80
\.


--
-- Name: clients_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('clients_tb_id_seq', 5, true);


--
-- Data for Name: document_types_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY document_types_tb (id, name, type_id) FROM stdin;
1	Cédula de identidad por ambos lados	ced
2	Fotografía reciente	fot
4	Copia de informe de SUGEF	sug
3	Copia orden patronal o CPA	cpa
\.


--
-- Name: document_types_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('document_types_tb_id_seq', 4, true);


--
-- Data for Name: documents_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY documents_tb (id, user_id, file_name, dowload_link, type_id) FROM stdin;
0B2W0AXZOjFKzOUtqc0VjaGJlN2M	84	sugefLS.pdf	https://docs.google.com/uc?id=0B2W0AXZOjFKzOUtqc0VjaGJlN2M	sug
\.


--
-- Data for Name: investors_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY investors_tb (id, user_id, loan_id, percentage, last_update) FROM stdin;
\.


--
-- Name: investors_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('investors_tb_id_seq', 1, false);


--
-- Data for Name: loan_investor_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY loan_investor_tb (id, loan_id, investor_id, percentage) FROM stdin;
52	79	15	20
54	79	16	40
\.


--
-- Name: loan_investor_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('loan_investor_tb_id_seq', 54, true);


--
-- Data for Name: loans_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY loans_tb (id, amount, term, reason, company, state_id, request_loan_date, user_id, last_update, interest, score, approved_date) FROM stdin;
79	400000	24-meses	Deuda-tarjeta-de-credito	Dos Pinos	4	2017-12-23T23:56:54-06:00	13	2017-12-23T23:56:54-06:00	\N	\N	\N
80	600000	18-meses	Deudas-almacen	\N	1	2018-01-11T18:06:12-06:00	17	2018-01-11T18:06:12-06:00	\N	\N	\N
\.


--
-- Name: loans_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('loans_tb_id_seq', 80, true);


--
-- Name: notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('notifications_id_seq', 1, false);


--
-- Data for Name: notifications_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY notifications_tb (id, message, date, user_id, is_read, read_date) FROM stdin;
\.


--
-- Data for Name: roles_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY roles_tb (id, name, role_id) FROM stdin;
1	client	1
2	investor	2
3	admin	3
\.


--
-- Name: roles_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('roles_tb_id_seq', 4, true);


--
-- Data for Name: scores_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY scores_tb (id, sex, home, other_properties, job_sector, marital_status, job_category, academic_level, has_vehicle, sugef_nic, job_time, age, salary_month, credit_payments, client_id) FROM stdin;
\.


--
-- Name: scores_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('scores_tb_id_seq', 7, true);


--
-- Data for Name: states_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY states_tb (id, name) FROM stdin;
1	Nuevo ingreso
2	Pre-Aprobado
3	Aprobado
4	En espera
5	Black List
\.


--
-- Name: states_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('states_tb_id_seq', 1, false);


--
-- Data for Name: users_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users_tb (id, name, last_name, identification, nationality, phone, reference_phone, email, address, province, canton, district, zip_code, relative_phone, cellphone, facebook, twitter, signup_date, last_signin_date, is_active, role_id, payment_id, password, last_update, password_key, password_date, bank, client_account, iban, avatar) FROM stdin;
15	Ricardo	Araya	2-0700-0891	\N	8900-0909	0909-0909	rsancheza24@gmail.com	\N	\N	\N	\N	\N	\N	9879-8725	\N	\N	2017-12-30T18:25:42-06:00	\N	t	2	\N	13bade984aa416220470ca3f82bf5fb8	2018-01-09T20:40:20-06:00	\N	\N	\N	\N	\N	\N
13	Randall	Sánchez Araya	2064786876	Costarricense	2451-0050	2451-0050	randall@merkadeus.com	San Rafael	Alajuela	Naranjo	Naranjo	20601	2676-0909	7678-9090	\N	\N	2017-12-23T23:56:44-06:00	\N	t	1	\N	13bade984aa416220470ca3f82bf5fb8	2018-01-11T11:37:48-06:00		\N	BAC	6878767686876	8798798798789789	\N
16	Inversionista	Sánchez	879898798	\N	89787788	\N	investor@test.com	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-01-11T16:22:24-06:00	\N	t	2	\N	13bade984aa416220470ca3f82bf5fb8	2018-01-11T16:22:24-06:00	\N	\N	\N	\N	\N	\N
17	Cliente	test	9879879899	Costarricense	98798798	98798798	cliente@test.com	direccion	Guanacaste	Liberia	Cañas Dulces	50102	98798798	76876876	\N	\N	2018-01-11T18:06:12-06:00	\N	t	1	\N	13bade984aa416220470ca3f82bf5fb8	2018-01-11T18:06:12-06:00	\N	\N	\N	\N	\N	\N
\.


--
-- Name: users_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_tb_id_seq', 17, true);


--
-- Name: zipCodeList_tb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"zipCodeList_tb_id_seq"', 474, true);


--
-- Data for Name: zipcodelist_tb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY zipcodelist_tb (id, province, canton, district, zip_code) FROM stdin;
1	San José	San José	Carmen	10101
2	San José	San José	Merced	10102
3	San José	San José	Hospital	10103
4	San José	San José	Catedral	10104
5	San José	San José	Zapote	10105
6	San José	San José	San Francisco de Dos Ríos	10106
7	San José	San José	Uruca	10107
8	San José	San José	Mata Redonda	10108
9	San José	San José	Pavas	10109
10	San José	San José	Hatillo	10110
11	San José	San José	San Sebastián	10111
12	San José	Escazú	Escazú	10201
13	San José	Escazú	San Antonio	10202
14	San José	Escazú	San Rafael	10203
15	San José	Desamparados	Desamparados	10301
16	San José	Desamparados	San Miguel	10302
17	San José	Desamparados	San Juan de Dios	10303
18	San José	Desamparados	San Rafael Arriba	10304
19	San José	Desamparados	San Antonio	10305
20	San José	Desamparados	Frailes	10306
21	San José	Desamparados	Patarrá	10307
22	San José	Desamparados	San Cristóbal	10308
23	San José	Desamparados	Rosario	10309
24	San José	Desamparados	Damas	10310
25	San José	Desamparados	San Rafael Abajo	10311
26	San José	Desamparados	Gravilias	10312
27	San José	Desamparados	Los Guido	10313
28	San José	Puriscal	Santiago	10401
29	San José	Puriscal	Mercedes Sur	10402
30	San José	Puriscal	Barbacoas	10403
31	San José	Puriscal	Grifo Alto	10404
32	San José	Puriscal	San Rafael	10405
33	San José	Puriscal	Candelarita	10406
34	San José	Puriscal	Desamparaditos	10407
35	San José	Puriscal	San Antonio	10408
36	San José	Puriscal	Chires	10409
37	San José	Tarrazú	San Marcos	10501
38	San José	Tarrazú	San Lorenzo	10502
39	San José	Tarrazú	San Carlos	10503
40	San José	Aserrí	Aserrí	10601
41	San José	Aserrí	Tarbaca	10602
42	San José	Aserrí	Vuelta de Jorco	10603
43	San José	Aserrí	San Gabriel	10604
44	San José	Aserrí	Legua	10605
45	San José	Aserrí	Monterrey	10606
46	San José	Aserrí	Salitrillos	10607
47	San José	Mora	Colón	10701
48	San José	Mora	Guayabo	10702
49	San José	Mora	Tabarcia	10703
50	San José	Mora	Piedras Negras	10704
51	San José	Mora	Picagres	10705
52	San José	Mora	Jaris	10706
53	San José	Goicoechea	Guadalupe	10801
54	San José	Goicoechea	San Francisco	10802
55	San José	Goicoechea	Calle Blancos	10803
56	San José	Goicoechea	Mata de Plátano	10804
57	San José	Goicoechea	Ipís	10805
58	San José	Goicoechea	Rancho Redondo	10806
59	San José	Goicoechea	Purral	10807
60	San José	Santa Ana	Santa Ana	10901
61	San José	Santa Ana	Salitral	10902
62	San José	Santa Ana	Pozos	10903
63	San José	Santa Ana	Uruca	10904
64	San José	Santa Ana	Piedades	10905
65	San José	Santa Ana	Brasil	10906
66	San José	Alajuelita	Alajuelita	11001
67	San José	Alajuelita	San Josecito	11002
68	San José	Alajuelita	San Antonio	11003
69	San José	Alajuelita	Concepción	11004
70	San José	Alajuelita	San Felipe	11005
71	San José	Vásquez de Coronado	San Isidro	11101
72	San José	Vásquez de Coronado	San Rafael	11102
73	San José	Vásquez de Coronado	Dulce Nombre de Jesús	11103
74	San José	Vásquez de Coronado	Patalillo	11104
75	San José	Vásquez de Coronado	Cascajal	11105
76	San José	Acosta	San Ignacio	11201
77	San José	Acosta	Guaitil	11202
78	San José	Acosta	Palmichal	11203
79	San José	Acosta	Cangrejal	11204
80	San José	Acosta	Sabanillas	11205
81	San José	Tibás	San Juan	11301
82	San José	Tibás	Cinco Esquinas	11302
83	San José	Tibás	Anselmo Llorente	11303
84	San José	Tibás	León XIII	11304
85	San José	Tibás	Colima	11305
86	San José	Moravia	San Vicente	11401
87	San José	Moravia	San Jerónimo	11402
88	San José	Moravia	La Trinidad	11403
89	San José	Montes de Oca	San Pedro	11501
90	San José	Montes de Oca	Sabanilla	11502
91	San José	Montes de Oca	Mercedes	11503
92	San José	Montes de Oca	San Rafael	11504
93	San José	Turrubares	San Pablo	11601
94	San José	Turrubares	San Pedro	11602
95	San José	Turrubares	San Juan de Mata	11603
96	San José	Turrubares	San Luis	11604
97	San José	Turrubares	Carara	11605
98	San José	Dota	Santa María	11701
99	San José	Dota	Jardín	11702
100	San José	Dota	Copey	11703
101	San José	Curridabat	Curridabat	11801
102	San José	Curridabat	Granadilla	11802
103	San José	Curridabat	Sánchez	11803
104	San José	Curridabat	Tirrases	11804
105	San José	Pérez Zeledón	San Isidro de El General	11901
106	San José	Pérez Zeledón	General	11902
107	San José	Pérez Zeledón	Daniel Flores	11903
108	San José	Pérez Zeledón	Rivas	11904
109	San José	Pérez Zeledón	San Pedro	11905
110	San José	Pérez Zeledón	Platanares	11906
111	San José	Pérez Zeledón	Pejibaye	11907
112	San José	Pérez Zeledón	Cajón	11908
113	San José	Pérez Zeledón	Barú	11909
114	San José	Pérez Zeledón	Río Nuevo	11910
115	San José	Pérez Zeledón	Páramo	11911
116	San José	León Cortés	San Pablo	12001
117	San José	León Cortés	San Andrés	12002
118	San José	León Cortés	Llano Bonito	12003
119	San José	León Cortés	San Isidro	12004
120	San José	León Cortés	Santa Cruz	12005
121	San José	León Cortés	San Antonio	12006
122	Alajuela	Alajuela	Alajuela	20101
123	Alajuela	Alajuela	San José	20102
124	Alajuela	Alajuela	Carrizal	20103
125	Alajuela	Alajuela	San Antonio	20104
126	Alajuela	Alajuela	Guácima	20105
127	Alajuela	Alajuela	San Isidro	20106
128	Alajuela	Alajuela	Sabanilla	20107
129	Alajuela	Alajuela	San Rafael	20108
130	Alajuela	Alajuela	Río Segundo	20109
131	Alajuela	Alajuela	Desamparados	20110
132	Alajuela	Alajuela	Turrúcares	20111
133	Alajuela	Alajuela	Tambor	20112
134	Alajuela	Alajuela	Garita	20113
135	Alajuela	Alajuela	Sarapiquí	20114
136	Alajuela	San Ramón	San Ramón	20201
137	Alajuela	San Ramón	Santiago	20202
138	Alajuela	San Ramón	San Juan	20203
139	Alajuela	San Ramón	Piedades Norte	20204
140	Alajuela	San Ramón	Piedades Sur	20205
141	Alajuela	San Ramón	San Rafael	20206
142	Alajuela	San Ramón	San Isidro	20207
143	Alajuela	San Ramón	Los Ángeles	20208
144	Alajuela	San Ramón	Alfaro	20209
145	Alajuela	San Ramón	Volio	20210
146	Alajuela	San Ramón	Concepción	20211
147	Alajuela	San Ramón	Zapotal	20212
148	Alajuela	San Ramón	Peñas Blancas	20213
149	Alajuela	Grecia	Grecia	20301
150	Alajuela	Grecia	San Isidro	20302
151	Alajuela	Grecia	San José	20303
152	Alajuela	Grecia	San Roque	20304
153	Alajuela	Grecia	Tacares	20305
154	Alajuela	Grecia	Río Cuarto	20306
155	Alajuela	Grecia	Puente de Piedra	20307
156	Alajuela	Grecia	Bolívar	20308
157	Alajuela	San Mateo	San Mateo	20401
158	Alajuela	San Mateo	Desmonte	20402
159	Alajuela	San Mateo	Jesús María	20403
160	Alajuela	Atenas	Atenas	20501
161	Alajuela	Atenas	Jesús	20502
162	Alajuela	Atenas	Mercedes	20503
163	Alajuela	Atenas	San Isidro	20504
164	Alajuela	Atenas	Concepción	20505
165	Alajuela	Atenas	San José	20506
166	Alajuela	Atenas	Santa Eulalia	20507
167	Alajuela	Atenas	Escobal	20508
168	Alajuela	Naranjo	Naranjo	20601
169	Alajuela	Naranjo	San Miguel	20602
170	Alajuela	Naranjo	San José	20603
171	Alajuela	Naranjo	Cirrí Sur	20604
172	Alajuela	Naranjo	San Jerónimo	20605
173	Alajuela	Naranjo	San Juan	20606
174	Alajuela	Naranjo	El Rosario	20607
175	Alajuela	Naranjo	Palmitos	20608
176	Alajuela	Palmares	Palmares	20701
177	Alajuela	Palmares	Zaragoza	20702
178	Alajuela	Palmares	Buenos Aires	20703
179	Alajuela	Palmares	Santiago	20704
180	Alajuela	Palmares	Candelaria	20705
181	Alajuela	Palmares	Esquipulas	20706
182	Alajuela	Palmares	La Granja	20707
183	Alajuela	Poás	San Pedro	20801
184	Alajuela	Poás	San Juan	20802
185	Alajuela	Poás	San Rafael	20803
186	Alajuela	Poás	Carrillos	20804
187	Alajuela	Poás	Sabana Redonda	20805
188	Alajuela	Orotina	Orotina	20901
189	Alajuela	Orotina	El Mastate	20902
190	Alajuela	Orotina	Hacienda Vieja	20903
191	Alajuela	Orotina	Coyolar	20904
192	Alajuela	Orotina	La Ceiba	20905
193	Alajuela	San Carlos	Quesada	21001
194	Alajuela	San Carlos	Florencia	21002
195	Alajuela	San Carlos	Buenavista	21003
196	Alajuela	San Carlos	Aguas Zarcas	21004
197	Alajuela	San Carlos	Venecia	21005
198	Alajuela	San Carlos	Pital	21006
199	Alajuela	San Carlos	La Fortuna	21007
200	Alajuela	San Carlos	La Tigra	21008
201	Alajuela	San Carlos	La Palmera	21009
202	Alajuela	San Carlos	Venado	21010
203	Alajuela	San Carlos	Cutris	21011
204	Alajuela	San Carlos	Monterrey	21012
205	Alajuela	San Carlos	Pocosol	21013
206	Alajuela	Alfaro Ruiz	Zarcero	21101
207	Alajuela	Alfaro Ruiz	Laguna	21102
208	Alajuela	Alfaro Ruiz	Tapesco	21103
209	Alajuela	Alfaro Ruiz	Guadalupe	21104
210	Alajuela	Alfaro Ruiz	Palmira	21105
211	Alajuela	Alfaro Ruiz	Zapote	21106
212	Alajuela	Alfaro Ruiz	Brisas	21107
213	Alajuela	Valverde Vega	Sarchí Norte	21201
214	Alajuela	Valverde Vega	Sarchí Sur	21202
215	Alajuela	Valverde Vega	Toro Amarillo	21203
216	Alajuela	Valverde Vega	San Pedro	21204
217	Alajuela	Valverde Vega	Rodríguez	21205
218	Alajuela	Upala	Upala	21301
219	Alajuela	Upala	Aguas Claras	21302
220	Alajuela	Upala	San José o Pizote	21303
221	Alajuela	Upala	Bijagua	21304
222	Alajuela	Upala	Delicias	21305
223	Alajuela	Upala	Dos Ríos	21306
224	Alajuela	Upala	Yoliyllal	21307
225	Alajuela	Los Chiles	Los Chiles	21401
226	Alajuela	Los Chiles	Caño Negro	21402
227	Alajuela	Los Chiles	El Amparo	21403
228	Alajuela	Los Chiles	San Jorge	21404
229	Alajuela	Guatuso	San Rafael	21501
230	Alajuela	Guatuso	Buenavista	21502
231	Alajuela	Guatuso	Cote	21503
232	Alajuela	Guatuso	Katira	21504
233	Cartago	Cartago	Oriental	30101
234	Cartago	Cartago	Occidental	30102
235	Cartago	Cartago	Carmen	30103
236	Cartago	Cartago	San Nicolás	30104
237	Cartago	Cartago	Aguacaliente (San Francisco)	30105
238	Cartago	Cartago	Guadalupe (Arenilla)	30106
239	Cartago	Cartago	Corralillo	30107
240	Cartago	Cartago	Tierra Blanca	30108
241	Cartago	Cartago	Dulce Nombre	30109
242	Cartago	Cartago	Llano Grande	30110
243	Cartago	Cartago	Quebradilla	30111
244	Cartago	Paraíso	Paraíso	30201
245	Cartago	Paraíso	Santiago	30202
246	Cartago	Paraíso	Orosi	30203
247	Cartago	Paraíso	Cachí	30204
248	Cartago	Paraíso	Llanos de Santa Lucía	30205
249	Cartago	La Unión	Tres Ríos	30301
250	Cartago	La Unión	San Diego	30302
251	Cartago	La Unión	San Juan	30303
252	Cartago	La Unión	San Rafael	30304
253	Cartago	La Unión	Concepción	30305
254	Cartago	La Unión	Dulce Nombre	30306
255	Cartago	La Unión	San Ramón	30307
256	Cartago	La Unión	Río Azul	30308
257	Cartago	Jiménez	Juan Viñas	30401
258	Cartago	Jiménez	Tucurrique	30402
259	Cartago	Jiménez	Pejibaye	30403
260	Cartago	Turrialba	Turrialba	30501
261	Cartago	Turrialba	La Suiza	30502
262	Cartago	Turrialba	Peralta	30503
263	Cartago	Turrialba	Santa Cruz	30504
264	Cartago	Turrialba	Santa Teresita	30505
265	Cartago	Turrialba	Pavones	30506
266	Cartago	Turrialba	Tuis	30507
267	Cartago	Turrialba	Tayutic	30508
268	Cartago	Turrialba	Santa Rosa	30509
269	Cartago	Turrialba	Tres Equis	30510
270	Cartago	Turrialba	La Isabel	30511
271	Cartago	Turrialba	Chirripó	30512
272	Cartago	Alvarado	Pacayas	30601
273	Cartago	Alvarado	Cervantes	30602
274	Cartago	Alvarado	Capellades	30603
275	Cartago	Oreamuno	San Rafael	30701
276	Cartago	Oreamuno	Cot	30702
277	Cartago	Oreamuno	Potrero Cerrado	30703
278	Cartago	Oreamuno	Cipreses	30704
279	Cartago	Oreamuno	Santa Rosa	30705
280	Cartago	El Guarco	El Tejar	30801
281	Cartago	El Guarco	San Isidro	30802
282	Cartago	El Guarco	Tobosi	30803
283	Cartago	El Guarco	Patio de Agua	30804
284	Heredia	Heredia	Heredia	40101
285	Heredia	Heredia	Mercedes	40102
286	Heredia	Heredia	San Francisco	40103
287	Heredia	Heredia	Ulloa	40104
288	Heredia	Heredia	Varablanca	40105
289	Heredia	Barva	Barva	40201
290	Heredia	Barva	San Pedro	40202
291	Heredia	Barva	San Pablo	40203
292	Heredia	Barva	San Roque	40204
293	Heredia	Barva	Santa Lucía	40205
294	Heredia	Barva	San José de la Montaña	40206
295	Heredia	Santo Domingo	Santo Domingo	40301
296	Heredia	Santo Domingo	San Vicente	40302
297	Heredia	Santo Domingo	San Miguel	40303
298	Heredia	Santo Domingo	Paracito	40304
299	Heredia	Santo Domingo	Santo Tomás	40305
300	Heredia	Santo Domingo	Santa Rosa	40306
301	Heredia	Santo Domingo	Tures	40307
302	Heredia	Santo Domingo	Para	40308
303	Heredia	Santa Bárbara	Santa Bárbara	40401
304	Heredia	Santa Bárbara	San Pedro	40402
305	Heredia	Santa Bárbara	San Juan	40403
306	Heredia	Santa Bárbara	Jesús	40404
307	Heredia	Santa Bárbara	Santo Domingo	40405
308	Heredia	Santa Bárbara	Puraba	40406
309	Heredia	San Rafael	San Rafael	40501
310	Heredia	San Rafael	San Josécito	40502
311	Heredia	San Rafael	Santiago	40503
312	Heredia	San Rafael	Los Ángeles	40504
313	Heredia	San Rafael	Concepción	40505
314	Heredia	San Isidro	San Isidro	40601
315	Heredia	San Isidro	San José	40602
316	Heredia	San Isidro	Concepción	40603
317	Heredia	San Isidro	San Francisco	40604
318	Heredia	Belén	San Antonio	40701
319	Heredia	Belén	La Ribera	40702
320	Heredia	Belén	La Asunción	40703
321	Heredia	Flores	San Joaquín de Flores	40801
322	Heredia	Flores	Barrantes	40802
323	Heredia	Flores	Llorente	40803
324	Heredia	San Pablo	San Pablo	40901
325	Heredia	San Pablo	Rincón de Sabanilla	40902
326	Heredia	Sarapiquí	Puerto Viejo	41001
327	Heredia	Sarapiquí	La Virgen	41002
328	Heredia	Sarapiquí	Horquetas	41003
329	Heredia	Sarapiquí	Llanuras del Gaspar	41004
330	Heredia	Sarapiquí	Cureña	41005
331	Guanacaste	Liberia	Liberia	50101
332	Guanacaste	Liberia	Cañas Dulces	50102
333	Guanacaste	Liberia	Mayorga	50103
334	Guanacaste	Liberia	Nacascolo	50104
335	Guanacaste	Liberia	Curubande	50105
336	Guanacaste	Nicoya	Nicoya	50201
337	Guanacaste	Nicoya	Mansion	50202
338	Guanacaste	Nicoya	San Antonio	50203
339	Guanacaste	Nicoya	Quebrada Honda	50204
340	Guanacaste	Nicoya	Samara	50205
341	Guanacaste	Nicoya	Nosara	50206
342	Guanacaste	Nicoya	Belén de Nosarita	50207
343	Guanacaste	Santa Cruz	Santa Cruz	50301
344	Guanacaste	Santa Cruz	Bolson	50302
345	Guanacaste	Santa Cruz	Veintisiete de Abril	50303
346	Guanacaste	Santa Cruz	Tempate	50304
347	Guanacaste	Santa Cruz	Cartagena	50305
348	Guanacaste	Santa Cruz	Cuajiniquil	50306
349	Guanacaste	Santa Cruz	Diria	50307
350	Guanacaste	Santa Cruz	Cabo Velas	50308
351	Guanacaste	Santa Cruz	Tamarindo	50309
352	Guanacaste	Bagaces	Bagaces	50401
353	Guanacaste	Bagaces	Fortuna	50402
354	Guanacaste	Bagaces	Mogote	50403
355	Guanacaste	Bagaces	Río Naranjo	50404
356	Guanacaste	Carrillo	Filadelfia	50501
357	Guanacaste	Carrillo	Palmira	50502
358	Guanacaste	Carrillo	Sardinal	50503
359	Guanacaste	Carrillo	Belén	50504
360	Guanacaste	Cañas	Cañas	50601
361	Guanacaste	Cañas	Palmira	50602
362	Guanacaste	Cañas	San Miguel	50603
363	Guanacaste	Cañas	Bebedero	50604
364	Guanacaste	Cañas	Porozal	50605
365	Guanacaste	Abangares	Juntas	50701
366	Guanacaste	Abangares	Sierra	50702
367	Guanacaste	Abangares	San Juan	50703
368	Guanacaste	Abangares	Colorado	50704
369	Guanacaste	Tilarán	Tilarán	50801
370	Guanacaste	Tilarán	Quebrada Grande	50802
371	Guanacaste	Tilarán	Tronadora	50803
372	Guanacaste	Tilarán	Santa Rosa	50804
373	Guanacaste	Tilarán	Líbano	50805
374	Guanacaste	Tilarán	Tierras Morenas	50806
375	Guanacaste	Tilarán	Arenal	50807
376	Guanacaste	Nandayure	Carmona	50901
377	Guanacaste	Nandayure	Santa Rita	50902
378	Guanacaste	Nandayure	Zapotal	50903
379	Guanacaste	Nandayure	San Pablo	50904
380	Guanacaste	Nandayure	Porvenir	50905
381	Guanacaste	Nandayure	Bejuco	50906
382	Guanacaste	La Cruz	La Cruz	51001
383	Guanacaste	La Cruz	Santa Cecilia	51002
384	Guanacaste	La Cruz	Garita	51003
385	Guanacaste	La Cruz	Santa Elena	51004
386	Guanacaste	Hojancha	Hojancha	51101
387	Guanacaste	Hojancha	Monte Romo	51102
388	Guanacaste	Hojancha	Puerto Carrillo	51103
389	Guanacaste	Hojancha	Huacas	51104
390	Puntarenas	Puntarenas	Puntarenas	60101
391	Puntarenas	Puntarenas	Pitahaya	60102
392	Puntarenas	Puntarenas	Chomes	60103
393	Puntarenas	Puntarenas	Lepanto	60104
394	Puntarenas	Puntarenas	Paquera	60105
395	Puntarenas	Puntarenas	Manzanillo	60106
396	Puntarenas	Puntarenas	Guacimal	60107
397	Puntarenas	Puntarenas	Barranca	60108
398	Puntarenas	Puntarenas	Monte Verde	60109
399	Puntarenas	Puntarenas	Isla del Coco	60110
400	Puntarenas	Puntarenas	Cobano	60111
401	Puntarenas	Puntarenas	Chacarita	60112
402	Puntarenas	Puntarenas	Chira	60113
403	Puntarenas	Puntarenas	Acapulco	60114
404	Puntarenas	Puntarenas	El Roble	60115
405	Puntarenas	Puntarenas	Arancibia	60116
406	Puntarenas	Esparza	Espiritu Santo	60201
407	Puntarenas	Esparza	San Juan Grande	60202
408	Puntarenas	Esparza	Macacona	60203
409	Puntarenas	Esparza	San Rafael	60204
410	Puntarenas	Esparza	San Jerónimo	60205
411	Puntarenas	Buenos Aires	Buenos Aires	60301
412	Puntarenas	Buenos Aires	Volcan	60302
413	Puntarenas	Buenos Aires	Potrero Grande	60303
414	Puntarenas	Buenos Aires	Boruca	60304
415	Puntarenas	Buenos Aires	Pilas	60305
416	Puntarenas	Buenos Aires	Colinas	60306
417	Puntarenas	Buenos Aires	Changena	60307
418	Puntarenas	Buenos Aires	Briolley	60308
419	Puntarenas	Buenos Aires	Brunka	60309
420	Puntarenas	Montes de Oro	Miramar	60401
421	Puntarenas	Montes de Oro	La Unión	60402
422	Puntarenas	Montes de Oro	San Isidro	60403
423	Puntarenas	Osa	Puerto Cortes	60501
424	Puntarenas	Osa	Palmar	60502
425	Puntarenas	Osa	Sierpe	60503
426	Puntarenas	Osa	Bahia Ballena	60504
427	Puntarenas	Osa	Piedras Blancas	60505
428	Puntarenas	Aguirre	Quepos	60601
429	Puntarenas	Aguirre	Savegre	60602
430	Puntarenas	Aguirre	Naranjito	60603
431	Puntarenas	Golfito	Golfito	60701
432	Puntarenas	Golfito	Puerto Jiménez	60702
433	Puntarenas	Golfito	Guaycara	60703
434	Puntarenas	Golfito	Pavon	60704
435	Puntarenas	Coto Brus	San Vito	60801
436	Puntarenas	Coto Brus	Sabalito	60802
437	Puntarenas	Coto Brus	Aguabuena	60803
438	Puntarenas	Coto Brus	Limóncito	60804
439	Puntarenas	Coto Brus	Pittier	60805
440	Puntarenas	Parrita	Parrita	60901
441	Puntarenas	Corredores	Corredor	61001
442	Puntarenas	Corredores	La Cuesta	61002
443	Puntarenas	Corredores	Canoas	61003
444	Puntarenas	Corredores	Laurel	61004
445	Puntarenas	Garabito	Jacó	61101
446	Puntarenas	Garabito	Tarcoles	61102
447	Limón	Limón	Limón	70101
448	Limón	Limón	Valle La Estrella	70102
449	Limón	Limón	Río Blanco	70103
450	Limón	Limón	Matama	70104
451	Limón	Pococí	Guapiles	70201
452	Limón	Pococí	Jiménez	70202
453	Limón	Pococí	Rita	70203
454	Limón	Pococí	Roxana	70204
455	Limón	Pococí	Cariari	70205
456	Limón	Pococí	Colorado	70206
457	Limón	Siquirres	Siquirres	70301
458	Limón	Siquirres	Pacuarito	70302
459	Limón	Siquirres	Florida	70303
460	Limón	Siquirres	Germania	70304
461	Limón	Siquirres	Cairo	70305
462	Limón	Siquirres	Alegria	70306
463	Limón	Talamanca	Bratsi	70401
464	Limón	Talamanca	Sixaola	70402
465	Limón	Talamanca	Cahuita	70403
466	Limón	Talamanca	Telire	70404
467	Limón	Matina	Matina	70501
468	Limón	Matina	Battan	70502
469	Limón	Matina	Carrandi	70503
470	Limón	Guácimo	Guácimo	70601
471	Limón	Guácimo	Mercedes	70602
472	Limón	Guácimo	Pocora	70603
473	Limón	Guácimo	Río Jiménez	70604
474	Limón	Guácimo	Duacari	70605
\.


--
-- Name: clients_tb clients_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY clients_tb
    ADD CONSTRAINT clients_tb_pkey PRIMARY KEY (id);


--
-- Name: document_types_tb document_types_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY document_types_tb
    ADD CONSTRAINT document_types_tb_pkey PRIMARY KEY (id);


--
-- Name: documents_tb documents_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY documents_tb
    ADD CONSTRAINT documents_tb_pkey PRIMARY KEY (id);


--
-- Name: investors_tb investors_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY investors_tb
    ADD CONSTRAINT investors_tb_pkey PRIMARY KEY (id);


--
-- Name: loan_investor_tb loan_investor_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loan_investor_tb
    ADD CONSTRAINT loan_investor_tb_pkey PRIMARY KEY (id);


--
-- Name: loans_tb loans_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loans_tb
    ADD CONSTRAINT loans_tb_pkey PRIMARY KEY (id);


--
-- Name: notifications_tb notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY notifications_tb
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- Name: roles_tb roles_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles_tb
    ADD CONSTRAINT roles_tb_pkey PRIMARY KEY (id);


--
-- Name: scores_tb scores_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY scores_tb
    ADD CONSTRAINT scores_tb_pkey PRIMARY KEY (id);


--
-- Name: states_tb states_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states_tb
    ADD CONSTRAINT states_tb_pkey PRIMARY KEY (id);


--
-- Name: users_tb unique_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_tb
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- Name: users_tb user_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_tb
    ADD CONSTRAINT user_id PRIMARY KEY (id);


--
-- Name: zipcodelist_tb zipCodeList_tb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY zipcodelist_tb
    ADD CONSTRAINT "zipCodeList_tb_pkey" PRIMARY KEY (id);


--
-- Name: loan_investor_tb fk_investor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loan_investor_tb
    ADD CONSTRAINT fk_investor FOREIGN KEY (investor_id) REFERENCES users_tb(id);


--
-- Name: loan_investor_tb fk_loan; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loan_investor_tb
    ADD CONSTRAINT fk_loan FOREIGN KEY (loan_id) REFERENCES loans_tb(id);


--
-- Name: clients_tb fk_loan_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY clients_tb
    ADD CONSTRAINT fk_loan_id FOREIGN KEY (loan_id) REFERENCES loans_tb(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: investors_tb fk_loan_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY investors_tb
    ADD CONSTRAINT fk_loan_id FOREIGN KEY (loan_id) REFERENCES loans_tb(id);


--
-- Name: loans_tb fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY loans_tb
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users_tb(id);


--
-- Name: clients_tb fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY clients_tb
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users_tb(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: investors_tb fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY investors_tb
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users_tb(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--
