import z from "zod/v4";


const envSchema = z.object({
    PORT: z.coerce.number(),
    DATABASE_URL: z.string().startsWith('postgres'),
    SESSION_SECRET: z.string()
})

const env =  envSchema.parse(process.env)


export default env;