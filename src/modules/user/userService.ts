import { IUserRepository } from "./IUserRepository";
import bcrypt from 'bcrypt'
import { NewUser, User } from "./types/userTypes";

export class UserService {
    constructor(private readonly userRepository: IUserRepository) {}

    async createUser(data: NewUser): Promise<User> {
        const {name, age, email, password} = data;
        const hashPassword = await bcrypt.hash(password, 10);
        return this.userRepository.register({name, age, email, password: hashPassword});
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}
