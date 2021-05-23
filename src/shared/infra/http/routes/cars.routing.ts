import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "@shared/infra/http/middlewares/esureAdmin";
import { ensureAuthentication } from "@shared/infra/http/middlewares/esureAuthentcated";

const carsRouting = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRouting.post(
  "/",
  ensureAuthentication,
  ensureAdmin,
  createCarController.handle
);

carsRouting.get("/available", listAvailableCarsController.handle);

export { carsRouting };
