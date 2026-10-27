import { pool } from '../db.js';

export async function getAllCourses() {
    const result = await pool.query("SELECT * FROM courses");
    console.log(result);
    return result.rows;
}

export async function getCoursesById(id) {
    const result = await pool.query("SELECT * FROM courses WHERE id =$1", [id]);
    if (result.rowcount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}