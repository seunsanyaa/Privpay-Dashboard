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

export default function PersonalInfo() {
    return (
        <div className={settings.secondSection}>


            <div className={settings.photoAndName}>
                <img className={settings.profileImage} src="https://avatars.githubusercontent.com/u/2838987?v=4" width={200}/>
                <h3 className={settings.profileFullName}>Micheal Jake</h3>
            </div>


            <div className={settings.profileForm}>
                <form className={settings.profileFormElements}>

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" className={settings.firstName} value="Ade" disabled/>

                    <div className={settings.formDiv}>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" value="Tiger" className={settings.lastName} disabled/>
                    </div>

                    <div className={settings.formDiv}>
                        <label htmlFor="lname">Email Address</label>
                        <input type="text" id="lname" name="lname" value="Adetiger@gmail.com" className={settings.emailAddress} disabled/>

                    </div>




                </form>
            </div>
        </div>

    )
}









