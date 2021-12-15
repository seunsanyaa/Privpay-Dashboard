import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import buyAndSell from './buyandsellwidget.module.scss'

const bitcoin ="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_94_803)'%3E%3Cpath d='M38.5124 24.2815C35.9029 34.7532 25.2936 41.1266 14.8187 38.5133C4.3439 35.9 -2.02659 25.2959 0.58694 14.8232C3.20047 4.35051 13.8045 -2.02584 24.277 0.587881C34.7495 3.20161 41.1259 13.8063 38.5124 24.2815Z' fill='%23F7931A'/%3E%3Cpath d='M28.1695 16.764C28.5581 14.1626 26.5774 12.7641 23.8687 11.8312L24.7484 8.30743L22.6027 7.77295L21.7456 11.204C21.1822 11.0637 20.6032 10.9303 20.0277 10.7998L20.8878 7.346L18.7443 6.81152L17.8671 10.3339L13.5405 9.26221L12.9696 11.5536C12.9696 11.5536 14.5613 11.9184 14.5277 11.941C15.3965 12.158 15.554 12.7328 15.5274 13.1887L13.1202 22.842C13.0138 23.106 12.7444 23.5016 12.1372 23.3503C12.1587 23.3816 10.578 22.9593 10.578 22.9593L9.51294 25.4184L13.8333 26.5093L12.9454 30.0741L15.088 30.6085L15.9677 27.0821C16.5542 27.2408 17.1211 27.3874 17.6767 27.5254L16.8005 31.0355L18.9458 31.57L19.8337 28.012C23.492 28.7041 26.2429 28.4249 27.3993 25.1187C28.3322 22.4552 27.3535 20.9186 25.4287 19.9161C26.8304 19.5916 27.886 18.6701 28.1677 16.7654L28.1695 16.764ZM23.2666 23.6373C22.6019 26.3009 18.1183 24.8615 16.6634 24.4998L17.8415 19.7777C19.2955 20.1405 23.9582 20.8592 23.2674 23.6369L23.2666 23.6373ZM23.932 16.7263C23.3272 19.1504 19.5939 17.9188 18.3822 17.6166L19.4488 13.3325C20.6609 13.6352 24.5611 14.1986 23.9305 16.7261' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_94_803'%3E%3Crect width='39.0984' height='39.0984' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
const ethereum ="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z' fill='%23627EEA'/%3E%3Cpath d='M25.7781 6.25V20.1094L37.4921 25.3437L25.7781 6.25Z' fill='white' fill-opacity='0.602'/%3E%3Cpath d='M25.7781 6.25L14.0625 25.3437L25.7781 20.1094V6.25Z' fill='white'/%3E%3Cpath d='M25.7781 34.3249V43.7421L37.4999 27.5249L25.7781 34.3249Z' fill='white' fill-opacity='0.602'/%3E%3Cpath d='M25.7781 43.7421V34.3233L14.0625 27.5249L25.7781 43.7421Z' fill='white'/%3E%3Cpath d='M25.7781 32.1456L37.4921 25.344L25.7781 20.1128V32.1456Z' fill='white' fill-opacity='0.2'/%3E%3Cpath d='M14.0625 25.344L25.7781 32.1456V20.1128L14.0625 25.344Z' fill='white' fill-opacity='0.602'/%3E%3C/svg%3E%0A"
const usdt ="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=014"

export default function BuyAndSellWidget() {


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (



        <div className={buyAndSell.container}>
            <div className={buyAndSell.buyAndSellHeaders}>

                <div className={buyAndSell.buyAndSellHeaderLeft} >
                    <h3 className={buyAndSell.buyAndSellHeader}> Buy</h3>

                </div>

                <div className={buyAndSell.buyAndSellHeaderRight} >
                    <h3 className={buyAndSell.buyAndSellHeader}> Sell</h3>

                </div>

            </div>


            <div className={buyAndSell.formContainer}>
                <form className={buyAndSell.buyForm}>
{/*<select  className={buyAndSell.coinName} value="Bitcoin">*/}
{/*    <option className={buyAndSell.coinNameOption} value="Bitcoin">Bitcoin</option>*/}
{/*</select>*/}
                    <Box sx={{ minWidth: 120 }} className={buyAndSell.coinName}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Coin</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}

                            >
                                <MenuItem value={10} > <img src={bitcoin} width={18}/> <span>Bitcoin </span></MenuItem>
                                <MenuItem value={20} > <img src={ethereum} width={18}/> <span>Ethereum </span></MenuItem>
                                <MenuItem value={30} > <img src={usdt} width={18}/> <span>Tether </span></MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <input  className={buyAndSell.coinAmount} placeholder="0.456789767"  />

                    <input  className={buyAndSell.coinAmount} placeholder="5670.50" />


                    <input type="submit" value="Buy" className={buyAndSell.buySubmit} />
                </form>

            </div>





        </div>
    )
}
