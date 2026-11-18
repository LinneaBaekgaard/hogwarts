import { pool } from "../db.js";

// Get All Teachers
export async function getAllTeachers() {
  const result = await pool.query(/* sql */ `select teachers.id, teachers.name, houses.name as house, teachers.employment_start, teachers.currently_active, teachers.deceased 
    from teachers left join houses on teachers.house_id = houses.id`);

  return result.rows;
}

// Get Single Teacher
export async function getTeacherById(id) {
  const result = await pool.query(/* sql */`select teachers.id, teachers.name, houses.name as house, teachers.employment_start, teachers.currently_active, teachers.deceased  
    from teachers left join houses on teachers.house_id = houses.id WHERE teachers.id = $1`, [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// Create New Teacher
export async function createTeacher(teacher) {
  const result = await pool.query("INSERT INTO teachers (name, house_id, employment_start, currently_active, deceased) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, house_id, employment_start, currently_active, deceased", [teacher.name, teacher.house_id, teacher.employment_start, teacher.currently_active, teacher.deceased]);
  return result.rows[0];
}

// Update Existing Teacher
export async function updatedTeacher(id, newTeacherData) {
    const result = await pool.query("UPDATE teachers SET name = $1, house_id = $2, employment_start = $3, currently_active = $4, deceased = $5 WHERE id = $6 RETURNING id",
        [newTeacherData.name, newTeacherData.house_id, newTeacherData.employment_start, newTeacherData.currently_active, newTeacherData.deceased, id],
    );

    if(result.rowCount === 0) return null;

    const updatedId = result.rows[0].id;
    return getTeacherById(updatedId);
}

// Delete Single Teacher
export async function deleteTeacher(id) {
  const del = await pool.query("DELETE FROM teachers WHERE id = $1 RETURNING id", [id]);
  if (del.rowCount === 0) {
    return null;
  } else {
    return del.rows[0];
  }
}
