// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#201617ff', // Pink/Red Circle
      light: '#342e2eff',
      dark: '#e63743',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff8928', // Orange Circle
      light: '#ffa153',
      dark: '#e67a24',
      contrastText: '#ffffff',
    },
    background: {
      default: 'linear-gradient(135deg, #201617ff 0%, #ff8928 50%, #201617ff 100%)',
      paper: '#ffffff',
    },
    yellow: {
      main: '#201617ff',
      light: '#ffe552',
      dark: '#e6c81e',
      contrastText: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
  },
});

export default theme;