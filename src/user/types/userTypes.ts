import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { usersTable } from "../../db/schema/userSchema";

export type User = InferSelectModel<typeof usersTable>;
export type NewUser = InferInsertModel<typeof usersTable>;