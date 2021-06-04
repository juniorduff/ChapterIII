import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImageUseCase } from "@modules/cars/useCases/UploadCarImage/UploadCarImageUseCase";

interface IFiles {
  fileName: string;
}

class UploadCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = (request.files as unknown) as IFiles[];
    const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

    const image_name = images.map((file) => file.fileName);

    await uploadCarImageUseCase.execute({
      car_id: id,
      image_name,
    });
    return response.status(201).send();
  }
}

export { UploadCarImageController };
