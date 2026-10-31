import express from 'express';
import * as studentsController from '../controllers/students.controller.js';


const studentsRouter = express.Router();

//// STUDENTS ////

// Get All Students
studentsRouter.get('/students', studentsController.getAllStudents);

// Get Sinlge Student
studentsRouter.get("/students/:id", studentsController.getSingleStudent);

// Create new student
studentsRouter.post('/students', studentsController.createStudent);

// Update existing student
// Jeg kan ikke finde ud af, hvordan jeg omskriver update for at det virker. Jeg har prøvet forskellige måder, men det vil ikke køre.

// studentsRouter.put("/students/:id", studentsController.updateStudent);

// Delete single student
studentsRouter.delete("/students/:id", studentsController.deleteStudent);


export default studentsRouter;