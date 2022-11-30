import ITask, { TaskStatus } from "../models/ITask";

const tasks: ITask[] = [
    {
        id: "",
        description: 'process invoice',
        duration: 1500,
        status: TaskStatus.notStarted,
    },
    {
        id: "",
        description: 'categorize transactions',
        duration: 2750,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'extract statement data',
        duration: 18000,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'amortize loan payments',
        duration: 2573,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'depreciate fixed assets',
        duration: 7454,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'calculate payroll allocations',
        duration: 37473,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'generate month end report',
        duration: 34332,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'audit for discrepancies',
        duration: 6765,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'close the books',
        duration: 3643,
        status: TaskStatus.notStarted, 
    },
    {
        id: "",
        description: 'perform reconciliation',
        duration: 4542,
        status: TaskStatus.notStarted, 
    }
];

export default tasks;