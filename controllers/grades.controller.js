import * as gradesRepository from "../repositories/grades.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

// Get All Grades
export async function getAllGrades(req, res) {
  const allGrades = await gradesRepository.getAllGrades();
  console.log("all grades", allGrades);
  res.json(allGrades);
}

// Get Single Grade
export async function getSingleGrade(req, res) {
  const id = req.params.id;
  const grade = await gradesRepository.getGradeById(id);

  if (grade) {
    return res.status(200).json(grade);
  }

  throw new HTTPError(404, "Grade not found");
}