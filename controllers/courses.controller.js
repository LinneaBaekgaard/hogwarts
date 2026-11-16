import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import UpdateCourseDto from "../dtos/updatecourse.dto.js";

// Get All courses
export async function getAllCourses(req, res) {
  const allCourses = await coursesRepository.getAllCourses();
  console.log("all courses", allCourses);
  res.json(allCourses);
}

// Get single course
export async function getSingleCourse(req, res) {
  const id = req.params.id;
  const course = await coursesRepository.getCourseById(id);
  if (course) {
    return res.status(200).json(course);
  }

  throw new HTTPError(404, "Course not found");
}

// Create new course
export async function createCourse(req, res) {
  const course = req.body;
  const newCourse = await coursesRepository.createCourse(course);

  if (newCourse) {
    return res.status(201).json(newCourse);
  }
  throw new HTTPError(404, "Course not found");
}

// Update single course
export async function updateCourse(req, res) {
  const input = req.body;
  const id = req.params.id;

  const oldCourse = await coursesRepository.getCourseById(id);
  if (!oldCourse) throw new HTTPError(404, "Course does not exist");

  const newCourseData = UpdateCourseDto.parse(input);
  const newCourse = await coursesRepository.updatedCourse(id, newCourseData);

  return res.status(201).json(newCourse);
}

// Delete single course
export async function deleteCourse(req, res) {
  const id = req.params.id;
  const deletedCourse = await coursesRepository.deleteCourse(id);

  if (deletedCourse) return res.sendStatus(204);

  throw new HTTPError(404, "Course does not exist");
}
