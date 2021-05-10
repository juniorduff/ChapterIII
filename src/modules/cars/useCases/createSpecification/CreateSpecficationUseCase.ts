import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecficationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(
      name
    );
    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecficationUseCase };
