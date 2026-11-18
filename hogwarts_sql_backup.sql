--
-- PostgreSQL database dump
--

\restrict gnsMDo10Wx3pdGoSDYNxIcbZ8W2Fafchh2MRYdH2QiTPPo1w3WQonS5JVsMcywj

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.4

-- Started on 2026-11-18 20:49:14 CET

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
    students character varying(200)[] NOT NULL,
    type character varying(20),
    level character varying(4),
    year integer
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
-- TOC entry 230 (class 1259 OID 32902)
-- Name: exams; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exams (
    id integer NOT NULL,
    student_id integer,
    course_id integer,
    grade_id integer
);


--
-- TOC entry 229 (class 1259 OID 32901)
-- Name: exams_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3770 (class 0 OID 0)
-- Dependencies: 229
-- Name: exams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exams_id_seq OWNED BY public.exams.id;


--
-- TOC entry 228 (class 1259 OID 32894)
-- Name: grades; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.grades (
    id integer NOT NULL,
    letter character varying(10),
    name character varying(80),
    description character varying(200),
    passed boolean
);


--
-- TOC entry 227 (class 1259 OID 32893)
-- Name: grades_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.grades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3771 (class 0 OID 0)
-- Dependencies: 227
-- Name: grades_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.grades_id_seq OWNED BY public.grades.id;


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
    year integer NOT NULL,
    birthday date
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
    house_id integer,
    employment_start date,
    currently_active boolean,
    deceased boolean
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
-- TOC entry 3589 (class 2604 OID 32905)
-- Name: exams id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams ALTER COLUMN id SET DEFAULT nextval('public.exams_id_seq'::regclass);


--
-- TOC entry 3588 (class 2604 OID 32897)
-- Name: grades id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades ALTER COLUMN id SET DEFAULT nextval('public.grades_id_seq'::regclass);


--
-- TOC entry 3754 (class 0 OID 32770)
-- Dependencies: 220
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Transfiguration', 'Minerva McGonagall', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Hannah Abbott","Ernie Macmillan","Justin Finch-Fletchley","Padma Patil","Terry Boot","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}', 'core', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Potions', 'Severus Snape', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}', 'core', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (4, 'Charms', 'Filius Flitwick', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Hannah Abbott","Ernie Macmillan","Justin Finch-Fletchley","Padma Patil","Terry Boot"}', 'core', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (5, 'Herbology', 'Pomona Sprout', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Hannah Abbott","Ernie Macmillan","Justin Finch-Fletchley","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}', 'core', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (6, 'Defence Against the Dark Arts', 'Remus Lupin', '{"Harry Potter","Ron Weasley","Hermione Granger","Neville Longbottom","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle","Blaise Zabini"}', 'core', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (7, 'Care of Magical Creatures', 'Rubeus Hagrid', '{"Harry Potter","Ron Weasley","Hermione Granger","Draco Malfoy","Pansy Parkinson","Vincent Crabbe","Gregory Goyle"}', 'elective', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (8, 'Divination', 'Sybill Trelawney', '{"Harry Potter","Ron Weasley","Hermione Granger","Padma Patil"}', 'elective', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (9, 'Advanced Potions', 'Horace Slughorn', '{"Fred Weasley","George Weasley","Cedric Diggory","Cho Chang"}', 'core', 'NEWT', 6);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (10, 'Muggle Studies', 'Charity Burbage', '{"Hermione Granger","Justin Finch-Fletchley"}', 'elective', 'OWL', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (11, 'Flying Lessons', 'Quirinus Quirrell', '{"Ginny Weasley","Luna Lovegood"}', 'extra-curricular', 'OWL', 2);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Transfiguration', 'Minerva McGonagall', '{"Harry Potter"}', 'core', 'OWL', 3);


--
-- TOC entry 3764 (class 0 OID 32902)
-- Dependencies: 230
-- Data for Name: exams; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.exams VALUES (1, 1, 2, 3);
INSERT INTO public.exams VALUES (2, 2, 2, 4);
INSERT INTO public.exams VALUES (3, 3, 2, 2);
INSERT INTO public.exams VALUES (4, 4, 2, 5);
INSERT INTO public.exams VALUES (5, 10, 2, 4);
INSERT INTO public.exams VALUES (6, 15, 2, 3);
INSERT INTO public.exams VALUES (7, 1, 3, 4);
INSERT INTO public.exams VALUES (8, 2, 3, 5);
INSERT INTO public.exams VALUES (9, 3, 3, 2);
INSERT INTO public.exams VALUES (10, 4, 3, 7);
INSERT INTO public.exams VALUES (11, 17, 3, 3);
INSERT INTO public.exams VALUES (12, 19, 3, 6);
INSERT INTO public.exams VALUES (13, 20, 3, 6);
INSERT INTO public.exams VALUES (14, 1, 4, 3);
INSERT INTO public.exams VALUES (15, 2, 4, 4);
INSERT INTO public.exams VALUES (16, 3, 4, 2);
INSERT INTO public.exams VALUES (17, 4, 4, 4);
INSERT INTO public.exams VALUES (18, 15, 4, 2);
INSERT INTO public.exams VALUES (19, 1, 5, 3);
INSERT INTO public.exams VALUES (20, 2, 5, 4);
INSERT INTO public.exams VALUES (21, 3, 5, 2);
INSERT INTO public.exams VALUES (22, 4, 5, 2);
INSERT INTO public.exams VALUES (23, 17, 5, 4);
INSERT INTO public.exams VALUES (24, 1, 6, 2);
INSERT INTO public.exams VALUES (25, 2, 6, 3);
INSERT INTO public.exams VALUES (26, 3, 6, 2);
INSERT INTO public.exams VALUES (27, 4, 6, 4);
INSERT INTO public.exams VALUES (28, 17, 6, 3);
INSERT INTO public.exams VALUES (29, 1, 7, 3);
INSERT INTO public.exams VALUES (30, 3, 7, 2);
INSERT INTO public.exams VALUES (31, 17, 7, 4);
INSERT INTO public.exams VALUES (32, 20, 7, 7);
INSERT INTO public.exams VALUES (33, 1, 8, 5);
INSERT INTO public.exams VALUES (34, 2, 8, 6);
INSERT INTO public.exams VALUES (35, 3, 8, 5);
INSERT INTO public.exams VALUES (36, 15, 8, 4);
INSERT INTO public.exams VALUES (37, 6, 9, 4);
INSERT INTO public.exams VALUES (38, 7, 9, 4);
INSERT INTO public.exams VALUES (39, 8, 9, 2);
INSERT INTO public.exams VALUES (40, 14, 9, 3);
INSERT INTO public.exams VALUES (41, 3, 10, 2);
INSERT INTO public.exams VALUES (42, 12, 10, 2);
INSERT INTO public.exams VALUES (43, 5, 11, 2);
INSERT INTO public.exams VALUES (44, 13, 11, 4);


--
-- TOC entry 3762 (class 0 OID 32894)
-- Dependencies: 228
-- Data for Name: grades; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.grades VALUES (2, 'O', 'Outstanding', 'The highest grade. Your work was exceptional and well above what was expected.', true);
INSERT INTO public.grades VALUES (3, 'E', 'Exceeds Expectations', 'A strong result. You performed better than what was required to pass.', true);
INSERT INTO public.grades VALUES (4, 'A', 'Acceptable', 'The lowest passing grade. You met the minimum requirements.', true);
INSERT INTO public.grades VALUES (5, 'P', 'Poor', 'You have narrowly failed. This may have been due to factors outside your control.', false);
INSERT INTO public.grades VALUES (6, 'D', 'Dreadful', 'A clear fail. You did not show a sufficient understanding of the subject.', false);
INSERT INTO public.grades VALUES (7, 'T', 'Troll', 'The lowest grade. Your performance showed almost no understanding of the subject.', false);


--
-- TOC entry 3760 (class 0 OID 32799)
-- Dependencies: 226
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (1, 'Gryffindor', 'Scarlet', 'Godric Gryffindor');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (2, 'Hufflepuff', 'Yellow', 'Helga Hufflepuff');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (3, 'Ravenclaw', 'Blue', 'Rowena Ravenclaw');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (4, 'Slytherin', 'Green', 'Salazar Slytherin');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (5, 'Linneashus', 'Purple', 'LinneaBaekgaard');


--
-- TOC entry 3758 (class 0 OID 32789)
-- Dependencies: 224
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (1, 'Harry Potter', 'Gryffindor', 3, '1980-07-31');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (2, 'Ron Weasley', 'Gryffindor', 3, '1980-03-01');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'Hermione Granger', 'Gryffindor', 3, '1979-09-19');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (4, 'Neville Longbottom', 'Gryffindor', 3, '1980-07-30');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (5, 'Ginny Weasley', 'Gryffindor', 2, '1981-08-11');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (6, 'Fred Weasley', 'Gryffindor', 5, '1978-04-01');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (7, 'George Weasley', 'Gryffindor', 5, '1978-04-01');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (8, 'Cedric Diggory', 'Hufflepuff', 6, '1977-10-01');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (10, 'Hannah Abbott', 'Hufflepuff', 3, '1980-05-12');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (11, 'Ernie Macmillan', 'Hufflepuff', 3, '1979-11-03');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (12, 'Justin Finch-Fletchley', 'Hufflepuff', 3, '1980-02-20');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (13, 'Luna Lovegood', 'Ravenclaw', 2, '1981-02-13');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (14, 'Cho Chang', 'Ravenclaw', 4, '1979-04-07');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (15, 'Padma Patil', 'Ravenclaw', 3, '1979-10-14');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (16, 'Terry Boot', 'Ravenclaw', 3, '1980-01-25');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (17, 'Draco Malfoy', 'Slytherin', 3, '1980-06-05');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (18, 'Pansy Parkinson', 'Slytherin', 3, '1979-12-09');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (19, 'Vincent Crabbe', 'Slytherin', 3, '1980-03-17');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (20, 'Gregory Goyle', 'Slytherin', 3, '1980-08-22');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (21, 'Blaise Zabini', 'Slytherin', 3, '1980-04-29');


--
-- TOC entry 3756 (class 0 OID 32780)
-- Dependencies: 222
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (37, 'Wilhelmina Grubbly-Plank', NULL, '1994-09-01', false, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (38, 'Rubeus Hagrid', NULL, '1993-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (39, 'Firenze', NULL, '1996-09-01', false, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (18, 'Minerva McGonagall', 1, '1956-12-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (19, 'Remus Lupin', 1, '1993-09-01', true, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (20, 'Charity Burbage', 1, '1985-09-01', true, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (21, 'Albus Percival Wulfric Brian Dumbledore', 1, '1920-09-01', true, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (22, 'Filius Flitwick', 2, '1975-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (23, 'Quirinus Quirrell', 2, '1985-09-01', false, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (24, 'Gilderoy Lockhart', 2, '1992-09-01', false, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (25, 'Sybill Trelawney', 2, '1980-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (26, 'Pomona Sprout', 3, '1970-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (27, 'Silvanus Kettleburn', 3, '1950-09-01', false, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (28, 'Horace Slughorn', 4, '1931-09-01', false, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (29, 'Severus Snape', 4, '1981-09-01', true, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (30, 'Dolores Umbridge', 4, '1995-09-01', false, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (31, 'Bathsheda Babbling', NULL, '1985-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (32, 'Aurora Sinistra', NULL, '1980-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (33, 'Alastor Moody', NULL, '1994-09-01', false, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (34, 'Rolanda Hooch', NULL, '1975-09-01', true, false);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (35, 'Cuthbert Binns', NULL, '1900-09-01', true, true);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (36, 'Septima Vector', NULL, '1982-09-01', true, false);


--
-- TOC entry 3772 (class 0 OID 0)
-- Dependencies: 219
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.courses_id_seq', 14, true);


--
-- TOC entry 3773 (class 0 OID 0)
-- Dependencies: 229
-- Name: exams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.exams_id_seq', 46, true);


--
-- TOC entry 3774 (class 0 OID 0)
-- Dependencies: 227
-- Name: grades_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.grades_id_seq', 7, true);


--
-- TOC entry 3775 (class 0 OID 0)
-- Dependencies: 225
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.houses_id_seq', 5, true);


--
-- TOC entry 3776 (class 0 OID 0)
-- Dependencies: 223
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 27, true);


--
-- TOC entry 3777 (class 0 OID 0)
-- Dependencies: 221
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.teachers_id_seq', 41, true);


--
-- TOC entry 3591 (class 2606 OID 32778)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3601 (class 2606 OID 32908)
-- Name: exams exams_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_pkey PRIMARY KEY (id);


--
-- TOC entry 3599 (class 2606 OID 32900)
-- Name: grades grades_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades
    ADD CONSTRAINT grades_pkey PRIMARY KEY (id);


--
-- TOC entry 3597 (class 2606 OID 32807)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 3595 (class 2606 OID 32797)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 3593 (class 2606 OID 32787)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- TOC entry 3603 (class 2606 OID 32914)
-- Name: exams exams_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 3604 (class 2606 OID 32919)
-- Name: exams exams_grade_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grades(id);


--
-- TOC entry 3605 (class 2606 OID 32909)
-- Name: exams exams_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id);


--
-- TOC entry 3602 (class 2606 OID 32817)
-- Name: teachers teachers_house_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_house_id_fkey FOREIGN KEY (house_id) REFERENCES public.houses(id) NOT VALID;


-- Completed on 2026-11-18 20:49:15 CET

--
-- PostgreSQL database dump complete
--

\unrestrict gnsMDo10Wx3pdGoSDYNxIcbZ8W2Fafchh2MRYdH2QiTPPo1w3WQonS5JVsMcywj

