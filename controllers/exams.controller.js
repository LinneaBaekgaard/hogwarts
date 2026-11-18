import * as examsRepository from "../repositories/exams.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import UpdateExamDto from "../dtos/updateexam.dto.js";

// Get All exams
export async function getAllExams(req, res) {
  const allExams = await examsRepository.getAllExams();
  console.log("all exams", allExams);
  res.json(allExams);
}

// Get single course
export async function getSingleExam(req, res) {
  const id = req.params.id;
  const exam = await examsRepository.getExamById(id);
  if (exam) {
    return res.status(200).json(exam);
  }

  throw new HTTPError(404, "Exam not found");
}

// Create new course
export async function createExam(req, res) {
  const exam = req.body;
  const newExam = await examsRepository.createExam(exam);

  if (newExam) {
    return res.status(201).json(newExam);
  }
  throw new HTTPError(404, "Exam not found");
}

// Update single course
export async function updateExam(req, res) {
  const input = req.body;
  const id = req.params.id;

  const oldExam = await examsRepository.getExamById(id);
  if (!oldExam) throw new HTTPError(404, "Exam does not exist");

  const newExamData = UpdateExamDto.parse(input);
  const newExam = await examsRepository.updatedExam(id, newExamData);

  return res.status(201).json(newExam);
}

// Delete single course
export async function deleteExam(req, res) {
  const id = req.params.id;
  const deletedExam = await examsRepository.deleteExam(id);

  if (deletedExam) return res.sendStatus(204);

  throw new HTTPError(404, "Exam does not exist");
}
