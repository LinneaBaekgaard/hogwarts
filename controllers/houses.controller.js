// Importerer alle funktionerne fra housesRepository for at controlleren kan kalde de gældne funktioner. 
import * as housesRepository from '../repositories/houses.repository.js';

// Get All Houses //

// opretter / laver getAllHouses funtionen med request og respons som parametre. 
export async function getAllHouses(req, res) {
    // Laver en PRØV til hvis alt virker uden fejl. 
    try {
        // Kalder allHouses fra repository og venter på svar med listen af alle huse. 
        const allHouses = await housesRepository.getAllHouses();
        // console logger alle huse i terminalen for at se om det rigtige data modtages. Listen af alle husene gemmes i variablen "allHouses". 
        console.log("all houses", allHouses);
        // Sender respons med listen af alle huse til klienten i json format. (svarer til status kode 200 hvis alt virker). 
        res.json(allHouses);
    }
    // Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".      
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Get Single House //

// Opretter / laver getSingleHouse funktinen med request og respons son parametre som henter ét specifikt hus. 
export async function getSingleHouse(req, res) {
    // laver en PRØV til hvis alt virker uden fejl. 
    try {
        // Henter id'et fra URL'en
        const id = req.params.id;
        // Vi sender id'et videre til repository som her spørger databasen om det specifikke hus. 
        const house = await housesRepository.getHouseById(id);
        // Hvis id'et findes sendes en statuskode (200) tilbage med OK alt virker. Vi får her huset i json format. 
        if (house) {
            res.status(200).json(house);
        } else { // Hvis ikke id'et findes i databasen sendes en 404 statuskode (not found) som indikerer at id ik findes
            res.sendStatus(404);
        }
    } // Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".  
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error" });
    }
}

// Create New House //

// Opretter / laver createHouse funktinen med request og respons son parametre. 
export async function createHouse(req, res) {
    // laver en PRØV til hvis alt virker uden fejl. 
    try {
        // Henter et bestemt hus ud fra det specifikt Id fra URL'en i repository. 
        // Henter id'et fra URL'en. 
        const house = req.body;
        // Vi sender id'et videre til repository som herefter spørger databasen efter det nye hus (newHouse). 
        // Vi venter på svar fra databasen med await. 
        const newHouse = await housesRepository.createHouse(house);
        // Hvis huset findes (altså er oprettet), sendes en statuskode med 201 (created), og vi får det nye hus tilbage i json format. 
        res.status(201).json(newHouse);
    }
    // Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".  
    catch (err) {
        console.log(err);
        // console logger i terminalen så vi kan se fejlen. 
        res.status(500).json({ error: "Database error", code: err.code });
    }
}

// Update an Existing House
// export async function updateHouse(req, res) {
//     try {
//         const house = req.body;
//         const id = req.params.id;
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Database error", code: err.code });
//     }
// }

// Delete Single House
// export async function deleteHouse(req, res) {
//     try {
//         const id = req.params.id;
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Database error", code: err.code });
//     }
// }