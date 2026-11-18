import express from 'express';
import * as gradesController from '../controllers/grades.controller.js';

const gradesRouter = express.Router();

//// GRADES ////

// Get All Grades
gradesRouter.get('/', gradesController.getAllGrades);

// Get Sinlge Grade
gradesRouter.get('/:id', gradesController.getSingleGrade);

export default gradesRouter;