import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implemetations/UsersRepository";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authheader = request.headers.authorization;

  if (!authheader) {
    throw new Error("Token missing");
  }
  const [, token] = authheader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "b03e3fd2b3d22ff6df2796c412b09311"
    ) as IPayLoad;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User does not exist", 401);
    }
    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
