import express from "express";
import env from "./config/env";
import bodyParser from "body-parser";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./db/schema/userSchema";

const db = drizzle(env.DATABASE_URL);
const app = express();
app.use(bodyParser.json);


const dbCalls = async () => {
    await db.insert(usersTable).values({name: 'Matheus', age: 22, email: 'email@email.com', password: '123456'})
    console.log('User created!');

    const users = await db.select().from(usersTable);
    console.log('Users: ', users)
}


app.get('/health', (req, res) => {
    res.send('Hello World!')
})

app.listen(env.PORT, () => {
    console.log(`Server running in ${env.PORT}`)
});

dbCalls()