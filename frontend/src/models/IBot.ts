import ITask from "./ITask";

export default interface IBot {
    id: string
    name: string
    tasks: ITask[]
}