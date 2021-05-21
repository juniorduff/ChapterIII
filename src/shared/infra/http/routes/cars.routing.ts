import { Router } from "express";

import { CreateCarConrtroller } from "@modules/cars/useCases/createCar/CreateCarConrtroller";

const carsRouting = Router();

const createCarController = new CreateCarConrtroller();

carsRouting.post("/", createCarController.handle);

export { carsRouting };
