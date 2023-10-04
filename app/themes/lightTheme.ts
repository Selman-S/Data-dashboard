'use client'
import { ThemeOptions, createTheme } from '@mui/material';

const lightTheme: ThemeOptions =createTheme( {
  palette: {

    // Set the mode to light
    mode: 'light',

    // Set primary and secondary colors
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },

  },
});

export default lightTheme;
