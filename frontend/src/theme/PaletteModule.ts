import { createTheme } from '@mui/material/styles';

const primaryColor = '#242732';
const secondaryColor = '#1B1E28';
const contrastText = '#FFF';
const primaryText = '#62636A';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryColor,
          color: contrastText,
        }
      }
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText,
      
    },
    secondary: {
        main: secondaryColor,
        contrastText,    
    },
    text: {
      primary: primaryText,
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default theme;