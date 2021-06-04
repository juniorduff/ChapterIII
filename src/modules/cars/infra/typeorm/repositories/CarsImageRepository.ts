import { getRepository, Repository } from "typeorm";

import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { ICarsImageRepository } from "@modules/cars/repositories/in-memory/ICarsImageRepository";

class CarsImageRepository implements ICarsImageRepository {
  private repostory: Repository<CarImage>;

  constructor() {
    this.repostory = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repostory.create({ car_id, image_name });
    await this.repostory.save(carImage);
    return carImage;
  }
}

export { CarsImageRepository };
