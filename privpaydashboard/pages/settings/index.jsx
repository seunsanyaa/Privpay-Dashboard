import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
// import ExchangeContainer from "../../components/Exchange/exchange";
import PersonalInfo from "../../components/Settings/personalInfo";
import SettingsComponent from "../../components/Settings/settings";

export default function Settings() {
    return (
        <>
            <div className={styles.grid} >


                <SettingsComponent/>


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
