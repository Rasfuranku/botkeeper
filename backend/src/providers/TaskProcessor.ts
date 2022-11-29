import ITask from "src/models/ITask";
import Queue from "./Queue";

class TaskProcessor {
    isProcessing: boolean;
    queue: Queue;

    constructor(queue: Queue) {
        this.isProcessing = false;
        this.queue = queue;
        this.init();
    }

    init() {
        console.log("Processor started");
        setInterval(() => {
            this.processTask();
        }, 500);
    }

    startTask(task: ITask) {
        this.isProcessing = true;
        const startedTime = Date.now();
        console.log(`Task ${task.description} started at ${startedTime}`)
        
        setTimeout(() => {
            console.log(`Task ${task.description} is in process with a duration of ${task.duration}`);
            this.isProcessing = false;
            console.log(`Time processed is ${startedTime - task.duration}`);
        }, task.duration);
    }

    processTask() {
        let currentTask: ITask = undefined;
        if (!this.isProcessing && !this.queue.isEmpty()) {
            currentTask =  this.queue.deQueue();
            console.log(`Processing ${currentTask.description}`);
            this.startTask(currentTask);
        }
    }
}

export default TaskProcessor;