import { Box, Typography, styled } from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor:  theme.palette.text.primary,
    borderBottom: "2px solid #2C2F37"
}));

const Header = () => {
    return (
        <header>
            <Item>
                <Typography variant="h1" gutterBottom={false} align="center">
                    BotKeeper
                </Typography>
                <Typography variant="h4" gutterBottom align="center">
                    The Future of Bookkeeping
                </Typography>
            </Item>
        </header>
    );
};

export default Header;