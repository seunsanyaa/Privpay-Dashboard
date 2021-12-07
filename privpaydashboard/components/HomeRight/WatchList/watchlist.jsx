import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import navstyles from "../../NavBar/navbar.module.scss";
import homeRight from "../homeright.module.scss";
import watchList from "./watchlist.module.scss"
import homeBalance from "../Balance/homebalance.module.scss";
export default function WatchList() {
    return (



        <div className={watchList.container}>
            <h3 className={watchList.watchlistHeader}>WatchList</h3>
            <div className={watchList.containerElement}>

<div className={watchList.firstRow}>


</div>

            </div>


        </div>
    )
}
