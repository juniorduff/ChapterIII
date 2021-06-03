import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/CreateCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "@shared/infra/http/middlewares/esureAdmin";
import { ensureAuthentication } from "@shared/infra/http/middlewares/esureAuthentcated";

const carsRouting = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRouting.post(
  "/",
  ensureAuthentication,
  ensureAdmin,
  createCarController.handle
);

carsRouting.get("/available", listAvailableCarsController.handle);
carsRouting.post(
  "/specifications/:id",
  ensureAuthentication,
  ensureAdmin,
  createCarSpecificationController.handle
);
export { carsRouting };
