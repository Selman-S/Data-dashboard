'use client'
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
import { Button, Stack } from '@mui/material';

const login = () => {

  const {data:session} = useSession();
  const userPofileimg = session?.user?.image;
  const userName = session?.user?.name;

  if (session && session.user) {
    return (
      <div>

        <p>Welcome {session.user.name}</p>
        <Stack direction="row" spacing={2}>
   
        </Stack>
        <Button variant='contained' color='error' onClick={()=>signOut()}>Sign Out</Button>
      </div>
    )
    
  }
  return (<>
  <h2>Please Login</h2>
    <Button variant='contained' color='success' onClick={()=>signIn()}>Sign in</Button>
  </>
  )
}

export default login