import * as studentsRepository from '../repositories/students.repository.js';

// Get All Students
export async function getAllStudents(req, res) {
    try {
        const allStudents = await studentsRepository.getAllStudents();
        console.log("all students", allStudents);
        res.json(allStudents);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Get Single Student
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

// Create New Student
export async function createStudent(req, res) {
    try {
        const student = req.body;
        const newStudent = await studentsRepository.createStudent(student);
        res.status(201).json(newStudent);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Update Existing Student

// FØR OMSKRIVNING:
// app.put("/students/:id", async (req, res) => {
//   const student = req.body;
//   const id = req.params.id;

//   try {
//     const result = await pool.query("UPDATE students SET name = $1, house = $2, year = $3 WHERE id = $4 RETURNING name, house, year, id", [student.name, student.house, student.year, id]);

//     if (result.rowCount === 0) return res.sendStatus(404);

//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// FORSØGT OMSKREVET:
// export async function updateStudent(req, res) {
//     try {
//         const student = req.body;
//         const id = req.params.id;
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Database error", code: err.code });
//     }
// }


// Delete Single Student
export async function deleteStudent(req, res) {
    try {
        const id = req.params.id;
        const deletedStudent = await studentsRepository.deleteStudent(id);
        if (deletedStudent) {
            res.sendStatus(204).json(deleteStudent);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}