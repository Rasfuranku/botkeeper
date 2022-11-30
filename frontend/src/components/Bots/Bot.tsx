import { FC } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';

import IBot from '../../models/IBot';
import theme from '../../theme/PaletteModule';
import TasksList from '../Tasks/TasksList';

const Bot: FC<{ bot: IBot }> = ({ bot }) => {
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={6} md={6} key={uuidv4()}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {bot.name}
                        </Typography>
                        <TasksList tasks={bot.tasks} />
                    </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

export default Bot;