import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import UpdateTeacherDto from "../dtos/updateteacher.dto.js";

// Get All teachers
export async function getAllTeachers(req, res) {
  const allTeachers = await teachersRepository.getAllTeachers();
  console.log("all teachers", allTeachers);
  res.json(allTeachers);
}

// Get Single Teacher
export async function getSingleTeacher(req, res) {
  const id = req.params.id;
  const teacher = await teachersRepository.getTeacherById(id);

  if (teacher) {
    return res.status(200).json(teacher);
  }

  throw new HTTPError(404, "Teacher not found");
}

// Create New Teacher
export async function createTeacher(req, res) {
  const teacher = req.body;
  const newTeacher = await teachersRepository.createTeacher(teacher);
  
  if(newTeacher) {
    return res.status(201).json(newTeacher);
  }
   throw new HTTPError(404, "Teacher not found");
}

// Update Existing Teacher //
export async function updateTeacher(req, res) {
  const input = req.body;
  const id = req.params.id;

  const oldTeacher = await teachersRepository.getTeacherById(id);
  if (!oldTeacher) throw new HTTPError(404, "Teacher does not exist");

  const newTeacherData = UpdateTeacherDto.parse(input);
  const newTeacher = await teachersRepository.updatedTeacher(id, newTeacherData);

  return res.status(201).json(newTeacher);
}

// Delete Single Teahcer
export async function deleteTeacher(req, res) {
  const id = req.params.id;
  const deletedTeacher = await teachersRepository.deleteTeacher(id);

  if (deletedTeacher) return res.sendStatus(204);

  throw new HTTPError(404, "Teacher does not exist");
}
