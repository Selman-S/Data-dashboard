import Image from 'next/image'
import styles from './page.module.css'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Dashboard from './dashboard'



export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SideMenu />
      <Dashboard />
    </main>
  )
}
