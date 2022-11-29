import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { IBot } from '../../models/IBot';
import theme from '../../theme/PaletteModule';

import TasksList from '../Tasks/TasksList';

const Bot: FC<{ bot: IBot }> = ({ bot }) => {
    return (
        <ThemeProvider theme={theme}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {bot.name}
                    </Typography>
                    <TasksList tasks={bot.tasks} />
                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

export default Bot;