// const express = require("express");
import express from "express";

// const Pool = require("./db");
import { pool } from "./db.js";

// Repository imports
import * as housesRepository from './repositories/houses.repository.js';
import * as teachersRepository from './repositories/teachers.repository.js';
import * as studentsRepository from './repositories/students.repository.js';
import * as coursesRepository from './repositories/courses.repository.js';

// Controllers imports
import * as housesController from './controllers/houses.controller.js';
import * as teachersController from './controllers/teachers.controller.js';
import * as studentsController from './controllers/students.controller.js';
import * as coursesController from './controllers/courses.controller.js';

// Routes imports
import housesRouter from './routers/houses.router.js';
import teachersRouter from './routers/teachers.router.js';
import studentsRouter from './routers/students.router.js';
import coursesRouter from './routers/courses.router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));

/////// HOUSES ///////
app.use(housesRouter);

/////// TEACHERS ///////
app.use(teachersRouter);

/////// STUDENTS ///////
app.use(studentsRouter);

/////// COURSES ///////
app.use(coursesRouter);

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));