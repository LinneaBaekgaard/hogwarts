import { pool } from '../db.js';

// Get All Courses
export async function getAllCourses() {
    const result = await pool.query("SELECT * FROM courses");
    console.log(result);
    return result.rows;
}

// Get sinlge course
export async function getCoursesById(id) {
    const result = await pool.query("SELECT * FROM courses WHERE id =$1", [id]);
    if (result.rowcount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}

// Create new course
export async function createCourse(course) {
    const result = await pool.query("INSERT INTO courses (name, teacher, students) VALUES ($1, $2, $3) RETURNING name, teacher, students",
        [course.name, course.teacher, course.students]);
    console.log(result);
    return result.rows;
}

// // Update single course

// Jeg kan ikke finde ud af, hvordan jeg omskriver update for at det virker. Jeg har prøvet forskellige måder, men det vil ikke køre. 

// export async function updateCourse(id, course) {
//     const result = await pool.query("UPDATE courses SET name = $1, teacher = $2, students = $3 WHERE id = $4 RETURNING name, teacher, students, id", [course.name, course.teacher, course.students, id]);
//     if (result.rowcount === 0) {
//         return null;
//     } else {
//         return result.rows[0];
//     }
// }

// Delete single course
export async function deleteCourse(id) {
    const del = await pool.query("DELETE FROM courses WHERE id = $1 RETURNING id", [id]);
    if (del.rowCount === 0) {
        return null;
    } else {
        return del.rows[0];
    }
}