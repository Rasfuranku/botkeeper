import { FC, useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions
} from '@mui/material/';

const Modal: FC<{open: boolean, handleClose: any, handleCreateBot: any}> = ({ open, handleClose, handleCreateBot }) => {
    const [botName, setBotName] = useState("");

    const setName = (e: any) => setBotName(e.target.value);
    
    const onCancel = () => {
        setBotName("");
        handleClose(false);
    }

    const onCreate = () => {
        handleCreateBot(botName);
        handleClose(false);
        setBotName("");
    }


    return (
        <Dialog open={open} onClose={() => handleClose(false)}>
            <DialogTitle>Create a new Bot</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please write a name for the bot.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Bot name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={botName}
                    onChange={setName}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={onCancel} variant="outlined">Cancel</Button>
            <Button onClick={onCreate} variant="contained">Create</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;