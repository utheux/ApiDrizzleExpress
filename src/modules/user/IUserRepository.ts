import { NewUser, User } from "./types/userTypes";

export interface IUserRepository {
    register(data: NewUser): Promise<User>;
    findAll(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User | undefined>;

}