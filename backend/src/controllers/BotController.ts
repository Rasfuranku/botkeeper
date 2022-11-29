import { Router } from "express";
import Queue from "../providers/Queue";

class BotController {
    private router: Router;
    private queue: Queue;

    constructor(queue) {
        this.router = Router();
        this.queue = queue;
    }

    init() {
        this.register();
        return this.router;
    }

    register() {
        this.router.post('/', (req, res) => {
            const { tasks } = req.body;
            console.log(tasks);            
            this.queue.enQueue(tasks);
            res.status(200).send('Processing');
        });
    }
}

export default BotController;