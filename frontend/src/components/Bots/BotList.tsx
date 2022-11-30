import { FC, memo } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import Bot from "./Bot";
import IBot from '../../models/IBot';

const BotList: FC<{ bots: IBot[] }> = ({ bots }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            {!bots.length && 
                (<Typography variant="h6" gutterBottom={false} align="center">There are no Bots.</Typography>)}
            <Grid container spacing={2}>
                {bots && bots.map(bot => (
                    <Bot key={bot.id} bot={bot}/>
                ))}
            </Grid>
        </Box>
    )
}

export default memo(BotList);