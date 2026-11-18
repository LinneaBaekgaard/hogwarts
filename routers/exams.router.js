import express from 'express';
import * as examsController from '../controllers/exams.controller.js';


const examsRouter = express.Router();

//// EXAMS ////

// Get All Exams
examsRouter.get('/', examsController.getAllExams);

// Get Sinlge Exam
examsRouter.get('/:id', examsController.getSingleExam);

// Create new Exam
examsRouter.post('/', examsController.createExam);

// Update existing Exam
examsRouter.put("/:id", examsController.updateExam);

// Delete single Exam
examsRouter.delete("/:id", examsController.deleteExam);


export default examsRouter;