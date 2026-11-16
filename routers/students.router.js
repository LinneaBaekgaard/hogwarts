import express from 'express';
import * as studentsController from '../controllers/students.controller.js';


const studentsRouter = express.Router();

//// STUDENTS ////

// Get All Students
studentsRouter.get('/', studentsController.getAllStudents);

// Get Sinlge Student
studentsRouter.get('/:id', studentsController.getSingleStudent);

// Create new student
studentsRouter.post('/', studentsController.createStudent);

// Update existing student
studentsRouter.put("/:id", studentsController.updateStudent);

// Delete single student
studentsRouter.delete("/:id", studentsController.deleteStudent);


export default studentsRouter;