import { Router } from "express";

import { AuthenticateController } from "../modules/accounts/authenticateUser/AuthenticateController";

const authenticateRoutes = Router();
const authenticateUserController = new AuthenticateController();
authenticateRoutes.post("/sessions", authenticateUserController.handle);
export { authenticateRoutes };
