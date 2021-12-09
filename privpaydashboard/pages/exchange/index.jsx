import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import ExchangeContainer from "../../components/Exchange/exchange";


export default function Exchange() {
    return (
        <>
            <div className={styles.grid} >


                <ExchangeContainer/>


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
