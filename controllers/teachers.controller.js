import * as teachersRepository from '../repositories/teachers.repository.js';

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