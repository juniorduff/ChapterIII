import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthentication } from "../middlewares/esureAuthentcated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRouting = Router();
const uploadAvatar = multer(uploadConfig.upload("./temp/avatar"));

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRouting.post("/", createUserController.handle);
usersRouting.patch(
  "/avatar",
  ensureAuthentication,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRouting };
