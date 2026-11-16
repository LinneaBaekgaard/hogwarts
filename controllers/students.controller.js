import * as studentsRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import UpdateStudentDto from "../dtos/updatestudent.dto.js";

// Get All Students
export async function getAllStudents(req, res) {
  const allStudents = await studentsRepository.getAllStudents();
  console.log("all students", allStudents);
  res.json(allStudents);
}

// Get Single Student
export async function getSingleStudent(req, res) {
  const id = req.params.id;
  const student = await studentsRepository.getStudentById(id);
  if (student) {
    return res.status(200).json(student);
  }

  throw new HTTPError(404, "Student not found");
}

// Create New Student
export async function createStudent(req, res) {
  const student = req.body;
  const newStudent = await studentsRepository.createStudent(student);
  if (newStudent) {
    return res.status(201).json(newStudent);
  }
  throw new HTTPError(404, "Student not found");
}

// Update Existing Student
export async function updateStudent(req, res) {
  const input = req.body;
  const id = req.params.id;

  const oldStudent = await studentsRepository.getStudentById(id);
  if (!oldStudent) throw new HTTPError(404, "Student does not exist");

  const newStudentData = UpdateStudentDto.parse(input);
  const newStudent = await studentsRepository.updatedStudent(id, newStudentData);

  return res.status(201).json(newStudent);
}

// Delete Single Student
export async function deleteStudent(req, res) {
  const id = req.params.id;
  const deletedStudent = await studentsRepository.deleteStudent(id);

  if (deletedStudent) return res.sendStatus(204);

  throw new HTTPError(404, "Student does not exist");
}
