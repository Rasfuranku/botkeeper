import { Router } from "express";

const routerBot = Router();

routerBot.get('/', (req, res) => {
    console.log("Get Bot controller");
    res.status(200).send('Hello World!');
});

export default routerBot;