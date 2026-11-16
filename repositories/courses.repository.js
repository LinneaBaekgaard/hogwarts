import { pool } from '../db.js';

// Get All Courses
export async function getAllCourses() {
    const result = await pool.query("SELECT * FROM courses");
 
    return result.rows;
}

// Get sinlge course
export async function getCourseById(id) {
    const result = await pool.query("SELECT * FROM courses WHERE id =$1", [id]);
    if (result.rowCount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}

// Create new course
export async function createCourse(course) {
    const result = await pool.query("INSERT INTO courses (name, teacher, students) VALUES ($1, $2, $3) RETURNING id, name, teacher, students",
        [course.name, course.teacher, course.students]);
    return result.rows[0];
}

// // Update single course
export async function updatedCourse(id, newCourseData) {
    const result = await pool.query("UPDATE courses SET name = $1, teacher = $2, students = $3 WHERE id = $4 RETURNING id",
        [newCourseData.name, newCourseData.teacher, newCourseData.students, id],
    );

    if(result.rowCount === 0) return null;

    const updatedId = result.rows[0].id;
    return getCourseById(updatedId);
}

// Delete single course
export async function deleteCourse(id) {
    const del = await pool.query("DELETE FROM courses WHERE id = $1 RETURNING id", [id]);
    if (del.rowCount === 0) {
        return null;
    } else {
        return del.rows[0];
    }
}