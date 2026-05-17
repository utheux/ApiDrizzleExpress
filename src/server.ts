import express from "express";
import env from "./config/env";
import bodyParser from "body-parser";
import sessionMiddleware from "./config/session";

const app = express();
app.use(bodyParser.json);
app.use(sessionMiddleware);

app.get('/health', (req, res) => {
    res.send('Hello World!')
})

app.listen(env.PORT, () => {
    console.log(`Server running in ${env.PORT}`)
});

