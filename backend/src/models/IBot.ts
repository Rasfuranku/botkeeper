import ITask from "./ITask";

export interface IBot {
    id: string
    name: string
    tasks: ITask[]
}