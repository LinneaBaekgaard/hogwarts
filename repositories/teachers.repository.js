import { pool } from '../db.js';

// Get All Teachers 
export async function getAllTeachers() {
    const result = await pool.query("SELECT * FROM teachers");
    console.log(result);
    return result.rows;
}

// Get Single Teacher
export async function getTeacherById(id) {
    const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);
    if (result.rowCount === 0) {
        return null;
    } else {
        return result.rows[0];
    }
}

// Create New Teacher
export async function createTeacher(teacher) {
    const result = await pool.query("INSERT INTO teachers (name, house) VALUES ($1, $2) RETURNING name, house",
        [teacher.name, teacher.house],);
    console.log(result);
    return result.rows;
}

// Jeg kan ikke få update functionen til at virke. Jeg omskriver den forkert. 

// Update Existing Teacher

// FØRSTE UDGAVE FRA INDEX:
// app.put("/teachers/:id", async (req, res) => {
//     const teacher = req.body;
//     const id = req.params.id;

//     try {
//         const result = await pool.query(
//             "UPDATE teachers SET name = $1, house = $2 WHERE id = $3 RETURNING name, house, id",
//             [teacher.name, teacher.house, id],
//         );

//         if (result.rowCount === 0) return res.sendStatus(404);

//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Database error" });
//     }
// });

// FORSØG PÅ OMSKRIVNING:
// export async function updateTeacher(id, teacher) {
//     const result = await pool.query("UPDATE teachers SET name = $1, house = $2 WHERE id = $3 RETURNING name, house, id", [teacher.name, teacher.house, id]);
//     if (result.rowCount === 0) {
//         return null;
//     } else {
//         return result.rows[0];
//     }
// }

// Delete Single Teacher 
export async function deleteTeacher(id) {
    const del = await pool.query("DELETE FROM teachers WHERE id = $1 RETURNING id", [id]);
    if (del.rowCount === 0) {
        return null;
    } else {
        return del.rows[0];
    }
}