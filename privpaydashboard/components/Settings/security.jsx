import wallet from "../Wallet/wallet";
import homeRight from "../HomeRight/homeright.module.scss";
import HomeBalance from "../HomeRight/Balance/homebalance";
import WatchList from "../HomeRight/WatchList/watchlist";
import BuyAndSellWidget from "../HomeRight/BuyAndSellWidget/buyandsellwidget";
import LatestActivities from "../HomeRight/LatestActivities/latestactivities";
import Head from "next/head";
import Link from 'next/link'
import homeBalance from "../HomeRight/Balance/homebalance.module.scss";
import latestactivities from "../HomeRight/LatestActivities/latestactivities.module.scss";

import settings from "./settings.module.scss"

export default function Security() {
    return (

        <div className={settings.secondSection}>



<div className={settings.changePasswordText}>

<h2>Change Password</h2>
<h3>Update password to a new one</h3>
</div>

            <div>

            </div>

        </div>
    )
}









