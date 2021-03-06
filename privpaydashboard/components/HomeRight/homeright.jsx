import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import homeRight from './homeright.module.scss'

import {logo,dashboardicon} from './icon'
import HomeBalance from "./Balance/homebalance";

import WatchList from "./WatchList/watchlist";
import BuyAndSellWidget from "./BuyAndSellWidget/buyandsellwidget";
import LatestActivities from "./LatestActivities/latestactivities";
import TopBar from "../TopBar/topbar";

export default function HomeRight(props) {

    const  coinData = props.data
  return (

        <div className={homeRight.page}>

            <div className={homeRight}>
                <Head>
                    <title>Privpay</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

<div className={homeRight.rightGrid}>
    <div className={homeRight.grey}>


<div className={homeRight.userProfile}>

<div className={homeRight.userProfileIcon}>
    <img className={homeRight.userProfileIconImage} src='https://avatars.githubusercontent.com/u/2838987?v=4' width={30}  />

</div>

    <div className={homeRight.userProfileName}>
        <h4 className={homeRight.fullName}>
            Ade Tiger
        </h4>
        <p className={homeRight.email}>
            Adetiger@gmail.com
        </p>


    </div>


</div>

    </div>




    <div className={homeRight.lightGrey}>



<HomeBalance/>


<WatchList data={coinData}/>


<div className={homeRight.lastGrid}>

<BuyAndSellWidget/>


<LatestActivities/>

</div>


    </div>


</div>
            </div>
        </div>
    )
}


