import { useState, FC } from 'react'
import { Button, Stack, ThemeProvider } from "@mui/material";

import theme from "../../theme/PaletteModule";
import Modal from '../Modal/Modal';
import { getTasks } from '../utils/utils';
import { ITask } from '../../models/ITask';
import { IBot } from '../../models/IBot';
import Socket from '../../services/Socket';
const socket = Socket();

const Controls: FC<{ handleAddNewBot: any }> = ({ handleAddNewBot }) => {
    const [open, setOpen] = useState(false);
    
    const handleModalOpenClose = (status: boolean) => {
        setOpen(status);
    };
    
    const createBot = (name: string) => {
        const tasks: ITask[] = getTasks();
        const newBot: IBot = {
            name,
            tasks,
        }
        handleAddNewBot(newBot);
        handleModalOpenClose(true);
        socket.emit(newBot);
    }

    return (
        <div>
            <Stack
                spacing={2}
                direction="row"
                className="bot_actions"
                sx={{ padding: 3, borderBottom: "2px solid #2C2F37" }}
            >
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        onClick={() => handleModalOpenClose(true)}
                        color="primary">New Bot</Button>
                    <Button variant="outlined" color="secondary">List of Actions</Button>
                </ThemeProvider>
            </Stack>
            <Modal open={open} handleClose={handleModalOpenClose} handleCreateBot={createBot}/>
        </div>
    );
}

export default Controls;