import express from 'express';
import * as housesController from '../controllers/houses.controller.js';

const housesRouter = express.Router();

//// HOUSES //// 

// Get All Houses // 
housesRouter.get('/', housesController.getAllHouses);

// Get Sinlge House //
housesRouter.get('/:id', housesController.getHouseById);

// Create New House 
// housesRouter.post('/', housesController.createHouse);

export default housesRouter;