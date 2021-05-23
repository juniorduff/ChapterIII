import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    brand,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      name,
      description,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
    });
    this.cars.push(car);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((c) => c.license_plate === license_plate);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    return this.cars.filter((c) => {
      if (
        c.available === true ||
        (brand && c.brand === brand) ||
        (category_id && c.category_id === category_id) ||
        (name && c.name === name)
      ) {
        return c;
      }
      return null;
    });
  }
}

export { CarsRepositoryInMemory };
