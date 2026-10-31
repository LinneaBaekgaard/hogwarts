// Starter med at impoterer forbindelsen til databasen (pgAdmin) fra db.js filen, så repository'et kan sende SQL forespørgelserne til databasen. 
import { pool } from "../db.js";

// Get All Houses //

// Laver / opretter getAllHouses funktionen fra index. 
// Beder om at sende en GET sql forespørgsel til databasen om at sende Alle rækker fra Houses tilbage til os. 
export async function getAllHouses() {
    // Venter på svar fra databasen.
    const result = await pool.query("SELECT * FROM houses");
    // console logger hele resultatet i terminallen, så vi kan fange potentielle fejl.
    console.log(result);
    // returnerer rækkerne fra tabellen (som en liste) videre til controller. 
    return result.rows;
}

// Get Single House //

// Laver / opretter getHouseById funktionen fra index og sender ID med som parameter fra controlleren, som kommer fra URL'en. 
export async function getHouseById(id) {
    // Beder om at sende en GET sql forespørgsel til databasen om at sende det specifikke hus med det specifikke id som matcher. 
    // Venter på svar fra databsen. 
    const result = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);
    // Hvis IKKE databasen finder en række med det specifikke id, returneres NULL (ikke fundet).
    if (result.rowCount === 0) {
        return null;
    } else { // Hvis Id findes, returneres den specifikke række fra huset med det specifikke id. 
        return result.rows[0];
    }
}

// Create New House //

// Laver / opretter createHouse functionen fra index. 
export async function createHouse() {
    // Beder om at sende en POST sql forespørgsel til databasen om at oprette et nyt hus med de specifikke rækker tabellen i databasen består af. 
    // Venter på svar fra databasen med await. 
    // Bruger returning som får databasen til at sende os det nye hus tilbage. 
    const result = await pool.query("INSERT INTO houses (name, color, founder) VALUES ($1, $2, $3) RETURNING name, color, founder", [house.name, house.color, house.founder]);
    // Returnerer det nye oprettede hus til controlleren. 
    return result.rows[0];
}

// Update New House
// export async function updateHouse() {
//     const result = await pool.query("UPDATE houses SET name = $1, color = $2, founder = $3 WHERE id = $4 RETURNING name, color, founder, id", [house.name, house.color, house.founder, id]);
//     if (result.rowCount === 0) {
//         return null;
//     } else {
//         return result.row[0];
//     }
// }

// Delete Single house 
// export async function deleteHouse() {
//     const del = await pool.query("DELETE FROM houses WHERE id = $1", [req.params.id]);
//     if (result.rowCount === 0) {
//         return null;
//     } else {
//         return result.row[0];
//     }
// }