import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should  be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "001234",
      email: "user@teste.com",
      password: "1234",
      name: "user test",
    };
    await createUserUseCase.execute(user);
    await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });
  });
});
