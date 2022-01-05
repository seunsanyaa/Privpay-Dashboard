
import styles from '../styles/Home.module.css'

import NavBar from "../components/NavBar/navbar";
import HomeRight from "../components/HomeRight/homeright";
import React, {useEffect, useState} from "react";


const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

export default function Home() {


    const [bitcoinPrice, setBitcoinPrice] = useState('');


    const [ethereumPrice, setEthereumPrice] = useState('');
    const [tetherPrice, setTetherPrice] = useState('');

    const [bitcoinChange, setBitcoinChange]= useState('')
    const [ethereumChange, setEthereumChange]= useState('')
    const [tetherChange, setTetherChange]= useState('')






// .usd_24h_change.toFixed(2)
    useEffect(() => {
       setInterval(() => {
            let fetchPrice = async () => {
                let result = await CoinGeckoClient.simple.price
                ({
                    ids: ["bitcoin","ethereum","tether"],
                    vs_currencies: "usd",
                    include_24hr_change : true


                })


                ;



                setBitcoinPrice(result.data.bitcoin.usd);
                setEthereumPrice(result.data.ethereum.usd)
                setTetherPrice(result.data.tether.usd)



                setBitcoinChange(result.data.bitcoin.usd_24h_change.toFixed(2))
                setEthereumChange(result.data.ethereum.usd_24h_change.toFixed(2))
                setTetherChange(result.data.tether.usd_24h_change.toFixed(2))
                // console.log(result)

            };

            fetchPrice();

        },2000)





    })



let coinData={bitcoinPrice,ethereumPrice,tetherPrice,bitcoinChange,ethereumChange,tetherChange}


console.log(coinData)

  return (
<>
<div className={styles.grid} >
    <NavBar/>
    <HomeRight data={coinData}/>

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

