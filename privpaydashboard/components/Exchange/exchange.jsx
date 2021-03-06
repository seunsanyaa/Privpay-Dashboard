// import wallet from './wallet.module.scss'
import wallet from "../Wallet/wallet.module.scss";
import homeRight from "../HomeRight/homeright.module.scss";
import exchange from  "../Exchange/exchange.module.scss"
import Head from "next/head";
import Link from 'next/link'
import homeBalance from "../HomeRight/Balance/homebalance.module.scss";


import { DatePicker, message, Alert } from 'antd';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const bitcoin ="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_94_803)'%3E%3Cpath d='M38.5124 24.2815C35.9029 34.7532 25.2936 41.1266 14.8187 38.5133C4.3439 35.9 -2.02659 25.2959 0.58694 14.8232C3.20047 4.35051 13.8045 -2.02584 24.277 0.587881C34.7495 3.20161 41.1259 13.8063 38.5124 24.2815Z' fill='%23F7931A'/%3E%3Cpath d='M28.1695 16.764C28.5581 14.1626 26.5774 12.7641 23.8687 11.8312L24.7484 8.30743L22.6027 7.77295L21.7456 11.204C21.1822 11.0637 20.6032 10.9303 20.0277 10.7998L20.8878 7.346L18.7443 6.81152L17.8671 10.3339L13.5405 9.26221L12.9696 11.5536C12.9696 11.5536 14.5613 11.9184 14.5277 11.941C15.3965 12.158 15.554 12.7328 15.5274 13.1887L13.1202 22.842C13.0138 23.106 12.7444 23.5016 12.1372 23.3503C12.1587 23.3816 10.578 22.9593 10.578 22.9593L9.51294 25.4184L13.8333 26.5093L12.9454 30.0741L15.088 30.6085L15.9677 27.0821C16.5542 27.2408 17.1211 27.3874 17.6767 27.5254L16.8005 31.0355L18.9458 31.57L19.8337 28.012C23.492 28.7041 26.2429 28.4249 27.3993 25.1187C28.3322 22.4552 27.3535 20.9186 25.4287 19.9161C26.8304 19.5916 27.886 18.6701 28.1677 16.7654L28.1695 16.764ZM23.2666 23.6373C22.6019 26.3009 18.1183 24.8615 16.6634 24.4998L17.8415 19.7777C19.2955 20.1405 23.9582 20.8592 23.2674 23.6369L23.2666 23.6373ZM23.932 16.7263C23.3272 19.1504 19.5939 17.9188 18.3822 17.6166L19.4488 13.3325C20.6609 13.6352 24.5611 14.1986 23.9305 16.7261' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_94_803'%3E%3Crect width='39.0984' height='39.0984' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
const ethereum ="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z' fill='%23627EEA'/%3E%3Cpath d='M25.7781 6.25V20.1094L37.4921 25.3437L25.7781 6.25Z' fill='white' fill-opacity='0.602'/%3E%3Cpath d='M25.7781 6.25L14.0625 25.3437L25.7781 20.1094V6.25Z' fill='white'/%3E%3Cpath d='M25.7781 34.3249V43.7421L37.4999 27.5249L25.7781 34.3249Z' fill='white' fill-opacity='0.602'/%3E%3Cpath d='M25.7781 43.7421V34.3233L14.0625 27.5249L25.7781 43.7421Z' fill='white'/%3E%3Cpath d='M25.7781 32.1456L37.4921 25.344L25.7781 20.1128V32.1456Z' fill='white' fill-opacity='0.2'/%3E%3Cpath d='M14.0625 25.344L25.7781 32.1456V20.1128L14.0625 25.344Z' fill='white' fill-opacity='0.602'/%3E%3C/svg%3E%0A"
const usdt ="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=014"
const usd=<img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1639073637/usd_1_pafqah.png" width={18}/>
export default function ExchangeContainer() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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

                        <div className={exchange.container}>
                            <div className={exchange.exchangeContainer}>
                                <h3 className={exchange.header}>Exchange</h3>


                                <div className={homeBalance.container}>
<div className={exchange.padding}>
                                    <div className={exchange.containerElement}>



<div className={exchange.grid}>


    <div className={exchange.left}>
        <h4>From</h4>

        <form className={exchange.leftForm}>

            <div className={exchange.selectPadding}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" className={exchange.inputLabel}>Coin</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        className={exchange.select}
                    >
                        <MenuItem value={10} className={exchange.coin}> <img src={bitcoin} width={18}/> <span>Bitcoin </span></MenuItem>
                        <MenuItem value={20} className={exchange.coin}> <img src={ethereum} width={18}/> <span>Ethereum </span></MenuItem>
                        <MenuItem value={30} className={exchange.coin}> <img src={usdt} width={18}/> <span>Tether </span></MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>



{/*        <select>*/}
{/*<option>   BTC</option>*/}

{/*        </select>*/}


        <input className={exchange.input} placeholder="4999.98767777"/>

        </form>




    </div>
<div className={exchange.switch}>


    <img  src="data:image/svg+xml,%3Csvg width='2' height='101' viewBox='0 0 2 101' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1V100' stroke='%23C4C4C4' stroke-width='0.8' stroke-linecap='square'/%3E%3C/svg%3E%0A"/>
    <button className={exchange.swap} > <img width={55} src="data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M47.5534 24.1199C47.5534 11.1847 37.0553 0.686523 24.1201 0.686523C11.1849 0.686523 0.686768 11.1847 0.686768 24.1199C0.686768 37.0551 11.1849 47.5532 24.1201 47.5532C37.0553 47.5532 47.5534 37.0551 47.5534 24.1199ZM31.1501 11.2315L39.3518 19.4332L31.1501 27.6349V21.7765H21.7768V17.0899H31.1501V11.2315ZM17.0901 37.0082L8.88843 28.8065L17.0901 20.6049V26.4632H26.4634V31.1499H17.0901V37.0082Z' fill='%23D4B418'/%3E%3C/svg%3E%0A"/>
     </button>

    <img className={exchange.line} src="data:image/svg+xml,%3Csvg width='2' height='101' viewBox='0 0 2 101' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1V100' stroke='%23C4C4C4' stroke-width='0.8' stroke-linecap='square'/%3E%3C/svg%3E%0A" />


</div>

    <div className={exchange.right}>
        <h4>To</h4>

        <form className={exchange.rightForm}>

            <div className={exchange.selectPadding}>
               <button className={exchange.usdButton}>{usd} <span className={exchange.dollar}>Dollar</span></button>
            </div>



            {/*        <select>*/}
            {/*<option>   BTC</option>*/}

            {/*        </select>*/}


            <input className={exchange.input} placeholder="35000.29"/>

        </form>




    </div>

    {/*<div className={wallet.buttonDiv}>*/}
    {/*    <button className={wallet.button}> <img src="data:image/svg+xml,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M6.83756 2.1748H13.6828C16.6679 2.1748 18.4426 3.94951 18.4426 6.92642V13.7717C18.4426 16.7486 16.6679 18.5233 13.691 18.5233H6.83756C3.86064 18.5315 2.08594 16.7568 2.08594 13.7799V6.92642C2.08594 3.94951 3.86064 2.1748 6.83756 2.1748Z' fill='%23D4B418'/%3E%3Cpath d='M14.9178 11.5631C14.8524 11.4159 14.7379 11.2932 14.5825 11.2278C14.5089 11.1951 14.4271 11.1787 14.3453 11.1787H6.17514C5.83983 11.1787 5.56177 11.4568 5.56177 11.7921C5.56177 12.1274 5.83983 12.4055 6.17514 12.4055H12.8732L11.5074 13.7712C11.2703 14.0084 11.2703 14.401 11.5074 14.6381C11.6301 14.7608 11.7855 14.8181 11.9409 14.8181C12.0963 14.8181 12.2517 14.7608 12.3743 14.6381L14.7869 12.2255C14.8442 12.1683 14.8851 12.1029 14.9178 12.0293C14.9832 11.8739 14.9832 11.7103 14.9178 11.5631Z' fill='%23292D32'/%3E%3Cpath d='M5.61084 9.14258C5.67626 9.28979 5.79076 9.41247 5.94615 9.4779C6.01975 9.51061 6.09336 9.52697 6.17514 9.52697H14.3535C14.6888 9.52697 14.9669 9.2489 14.9669 8.91359C14.9669 8.57828 14.6888 8.30021 14.3535 8.30021H7.65542L9.02121 6.93443C9.25838 6.69726 9.25838 6.3047 9.02121 6.06753C8.78403 5.83036 8.39147 5.83036 8.1543 6.06753L5.74169 8.48014C5.68444 8.53739 5.64355 8.60281 5.61084 8.67642C5.54541 8.83181 5.54541 8.99537 5.61084 9.14258Z' fill='%23292D32'/%3E%3C/svg%3E%0A"/>*/}
    {/*        <span className={wallet.span}>Pay</span></button>*/}


    {/*</div>*/}


</div>


                                        <div className={exchange.paySection}>
                                            <button className={exchange.button} > <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M7.1099 5.96028L16.1299 2.95028C20.1799 1.60028 22.3799 3.81028 21.0399 7.86028L18.0299 16.8803C16.0099 22.9503 12.6899 22.9503 10.6699 16.8803L9.7799 14.2003L7.0999 13.3103C1.0399 11.3003 1.0399 7.99028 7.1099 5.96028Z' fill='%23D4B418'/%3E%3Cpath d='M12.1201 11.6296L15.9301 7.80957L12.1201 11.6296Z' fill='%23D4B418'/%3E%3Cpath d='M12.1201 12.38C11.9301 12.38 11.7401 12.31 11.5901 12.16C11.3001 11.87 11.3001 11.39 11.5901 11.1L15.3901 7.28C15.6801 6.99 16.1601 6.99 16.4501 7.28C16.7401 7.57 16.7401 8.05 16.4501 8.34L12.6501 12.16C12.5001 12.3 12.3101 12.38 12.1201 12.38Z' fill='%23303030'/%3E%3C/svg%3E%0A"/>
                                                <span className={exchange.span}>Pay</span></button>


                                        </div>








                                    </div>
</div>
                                </div>



                            </div>



                        </div>






                    </div>


                </div>
            </div>


        </div>


    )
}









