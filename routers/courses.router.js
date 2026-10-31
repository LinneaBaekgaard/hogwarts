import express from 'express';
import * as coursesController from '../controllers/courses.controller.js';


const coursesRouter = express.Router();

//// COURSES ////

// Get All Courses
coursesRouter.get('/courses', coursesController.getAllCourses);

// Get Sinlge Course
coursesRouter.get("/courses/:id", coursesController.getSingleCourse);

// Create new course
coursesRouter.post('/courses', coursesController.createCourse);

// Update existing course
// Jeg kan ikke finde ud af, hvordan jeg omskriver update for at det virker. Jeg har prøvet forskellige måder, men det vil ikke køre. 

// coursesRouter.put("/houses/:id", coursesController.updateCourse);

// Delete single course
coursesRouter.delete("/courses/:id", coursesController.deleteCourse);

export default coursesRouter;