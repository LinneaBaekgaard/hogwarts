import { pool } from "../db.js";

// Get All Houses //
export async function getAllHouses() {
  const result = await pool.query("SELECT * FROM houses");
  console.log(result);
  return result.rows;
}

// Get Single House //
export async function getHouseById(id) {
  const result = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// Create New House //
// export async function createHouse() {
//   const result = await pool.query("INSERT INTO houses (name, color, founder) VALUES ($1, $2, $3) RETURNING id, name, color, founder", [house.name, house.color, house.founder]);
//   return result.rows[0];
// }
