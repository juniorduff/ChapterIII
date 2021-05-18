import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });
    this.users.push(user);

    return Promise.resolve(undefined);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((u) => u.email === email);
  }

  async findById(user_id: string): Promise<User> {
    return this.users.find((u) => u.id === user_id);
  }
}

export { UsersRepositoryInMemory };
