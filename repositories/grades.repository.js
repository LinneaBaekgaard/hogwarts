import { pool } from "../db.js";

// Get All Grades
export async function getAllGrades() {
  const result = await pool.query("SELECT * FROM grades");

  return result.rows;
}

// Get Single Grade
export async function getGradeById(id) {
  const result = await pool.query("SELECT * FROM grades WHERE id =$1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}