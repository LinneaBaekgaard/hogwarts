--
-- PostgreSQL database dump
--

\restrict GF9GEgE07iccAt8srW9Iy7RUY0Bz1ZRHlMl77Zq2iVCLPtn0g0I3nMK1EMx2OjU

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.4

-- Started on 2026-11-01 17:15:24 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 32770)
-- Name: courses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    teacher character varying(80) NOT NULL,
    students character varying(200)[] NOT NULL
);


--
-- TOC entry 219 (class 1259 OID 32769)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 32799)
-- Name: houses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    color character varying(80) NOT NULL,
    founder character varying(80) NOT NULL
);


--
-- TOC entry 225 (class 1259 OID 32798)
-- Name: houses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.houses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.houses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 32789)
-- Name: students; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    house character varying(80) NOT NULL,
    year integer NOT NULL
);


--
-- TOC entry 223 (class 1259 OID 32788)
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 32780)
-- Name: teachers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    house character varying(80) NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 32779)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3734 (class 0 OID 32770)
-- Dependencies: 220
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Transfiguration', 'Minerva McGonagall', '{"Harry Potter"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Transfiguration', 'Minerva McGonagall', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Hannah Abbott","Ernie Macmillan","Justin Finch-Fletchley","Padma Patil","Terry Boot","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Potions', 'Severus Snape', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (4, 'Charms', 'Filius Flitwick', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Hannah Abbott","Ernie Macmillan","Justin Finch-Fletchley","Padma Patil","Terry Boot"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (5, 'Herbology', 'Pomona Sprout', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Hannah Abbott","Ernie Macmillan","Justin Finch-Fletchley","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (6, 'Defence Against the Dark Arts', 'Remus Lupin', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (7, 'Care of Magical Creatures', 'Rubeus Hagrid', '{"Harry Potter","Ron Weasley","Hermione Granger","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (8, 'Divination', 'Sybill Trelawney', '{"Harry Potter","Ron Weasley","Hermione Granger","Padma Patil"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (9, 'Advanced Potions', 'Horace Slughorn', '{"Fred Weasley","George Weasley","Cedric Diggory","Cho Chang"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (10, 'Muggle Studies', 'Charity Burbage', '{"Hermione Granger","Justin Finch-Fletchley"}');
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (11, 'Flying Lessons', 'Quirinus Quirrell', '{"Ginny Weasley","Luna Lovegood"}');


--
-- TOC entry 3740 (class 0 OID 32799)
-- Dependencies: 226
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (1, 'Gryffindor', 'Scarlet', 'Godric Gryffindor');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (2, 'Hufflepuff', 'Yellow', 'Helga Hufflepuff');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (3, 'Ravenclaw', 'Blue', 'Rowena Ravenclaw');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (4, 'Slytherin', 'Green', 'Salazar Slytherin');


--
-- TOC entry 3738 (class 0 OID 32789)
-- Dependencies: 224
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (1, 'Harry Potter', 'Gryffindor', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (2, 'Ron Weasley', 'Gryffindor', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'Hermione Granger', 'Gryffindor', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (4, 'Neville Longbottom', 'Gryffindor', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (5, 'Ginny Weasley', 'Gryffindor', 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (6, 'Fred Weasley', 'Gryffindor', 5);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (7, 'George Weasley', 'Gryffindor', 5);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (8, 'Cedric Diggory', 'Hufflepuff', 6);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (9, 'Cedric Diggory', 'Hufflepuff', 6);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (10, 'Hannah Abbott', 'Hufflepuff', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (11, 'Ernie Macmillan', 'Hufflepuff', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (12, 'Justin Finch-Fletchley', 'Hufflepuff', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (13, 'Luna Lovegood', 'Ravenclaw', 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (14, 'Cho Chang', 'Ravenclaw', 4);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (15, 'Padma Patil', 'Ravenclaw', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (16, 'Terry Boot', 'Ravenclaw', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (17, 'Draco Malfoy', 'Slytherin', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (18, 'Pansy Parkinson', 'Slytherin', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (19, 'Vincent Crabbe', 'Slytherin', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (20, 'Gregory Goyle', 'Slytherin', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (21, 'Blaise Zabini', 'Slytherin', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (22, 'Blaise Zabini', 'Slytherin', 3);


--
-- TOC entry 3736 (class 0 OID 32780)
-- Dependencies: 222
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (3, 'Minerva McGonagall', 'Gryffindor');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (4, 'Severus Snape', 'Slytherin');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (5, 'Filius Flitwick', 'Ravenclaw');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (7, 'Remus Lupin', 'Gryffindor');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (8, 'Rubeus Hagrid', 'Gryffindor');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (9, 'Sybill Trelawney', 'Ravenclaw');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (10, 'Horace Slughorn', 'Slytherin');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (11, 'Quirinus Quirrell', 'Ravenclaw');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (12, 'Charity Burbage', 'Hufflepuff');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (15, ' linn', 'linnea');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (16, ' linn', 'linn');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (17, ' linn', 'linn');


--
-- TOC entry 3746 (class 0 OID 0)
-- Dependencies: 219
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.courses_id_seq', 12, true);


--
-- TOC entry 3747 (class 0 OID 0)
-- Dependencies: 225
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.houses_id_seq', 4, true);


--
-- TOC entry 3748 (class 0 OID 0)
-- Dependencies: 223
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 24, true);


--
-- TOC entry 3749 (class 0 OID 0)
-- Dependencies: 221
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.teachers_id_seq', 17, true);


--
-- TOC entry 3579 (class 2606 OID 32778)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3585 (class 2606 OID 32807)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 3583 (class 2606 OID 32797)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 3581 (class 2606 OID 32787)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


-- Completed on 2026-11-01 17:15:24 CET

--
-- PostgreSQL database dump complete
--

\unrestrict GF9GEgE07iccAt8srW9Iy7RUY0Bz1ZRHlMl77Zq2iVCLPtn0g0I3nMK1EMx2OjU

