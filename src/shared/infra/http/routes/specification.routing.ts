import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthentication } from "@shared/infra/http/middlewares/esureAuthentcated";

const specificationRouting = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRouting.use(ensureAuthentication);
specificationRouting.post("/", createSpecificationController.handle);

export { specificationRouting };
