'use client'
import styles from './page.module.css'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Dashboard from './dashboard'
import { useSession } from 'next-auth/react'
import Login from './components/Login'



export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
      <Header />
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
  )
}
