import { Router } from "express";

import { AuthenticateController } from "../modules/accounts/authenticateUser/AuthenticateController";

const authenticateRouting = Router();
const authenticateUserController = new AuthenticateController();
authenticateRouting.post("/sessions", authenticateUserController.handle);
export { authenticateRouting };
