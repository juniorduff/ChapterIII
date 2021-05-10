import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecficationUseCase } from "./CreateSpecficationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecficationUseCase = container.resolve(
      CreateSpecficationUseCase
    );

    await createSpecficationUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateSpecificationController };
