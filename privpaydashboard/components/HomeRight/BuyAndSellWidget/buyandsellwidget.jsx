import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import buyAndSell from './buyandsellwidget.module.scss'

export default function BuyAndSellWidget() {
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
<select  className={buyAndSell.coinName} value="Bitcoin">
    <option className={buyAndSell.coinNameOption} value="Bitcoin">Bitcoin</option>
</select>

                    <input  className={buyAndSell.coinAmount} placeholder="0.456789767"  />

                    <input  className={buyAndSell.coinAmount} placeholder="5670.50" />


                    <input type="submit" value="Buy" className={buyAndSell.buySubmit} />
                </form>

            </div>





        </div>
    )
}
