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
import PersonalInfo from "./personalInfo";
import Security from "./security";
import {useState} from "react";

export default function SettingsComponent(props) {

    const [personalInfo, security] = useState()

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

                        <div className={settings.container}>

                            <h3 className={settings.header}>
                                Settings
                            </h3>



                            <div className={homeBalance.container}>
                                <div className={settings.grid}>


                                    <div className={settings.breadcrum}>
                                        <Link href="/settings">
                                            <button className={settings.personalInfo} onClick={props.PersonalInfo} >
                                                Personal Information
                                            </button>
                                        </Link>
                                        <Link  href="" >
                                            <button className={settings.security} onClick={props.Security}>
                                                Security
                                            </button>
                                        </Link>
                                    </div>

<PersonalInfo/>
                                    {/*<div className={settings.secondSection}>*/}


                                    {/*    <div className={settings.photoAndName}>*/}
                                    {/*        <img className={settings.profileImage} src="https://avatars.githubusercontent.com/u/2838987?v=4" width={200}/>*/}
                                    {/*        <h3 className={settings.profileFullName}>Micheal Jake</h3>*/}
                                    {/*    </div>*/}


                                    {/*    <div className={settings.profileForm}>*/}
                                    {/*        <form className={settings.profileFormElements}>*/}

                                    {/*            <label htmlFor="fname">First Name</label>*/}
                                    {/*            <input type="text" id="fname" name="fname" className={settings.firstName} value="Ade" disabled/>*/}

                                    {/*            <div className={settings.formDiv}>*/}
                                    {/*                <label htmlFor="lname">Last Name</label>*/}
                                    {/*                <input type="text" id="lname" name="lname" value="Tiger" className={settings.lastName} disabled/>*/}
                                    {/*            </div>*/}

                                    {/*            <div className={settings.formDiv}>*/}
                                    {/*                <label htmlFor="lname">Email Address</label>*/}
                                    {/*                <input type="text" id="lname" name="lname" value="Adetiger@gmail.com" className={settings.emailAddress} disabled/>*/}

                                    {/*            </div>*/}




                                    {/*        </form>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>

                            </div>
                        </div>






                    </div>


                </div>
            </div>
        </div>
    )
}









