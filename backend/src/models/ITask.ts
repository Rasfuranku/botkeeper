import { TaskStatus } from "./TaskStatus";
export default interface ITask {
    id: string,
    description: string,
    duration: number;
    status: TaskStatus;
}