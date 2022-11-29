import { FC, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import Bot from "./Bot";
import { IBot } from '../../models/IBot';

const BotList: FC<{ bots: IBot[] }> = ({ bots }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={2}>
                {bots && bots.map(bot => (
                    <Grid item xs={4} key={uuidv4()}>
                        <Bot bot={bot}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BotList;