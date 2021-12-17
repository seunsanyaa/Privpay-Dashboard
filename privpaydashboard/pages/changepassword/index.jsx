import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import ChangePassword from "../../components/ChangePassword/changepassword";



export default function ChangePasswordPage() {
    return (
        <>
            <div className={styles.grid} >


                <ChangePassword/>


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
