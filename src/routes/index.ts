import { Router } from "express";

import { authenticateRouting } from "./authenticate.routing";
import { categoriesRouting } from "./categories.routing";
import { specificationRouting } from "./specification.routing";
import { usersRouting } from "./users.routing";

const router = Router();
router.use("/categories", categoriesRouting);
router.use("/specifications", specificationRouting);
router.use("/users", usersRouting);
router.use(authenticateRouting);

export { router };
