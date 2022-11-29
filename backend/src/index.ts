
import * as dotenv from 'dotenv'
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as http from 'http';
dotenv.config();

import Queue from './providers/Queue';
import TaskProcessor from './providers/TaskProcessor';
import Socket from './providers/Socket';
import BotController from "./controllers/BotController";
import { ROUTES } from './constants/routes';
import { IBot } from './models/IBot';

const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:3000/",
}

export default class Main {
    private app: express.Application;
    private port: string;
    private queue: Queue;
    private server: http.Server;
    private socket: Socket;

    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT;
        this.server = http.createServer(this.app);
        this.socket = new Socket(this.server);
        this.queue = Queue.getQueueInstance();
        this.setUpMiddleware();
        this.registerRoutes();
    }

    setUpMiddleware() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        // this.app.use(cors(corsOptions));
    }
    
    registerBotController() {
        const botController = new BotController(this.queue).init();
        return this.app.use(`/${ROUTES.BOTS}`, botController);
    }

    registerBaseUrl() {
        this.app.use("/", (req: express.Request, res: express.Response) => {
            res
            .status(200)
            .json({
                "message": "Home",
            })
        });
    }

    registerIo() {
        this.socket.start();
    }

    registerRoutes() {
        this.app = this.registerBotController();
        this.registerBaseUrl();
        this.registerIo();
    }

    start() {
        this.server.listen(this.port, () => {
          console.log(`Example app listening on port ${this.port}`)
        });
        new TaskProcessor(this.queue);
    }
}

const main = new Main();
main.start();