import { usersTable } from "../../db/schema/userSchema";
import { IUserRepository } from "./IUserRepository";
import { db } from "../../db/database";
import { NewUser, User } from "./types/userTypes";
import { eq } from "drizzle-orm/pg-core/expressions";

export class UserRepository implements IUserRepository {
    async findUserByEmail(email: string): Promise<User | undefined> {
        const user = await db.query.usersTable.findFirst({
            where: eq(usersTable.email, email),
        })
        return user;
    }

    async findAll(): Promise<User[]> {
        const users = await db.select().from(usersTable);
        return users;
    }

    async register(data: NewUser): Promise<User> {
        const [user] = await db.insert(usersTable).values(data).returning();
        return user;
    }

    
    
}