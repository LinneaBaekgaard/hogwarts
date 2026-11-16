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
    const result = await pool.query("INSERT INTO students (name, house, year, birthday) VALUES ($1, $2, $3, $4) RETURNING id, name, house, year, birthday",
        [student.name, student.house, student.year, student.birthday],);
    return result.rows[0];
}

// Update existing student
export async function updatedStudent(id, newStudentData) {
    const result = await pool.query("UPDATE students SET name = $1, house = $2, year = $3, birthday = $4 WHERE id = $5 RETURNING id",
        [newStudentData.name, newStudentData.house, newStudentData.year, newStudentData.birthday, id],
    );

    if(result.rowCount === 0) return null;

    const updatedId = result.rows[0].id;
    return getStudentById(updatedId);
}

// Delete single Student
export async function deleteStudent(id) {
    const del = await pool.query("DELETE FROM students WHERE id = $1 RETURNING id", [id]);
    if (del.rowCount === 0) {
        return null;
    } else {
        return del.rows[0];
    }
}