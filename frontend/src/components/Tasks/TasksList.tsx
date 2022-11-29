import { FC } from 'react';
import { Box, Paper } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from '../../models/ITask';
import Task from './Task';

const TasksList: FC<{ tasks: ITask[]}> = ({ tasks }) => {
    return (
        <Box
            sx={{
            display: 'flex',
            '& > :not(style)': {
                m: 1,
                width: "40%",
                height: 60,
            },
        }}
        >
            {tasks && tasks.map(task => <Task taskDescription={task.description} key={uuidv4()}/>)}
        </Box>
    );
};

export default TasksList;