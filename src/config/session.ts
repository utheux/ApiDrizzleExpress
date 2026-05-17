import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { Pool } from "pg";
import env from "./env";

const PgSession = connectPgSimple(session);

const pool = new Pool({
    connectionString: env.DATABASE_URL,
})

const sessionMiddleware = session({
    store: new PgSession({
        pool,
        tableName: 'session'
    }),
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 
    }
})

export default sessionMiddleware;
