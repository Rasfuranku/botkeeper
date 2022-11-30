import Logger from "../config/Logger";
import { IJob } from "../models/IJob";

class Queue {
    private static queueInstance: Queue;
    private queue: IJob[] = [];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}
    
    public static getQueueInstance() {
        if (!Queue.queueInstance) {
            Queue.queueInstance = new Queue();
        }
        return Queue.queueInstance;
    }
    
    enQueue(job: IJob[]) {
        this.queue.push(...job);
        Logger.logger.info(`Job | %s | added to the queue`, job);
    }

    deQueue(): IJob {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

export default Queue;