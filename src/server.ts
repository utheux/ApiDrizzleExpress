import express from "express";
import env from "./config/env";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json);

app.get('/health', (req, res) => {
    res.send('Hello World!')
})

app.listen(env.PORT, () => {
    console.log(`Server running in ${env.PORT}`)
});

