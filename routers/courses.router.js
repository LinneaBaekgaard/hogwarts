import express from 'express';
import * as coursesController from '../controllers/courses.controller.js';


const coursesRouter = express.Router();

//// COURSES ////

// Get All Courses
coursesRouter.get('/', coursesController.getAllCourses);

// Get Sinlge Course
coursesRouter.get('/:id', coursesController.getSingleCourse);

// Create new course
coursesRouter.post('/', coursesController.createCourse);

// Update existing course
coursesRouter.put("/:id", coursesController.updateCourse);

// Delete single course
coursesRouter.delete("/:id", coursesController.deleteCourse);

export default coursesRouter;