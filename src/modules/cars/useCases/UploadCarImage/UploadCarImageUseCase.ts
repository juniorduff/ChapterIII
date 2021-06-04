import { inject, injectable } from "tsyringe";

import { CarsImageRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";

interface IRequest {
  car_id: string;
  image_name: string[];
}

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject("CarsImageRepository")
    private carsImageRepository: CarsImageRepository
  ) {}

  async execute({ car_id, image_name }: IRequest) {
    image_name.map(async (image) => {
      await this.carsImageRepository.create(car_id, image);
    });
  }
}

export { UploadCarImageUseCase };
