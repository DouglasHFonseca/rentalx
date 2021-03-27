import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({
    name,
    username,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };