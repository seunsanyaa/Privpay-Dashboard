import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

import NavBar from "../components/NavBar/navbar";
import HomeRight from "../components/HomeRight/homeright";
import React, {useEffect} from "react";
export default function Home(props) {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
    });

    // const router = useRouter();
    // // Call this function whenever you want to
    // // refresh props!
    // const refreshData = () => {
    //     router.replace(router.asPath);
    // }
    const bitcoinprice = props.btc;
    const bitcoinchange = props.btcchange

    const ethereumprice = props.eth
    const ethereumchange = props.ethchange

    const tetherprice= props.usdt
    const tetherchange = props.usdtchange

    console.log(tetherprice);

    const mydata = {
        ethereumprice,bitcoinprice,tetherprice
        ,bitcoinchange, ethereumchange, tetherchange
    }
  return (
<>
<div className={styles.grid} >
    <NavBar/>
    <HomeRight data={mydata}/>

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

export async function getServerSideProps(context) {



    const btcprice = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true');
    const btcdata = await btcprice.json()
    const btc = btcdata.bitcoin.usd
    const btcchange = btcdata.bitcoin.usd_24h_change.toFixed(2)


    const ethprice= await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true')
    const ethdata= await ethprice.json()
    const eth = ethdata.ethereum.usd
    const ethchange = ethdata.ethereum.usd_24h_change.toFixed(2)


    const usdtprice= await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true')
   const usdtdata = await usdtprice.json()
    const usdt= usdtdata.tether.usd
    const usdtchange= usdtdata.tether.usd_24h_change.toFixed(2)

    // usd_24h_change

    return {
        props: {
           btc,eth,usdt
            ,btcchange,ethchange, usdtchange
        }
    }
}
