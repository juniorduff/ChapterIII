import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRouting = Router();

const upload = multer({
  dest: "./temp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouting.post("/", createCategoryController.handle);

categoriesRouting.get("/", listCategoriesController.handle);
categoriesRouting.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);
export { categoriesRouting };
