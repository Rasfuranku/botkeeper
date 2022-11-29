import ITask from "src/models/ITask";

class Queue {
    private static queueInstance: Queue;
    private queue: ITask[] = [];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}
    
    public static getQueueInstance() {
        if (!Queue.queueInstance) {
            Queue.queueInstance = new Queue();
        }
        return Queue.queueInstance;
    }
    
    enQueue(tasks: ITask[]) {
        this.queue.push(...tasks);
    }

    deQueue(): ITask {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

export default Queue;