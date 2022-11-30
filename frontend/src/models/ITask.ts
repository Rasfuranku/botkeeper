export default interface ITask {
    id: string
    description: string
    duration: number
    status: TaskStatus
}

export enum TaskStatus {
    notStarted,
    processing,
    finished,
}