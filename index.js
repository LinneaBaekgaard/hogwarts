// const express = require("express");
import express from "express";

// Global Error Handling
import errorhandler from "./errorhandling/errorhandler.js";

// const Pool = require("./db");
import { pool } from "./db.js";

// Repository imports
import * as housesRepository from './repositories/houses.repository.js';
import * as teachersRepository from './repositories/teachers.repository.js';
import * as studentsRepository from './repositories/students.repository.js';
import * as coursesRepository from './repositories/courses.repository.js';
import * as gradesRepository from './repositories/grades.repository.js';
import * as examsRepository from './repositories/exams.repository.js';


// Routes imports
import housesRouter from './routers/houses.router.js';
import teachersRouter from './routers/teachers.router.js';
import studentsRouter from './routers/students.router.js';
import coursesRouter from './routers/courses.router.js';
import gradesRouter from './routers/grades.router.js';
import examsRouter from './routers/exams.router.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));

/////// HOUSES ///////
app.use("/houses", housesRouter);
/////// TEACHERS ///////
app.use("/teachers", teachersRouter);
/////// STUDENTS ///////
app.use("/students", studentsRouter);
/////// COURSES ///////
app.use("/courses", coursesRouter);
/////// GRADES ///////
app.use("/grades", gradesRouter);
/////// EXAMS ///////
app.use("/exams", examsRouter);


// Error handling --------------------------------------------------
app.use(errorhandler);


app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));

