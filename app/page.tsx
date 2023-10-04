'use client'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Dashboard from './dashboard'
import { useSession } from 'next-auth/react'
import Login from './components/Login'
import scss from './scss/Home.module.scss'
import React, { useState } from 'react'
import { Box, IconButton, ThemeProvider, createTheme, useMediaQuery, useTheme } from '@mui/material'
import { lightTheme,darkTheme } from './themes/useTheme'

interface Theme {
  palette: {
    mode: string;
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };

}
const Home: React.FC =() =>{
  const { data: session } = useSession();
 



  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );


  const theme: Theme = mode === 'light' ? lightTheme : darkTheme;


    
  return (
    <ThemeProvider theme={theme}>
   
      <Header mode={theme.palette.mode} setMode={colorMode.toggleColorMode} />
    <main className={scss.main} >
      {
        session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )
      }
      <Login/>   
       </main>
       </ThemeProvider>
  )
}
export default  Home;