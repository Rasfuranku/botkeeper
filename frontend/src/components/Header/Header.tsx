import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
        <header>
            <Box sx={{backgroundColor: "#1B1E28", borderBottom: "2px solid #2C2F37"}}>
                <Typography variant="h1" gutterBottom={false} align="center">
                    BotKeeper
                </Typography>
                <Typography variant="h4" gutterBottom align="center">
                    The Future of Bookkeeping
                </Typography>
            </Box>
        </header>
    );
};

export default Header;