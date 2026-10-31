import { pool } from '../db.js';

// Get All students
export async function getAllStudents() {
    const result = await pool.query("SELECT * FROM students");
    console.log(result);
    return result.rows;
}

// Get single student
export async function getStudentById(id) {
    const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
    if (result.rowCount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}

// Create new student
export async function createStudent(student) {
    const result = await pool.query("INSERT INTO students (name, house, year) VALUES ($1, $2, $3) RETURNING name, house, year",
        [student.name, student.house, student.year],);
    console.log(result);
    return result.rows;
}

// Jeg kan ikke få update functionen til at virke. Jeg omskriver den forkert. 

// // Update existing student
// export async function updateStudent(id) {
//     const result = await pool.query("UPDATE students SET name = $1, house = $2, year = $3 WHERE id = $4 RETURNING name, house, year, id", [student.name, student.house, student.year, id]);
//     if (result.rowCount === 0) {
//         return null;
//     } else {
//         return result.rows[0];
//     }
// }

// Delete single Student
export async function deleteStudent(id) {
    const del = await pool.query("DELETE FROM students WHERE id = $1", [id]);
    if (del.rowCount === 0) {
        return null;
    } else {
        return del.rows[0];
    }
}