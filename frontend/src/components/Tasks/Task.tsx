import { FC } from 'react';
import { Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: 60,
    lineHeight: '60px',
    paddingLeft: 10,
    paddingRight: 10,
    width: "40%",
    backgroundColor: "#242732"
  }));

const Task: FC<{ taskDescription: string}> = ({ taskDescription }) => {
    return (
        <Item elevation={1}>
            {taskDescription}
        </Item>
    );
};

export default Task;