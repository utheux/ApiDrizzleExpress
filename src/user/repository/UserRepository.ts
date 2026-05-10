import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { usersTable } from "../../db/schema/userSchema";
import { IUserRepository } from "./interfaces/IUserRepository";
import { db } from "../../db/database";
import { NewUser, User } from "../types/userTypes";

export class UserRepository implements IUserRepository {
    async findAll(): Promise<User[]> {
        const users = await db.select().from(usersTable);
        return users;
    }

    async register(data: NewUser): Promise<User> {
        const [user] = await db.insert(usersTable).values(data).returning();
        return user;
    }

    
    
}