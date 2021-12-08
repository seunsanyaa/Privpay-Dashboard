import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import TopBar from "../../components/TopBar/topbar";
import WalletContainer from "../../components/Wallet/wallet";

export default function Wallet() {
    return (
        <>
            <div className={styles.grid} >


<WalletContainer/>


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
