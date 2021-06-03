import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/ImportCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/ListCategories/ListCategoriesController";
import { ensureAdmin } from "@shared/infra/http/middlewares/esureAdmin";
import { ensureAuthentication } from "@shared/infra/http/middlewares/esureAuthentcated";

const categoriesRouting = Router();

const upload = multer({
  dest: "./temp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouting.post(
  "/",
  ensureAuthentication,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRouting.get("/", listCategoriesController.handle);
categoriesRouting.post(
  "/import",
  ensureAuthentication,
  ensureAdmin,
  upload.single("file"),
  importCategoryController.handle
);
export { categoriesRouting };
