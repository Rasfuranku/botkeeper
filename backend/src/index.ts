
import * as dotenv from 'dotenv'
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
dotenv.config();

import JobProcessor from './providers/JobProcessor';
import Socket from './providers/Socket';
import Logger from './config/Logger';

export default class Main {
    private app: express.Application;
    private port: string = process.env.SERVER_PORT;
    private server: http.Server;

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.setUpMiddleware();
        new Socket(this.server);
        new JobProcessor();
        new Logger();
    }

    setUpMiddleware() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    registerBaseUrl() {
        this.app.use("/", (req: express.Request, res: express.Response) => {
            res
            .status(200)
            .json({
                "message": "BotKeeper API",
            })
        });
    }

    start() {
        this.server.listen(this.port, () => {
            Logger.logger.info(`BotKeeper app listening on port ${this.port}`, new Date());
        });
        this.registerBaseUrl();
    }
}

const main = new Main();
main.start();