import * as studentsRepository from '../repositories/students.repository.js';

export async function getAllStudents(req, res) {
    try {
        const allStudents = await studentsRepository.getAllStudents();
        console.log("All students", allStudents);
        res.json(allStudents);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

export async function getSingleStudent(req, res) {
    try {
        const id = req.params.id;
        const student = await studentsRepository.getStudentById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}