import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsUseCase";

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("shold to able a list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car1",
      description: "car description ",
      daily_rate: 140.0,
      license_plate: "ABC-12312",
      fine_amount: 122,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand",
    });

    expect(cars).toEqual([car]);
  });

  it("shold to able a list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car3",
      description: "car description ",
      daily_rate: 140.0,
      license_plate: "ABC-12312",
      fine_amount: 122,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      name: "car_brand",
    });
    expect(cars).toEqual([car]);
  });
  it("shold to able a list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car1",
      description: "car description ",
      daily_rate: 140.0,
      license_plate: "ABC-12312",
      fine_amount: 122,
      brand: "brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand",
    });
    expect(cars).toEqual([car]);
  });
  it("shold to able a list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car1",
      description: "car description ",
      daily_rate: 140.0,
      license_plate: "ABC-12312",
      fine_amount: 122,
      brand: "brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "category_id",
    });
    expect(cars).toEqual([car]);
  });
});
