Pseudo
import * as coursesRepository from '../repositories/courses.repository.js';

// Get All courses
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

// Get single course
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

// Create new course
export async function createCourse(req, res) {
    try {
        const course = req.body;
        const newCourse = await coursesRepository.createCourse(course);
        res.status(201).json(newCourse);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Update single course

// Jeg kan ikke finde ud af, hvordan jeg omskriver update for at det virker. Jeg har prøvet forskellige måder, men det vil ikke køre. 

// export async function updateCourse(req, res) {
//     try {
//         const course = req.body;
//         const id = req.params.id;
//         const updatedCourse = await coursesRepository.updateCourse(id, course);
//         if (updatedCourse) {
//             res.status(200).json(updatedCourse);
//         } else {
//             res.sendStatus(404);
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ erro: "Database Error", code: err.code });
//     }
// }

// Delete single course
export async function deleteCourse(req, res) {
    try {
        const id = req.params.id;
        const deletedCourse = await coursesRepository.deleteCourse(id);
        if (deletedCourse) {
            res.sendStatus(204).json(deleteCourse);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}
