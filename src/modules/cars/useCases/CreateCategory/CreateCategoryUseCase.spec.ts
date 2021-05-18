import { AppError } from "../../../../errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoryRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should create a new category", async () => {
    const category = {
      name: "category test",
      description: "category test",
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });
    const isexist = await categoriesRepositoryInMemory.findByName(
      category.name
    );
    expect(isexist).toHaveProperty("id");
  });

  it("should not be able to create a new category with same name ", async () => {
    expect(async () => {
      const category = {
        name: "category test",
        description: "category test",
      };
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
