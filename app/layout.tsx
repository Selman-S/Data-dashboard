
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './components/AuthProvider'
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Selman-s Dashboard',
  description: 'Data Dashboard with Next.js, TypeScript, and Material UI',
  keywords: ['next.js', 'typescript', 'material ui'],
  icons:{
    icon: './favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>

        <CssBaseline />
        <AuthProvider>

        {children}
        
        </AuthProvider>
  
       </body>
    </html>
  )
}
