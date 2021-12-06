import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {logo,dashboardicon} from './icon'
import NavBar from "../components/NavBar/navbar";
import HomeRight from "../components/HomeRight/homeright";
export default function Home() {
  return (
<>
<div className={styles.grid} >
    <NavBar/>
    <HomeRight/>
</div>
  </>
  )
}
