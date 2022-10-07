/* eslint-disable prettier/prettier */
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
