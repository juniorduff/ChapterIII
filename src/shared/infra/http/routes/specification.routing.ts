import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "@shared/infra/http/middlewares/esureAdmin";
import { ensureAuthentication } from "@shared/infra/http/middlewares/esureAuthentcated";

const specificationRouting = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRouting.post(
  "/",
  ensureAuthentication,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRouting };
