import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implemetations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/implementations/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/implementations/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
