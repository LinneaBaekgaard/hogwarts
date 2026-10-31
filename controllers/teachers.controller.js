import * as teachersRepository from '../repositories/teachers.repository.js';

// Get All teachers
export async function getAllTeachers(req, res) {
    try {
        const allTeachers = await teachersRepository.getAllTeachers();
        console.log("all teachers", allTeachers);
        res.json(allTeachers);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Get Single Teacher
export async function getSingleTeacher(req, res) {
    try {
        const id = req.params.id;
        const teacher = await teachersRepository.getTeacherById(id);
        if (teacher) {
            res.status(200).json(teacher);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error" });
    }
}



// Create New Teacher
export async function createTeacher(req, res) {
    try {
        const teacher = req.body;
        const newTeacher = await teachersRepository.createTeacher(teacher);
        res.status(201).json(newTeacher);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Jeg kan ikke finde ud af, hvordan jeg omskriver update for at det virker. Jeg har prøvet forskellige måder, men det vil ikke køre. 

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
    try {
        const id = req.params.id;
        const deletedTeacher = await teachersRepository.deleteTeacher(id);
        if (deletedTeacher) {
            res.sendStatus(204).json(deleteTeacher);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}


