import { v4 as uuidv4 } from 'uuid';
import ITask, { TaskStatus } from "../../models/ITask";
import tasks from "../../statics/tasks";


export const randomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const getTasks = (): ITask[] => {
    const selectedTasks = [];
    const tasksCopy: ITask[] = [...tasks];
    
    for (let i = 0; i < 2; i++) {
        const index = randomIndex(tasksCopy.length);
        const task = tasksCopy.splice(index, 1);
        selectedTasks.push({
            ...task[0],
            id: uuidv4(),
            status: TaskStatus.processing
        });
    }

    return selectedTasks;
}