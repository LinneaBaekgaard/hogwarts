// Importerer express som bruges til at lave router. 
import express from 'express';
// Importerer alle funktioner fra controlleren samlet, så de kan tilgås i router og sendes til index. 
import * as housesController from '../controllers/houses.controller.js';

// Jeg har lavet alle HTTP funktionerne, men jeg har valgt ikke at oprette Update og Delete i min database, da Houses (i harry potter) ikke kan ændres i eller slettes. Der vil altid være de 4. 
// Dog oprettede jeg POST for at kunne tilføje de 4 huse den vej igennem. Derfor kan update og delete ikke udføres før de er oprettet i databasen. 

// Her oprettes en ny router som samler alle routes for husenene. 
const housesRouter = express.Router();

//// HOUSES //// 

// Get All Houses // 

// Når klienten sender GET med '/houses' kører getAllHouses fra controlleren, og de modtager dermed alle huse. 
housesRouter.get('/houses', housesController.getAllHouses);

// Get Sinlge House //

// Når klienten sender GET "/houses/:id" kører getSingleHouse fra controlleren og modtager dermed det enkelte hus. 
housesRouter.get("/houses/:id", housesController.getSingleHouse);

// Create New House //

// Når klienten sender en POST med '/houses', kører createHouse fra controlleren og modtager dermed det nye oprettede hus. 
housesRouter.post('/houses', housesController.createHouse);

// Update Existing house //

// Når klienten sender en PUT med "/houses/:id", kører updateHouse fra controlleren og modtager dermed det opdaterede hus.  
// housesRouter.put("/houses/:id", housesController.updateHouse);

// Delete Single House //

// Når klienten sender en delete med "/houses/:id", kører deleteHouse fra controlleren og modtager dermed en besked på, at det gældende hus er slette. 
// housesRouter.delete("/houses/:id", housesController.deleteHouse);

// Eksporterer routeren som default så index kan importere og tilgå den. 
export default housesRouter;