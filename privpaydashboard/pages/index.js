import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import NavBar from "../components/NavBar/navbar";
import HomeRight from "../components/HomeRight/homeright";
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
export default function Home() {
  return (
<>
<div className={styles.grid} >
    <NavBar/>
    <HomeRight/>

    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
</div>
  </>
  )
}
