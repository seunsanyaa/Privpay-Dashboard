import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
// import ExchangeContainer from "../../components/Exchange/exchange";
import ActivitiesContainer from "../../components/Activities/activities";


export default function Activities() {
    return (
        <>
            <div className={styles.grid} >


                <ActivitiesContainer/>


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
