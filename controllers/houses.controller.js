import * as housesRepository from '../repositories/houses.repository.js';
import HTTPError from "../errorhandling/HTTPError.js";


// Get All Houses //
export async function getAllHouses(req, res) {
    const allHouses = await housesRepository.getAllHouses();
    console.log("all houses", allHouses);
    res.json(allHouses);
}

// Get Single House //
export async function getHouseById(req, res) {
    const id = req.params.id;
    const house = await housesRepository.getHouseById(id);

    if (house) {
        return res.status(200).json(house);
    }

    throw new HTTPError(404, "House not found");
}




