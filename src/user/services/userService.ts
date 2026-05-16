import { IUserRepository } from "../repository/interfaces/IUserRepository";
import { NewUser, User } from "../types/userTypes";
import bcrypt from 'bcrypt'

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
