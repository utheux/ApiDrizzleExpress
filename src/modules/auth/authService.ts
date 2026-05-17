import { IUserRepository } from "../user/IUserRepository";
import { SafeUser, User } from "../user/types/userTypes";
import { loginDTO } from "./DTOs/loginDTO";
import bcrypt from 'bcrypt'


class AuthService {
    constructor(private readonly userRepository: IUserRepository ) {}
    async login(data: loginDTO): Promise<SafeUser> {
        const {email, password} = data;
        const user = await this.userRepository.findUserByEmail(email);
        if(!user) {
            throw new Error('User or password incorrect');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            throw new Error('User or password incorrect')

        }

        return user;


    }
}