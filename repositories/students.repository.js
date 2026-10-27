import { pool } from '../db.js';

export async function getAllStudents() {
    const result = await pool.query("SELECT * FROM students");
    console.log(result);
    return result.rows;
}

export async function getStudentById(id) {
    const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
    if (result.rowCount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}