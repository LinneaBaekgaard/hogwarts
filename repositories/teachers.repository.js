import { pool } from '../db.js';

export async function getAllTeachers() {
    const result = await pool.query("SELECT * FROM teachers");
    console.log(result);
    return result.rows;
}

export async function getTeacherById(id) {
    const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);
    if (result.rowCount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}