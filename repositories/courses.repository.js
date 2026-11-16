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
    const result = await pool.query("INSERT INTO courses (name, teacher, students, type, level, year) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, name, teacher, students, type, level, year",
        [course.name, course.teacher, course.students, course.type, course.level, course.year]);
    return result.rows[0];
}

// // Update single course
export async function updatedCourse(id, newCourseData) {
    const result = await pool.query("UPDATE courses SET name = $1, teacher = $2, students = $3, type = $4, level = $5, year = $6 WHERE id = $7 RETURNING id",
        [newCourseData.name, newCourseData.teacher, newCourseData.students, newCourseData.type, newCourseData.level, newCourseData.year,  id],
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