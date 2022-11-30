import { FC, memo } from 'react';
import { Box, styled } from '@mui/material';

import ITask from '../../models/ITask';
import Task from './Task';

const Item = styled(Box)(() => ({
    display: 'flex',
    '& > :not(style)': {
        margin: 10,
        width: "40%",
        minHeight: 60,
    },
}));

const TasksList: FC<{ tasks: ITask[]}> = ({ tasks }) => {
    return (
        <Item>
            {tasks && tasks.map(task => <Task key={task.id} task={task} />)}
        </Item>
    );
};

export default memo(TasksList);