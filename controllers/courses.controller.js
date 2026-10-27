import * as coursesRepository from '../repositories/courses.repository.js';

export async function getAllCourses(req, res) {
    try {
        const allCourses = await coursesRepository.getAllCourses();
        console.log("all courses", allCourses);
        res.json(allCourses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

export async function getSingleCourse(req, res) {
    try {
        const id = req.params.id;
        const course = await coursesRepository.getCoursesById(id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.stauts(500).json({ error: "Database error", code: err.code });
    }
}