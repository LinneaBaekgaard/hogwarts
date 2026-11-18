import { pool } from "../db.js";

// Get All Exams
export async function getAllExams() {
  const result = await pool.query(/* sql */ `select exams.id, students.name as student, courses.name as course, grades.letter as grade from exams 
    left join students on exams.student_id = students.id
    left join courses on exams.course_id = courses.id
    left join grades on exams.grade_id = grades.id` );

  return result.rows;
}

// Get Single Exam
export async function getExamById(id) {
  const result = await pool.query(/* sql */`select exams.id, students.name as student, courses.name as course, grades.letter as grade from exams 
    left join students on exams.student_id = students.id
    left join courses on exams.course_id = courses.id
    left join grades on exams.grade_id = grades.id WHERE exams.id = $1`, [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// Create New Exam
export async function createExam(exam) {
  const result = await pool.query("INSERT INTO exams (student_id, course_id, grade_id) VALUES ($1, $2, $3) RETURNING id, student_id, course_id, grade_id", [exam.student_id, exam.course_id, exam.grade_id]);
  return result.rows[0];
}

// Update Existing Exam
export async function updatedExam(id, newExamData) {
    const result = await pool.query("UPDATE exams SET student_id = $1, course_id = $2, grade_id = $3 WHERE id = $4 RETURNING id",
        [newExamData.student_id, newExamData.course_id, newExamData.grade_id, id],
    );

    if(result.rowCount === 0) return null;

    const updatedId = result.rows[0].id;
    return getExamById(updatedId);
}

// Delete Single Exam
export async function deleteExam(id) {
  const del = await pool.query("DELETE FROM exams WHERE id = $1 RETURNING id", [id]);
  if (del.rowCount === 0) {
    return null;
  } else {
    return del.rows[0];
  }
}
