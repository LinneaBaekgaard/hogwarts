import * as teachersRepository from '../repositories/teachers.repository.js';
import HTTPError from '../errorhandling/HTTPError.js';

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
    res.status(201).json(newTeacher);
}


// Update Existing Teacher //
// export async function updateTeacher(req, res) {
//     try {
//         const teacher = req.body;
//         const id = req.params.id;
//         const updatedTeacher = await teachersRepository.updateTeacher(id, teacher);
//         if (updatedTeacher) {
//             res.status(200).json(updatedTeacher);
//         } else {
//             res.sendStatus(404);
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Database error", code: err.code });
//     }
// }

// Delete Single Teahcer
export async function deleteTeacher(req, res) {
    const id = req.params.id;
    const deletedTeacher = await teachersRepository.deleteTeacher(id);

    if (succes) return res.sendStatus(204);

    throw new HTTPError(404, "Teacher does not exist");


    if (teacher) {
        return res.status(200).json(teacher);
    }

    throw new HTTPError(404, "Teacher not found");
}


