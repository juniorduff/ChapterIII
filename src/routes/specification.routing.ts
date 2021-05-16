import { Router } from "express";

import { ensureAuthentication } from "../middlewares/esureAuthentcated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRouting = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRouting.use(ensureAuthentication);
specificationRouting.post("/", createSpecificationController.handle);

export { specificationRouting };
