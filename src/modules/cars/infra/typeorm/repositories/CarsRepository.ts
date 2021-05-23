import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    fine_amount,
    license_plate,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
      category_id,
    });
    await this.repository.save(car);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return await this.repository.findOne({ license_plate });
  }

  async findAvailable(brand?: string, category_id?: string, name?: string) {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available =:available ", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", { brand });
    }
    if (name) {
      carsQuery.andWhere("c.name = :name", { name });
    }
    if (category_id) {
      carsQuery.andWhere("c.category_id = :category_id", { category_id });
    }
    const cars = await carsQuery.getMany();
    return cars;
  }
}

export { CarsRepository };
