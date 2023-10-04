import { Theme, ThemeOptions, createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';


   const darkThemeOptions :ThemeOptions= createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f48fb1',
        },
        background: {
          default: '#000',
        },
      },
    });
  
  

  
  const lightThemeOptions: ThemeOptions =createTheme( {
    palette: {
  
      // Set the mode to light
      mode: 'light',
  
      // Set primary and secondary colors
      primary: {
        main: '#ffff00',
      },
      secondary: {
        main: '#ff8400',
      },
      background: {
        default: '#9e9e9e',
        paper: '#9e9e9e',
      },
  
    },
  });
  



  
  export  const lightTheme: Theme = createTheme(lightThemeOptions);
  export const darkTheme: Theme = createTheme(darkThemeOptions);
  
  // rest of the code