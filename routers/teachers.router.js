import express from 'express';
import * as teachersController from '../controllers/teachers.controller.js';


const teachersRouter = express.Router();

//// TEACHERS ////

// Get All Teachers 
teachersRouter.get('/teachers', teachersController.getAllTeachers);

// Get Sinlge Teachers
teachersRouter.get("/teachers/:id", teachersController.getSingleTeacher);

// Create New Teacher 
teachersRouter.post('/teachers', teachersController.createTeacher);

// Update Existing Teacher 

// Jeg kan ikke få det til at virke. Jeg omskriver forkert i controllers og repository.
// teachersRouter.put("/teachers/:id", teachersController.updateTeacher);

// Delete Single Teacher
teachersRouter.delete("/teachers/:id", teachersController.deleteTeacher);

export default teachersRouter;