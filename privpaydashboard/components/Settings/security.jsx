import wallet from "../Wallet/wallet.module.scss";
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

export default function Security({show,hide}) {
    return (
<>
        <div className={settings.secondSection} >



<div className={settings.changePasswordText}>

<h3>Change Password</h3>
<h3 className={settings.updatePasswordParagraph}>Update password to a new one</h3>
</div>


            <div className={settings.buttonDiv}>
                <button className={settings.button} >
                    Change password</button>


            </div>


        </div>


    <div className={settings.secondSection} >



        <div className={settings.changePasswordText}>

            <h3>Set-up two factor Authentication</h3>
            <h3 className={settings.updatePasswordParagraph}>Add an extra security to your account</h3>
        </div>


        <div className={settings.buttonDiv}>
            <button className={settings.button} >
                Set-up 2FA</button>


        </div>


    </div>
        </>




    )
}









