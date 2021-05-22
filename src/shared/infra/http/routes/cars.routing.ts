import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const carsRouting = Router();

const createCarController = new CreateCarController();

carsRouting.post("/", createCarController.handle);

export { carsRouting };
