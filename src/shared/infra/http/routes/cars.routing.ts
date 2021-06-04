import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/CreateCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { UploadCarImageController } from "@modules/cars/useCases/UploadCarImage/UploadCarImageController";
import { ensureAdmin } from "@shared/infra/http/middlewares/esureAdmin";
import { ensureAuthentication } from "@shared/infra/http/middlewares/esureAuthentcated";

const carsRouting = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImageController = new UploadCarImageController();
const upload = multer(uploadConfig.upload("./temp/cars"));

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

carsRouting.post(
  "/images/:id",
  ensureAuthentication,
  ensureAdmin,
  upload.array("images"),
  uploadCarImageController.handle
);
export { carsRouting };
