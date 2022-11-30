import { FC, useEffect, useState } from 'react';
import { Paper, styled } from '@mui/material';
import ITask, { TaskStatus } from '../../models/ITask';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.primary,
    lineHeight: '60px',
    paddingLeft: 10,
    paddingRight: 10,
    width: "40%",
    backgroundColor: "#242732"
}));

const taskStatusColor = {
    processing: "#1AC1FE",
    finished: "#0CBF35" 
}

const Task: FC<{ task: ITask}> = ({ task }) => {
    const [borderColor, setBorderColor] = useState("");
    
    const markStatusBox = () => {
        if (task.status === TaskStatus.processing) {
            setBorderColor(taskStatusColor.processing);
        }

        if (task.status === TaskStatus.finished) {
            setBorderColor(taskStatusColor.finished);
        }
    }

    useEffect(() => {
        markStatusBox()
    }, [task])

    return (
        <Item elevation={1} sx={{borderLeft: `5px solid ${borderColor}`}}>
            {task.description}
        </Item>
    );
};

export default Task;