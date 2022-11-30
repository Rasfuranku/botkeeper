import Logger from "../config/Logger";
import { IJob } from "../models/IJob";
import { TaskStatus } from "../models/TaskStatus";
import Queue from "./Queue";
import Socket from "./Socket";

class JobProcessor {
    queue: Queue;

    constructor() {
        this.queue = Queue.getQueueInstance();
        this.init();
    }

    init() {
        Logger.logger.info("Job Processor started");
        setInterval(() => {
            this.startProcessor();
        }, 500);
    }

    processTask(job: IJob) {
        const { task } = job;

        setTimeout(() => {
            Logger.logger.info(`%s - Processing: | %s | - estimated time: %s`, new Date(), job.task.description, job.task.duration);
            task.status = TaskStatus.finished;
            Socket.emit(job);
        }, task.duration);
    }
    
    startProcessor() {
        if (!this.queue.isEmpty()) {
            const currentJob =  this.queue.deQueue();
            Logger.logger.info(`%s - Job | %s | removed from queue`, new Date(), currentJob.task.description);
            this.processTask(currentJob);
        }
    }
}

export default JobProcessor;