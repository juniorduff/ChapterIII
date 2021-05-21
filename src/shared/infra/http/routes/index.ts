import { Router } from "express";

import { authenticateRouting } from "@shared/infra/http/routes/authenticate.routing";
import { carsRouting } from "@shared/infra/http/routes/cars.routing";
import { categoriesRouting } from "@shared/infra/http/routes/categories.routing";
import { specificationRouting } from "@shared/infra/http/routes/specification.routing";
import { usersRouting } from "@shared/infra/http/routes/users.routing";

const router = Router();
router.use("/categories", categoriesRouting);
router.use("/specifications", specificationRouting);
router.use("/users", usersRouting);
router.use("/cars", carsRouting);
router.use(authenticateRouting);

export { router };
