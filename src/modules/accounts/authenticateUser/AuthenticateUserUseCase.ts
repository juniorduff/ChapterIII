import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.repository.findByEmail(email);
    const passwordMatch = await compare(password, user.password);
    if (!user) {
      throw new AppError("Email or password incorrect");
    }
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }
    const token = sign({}, "b03e3fd2b3d22ff6df2796c412b09311", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }
}

export { AuthenticateUserUseCase };
