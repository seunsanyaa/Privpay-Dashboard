import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import latestactivities from './latestactivities.module.scss'

export default function LatestActivities() {
    return (



        <div className={latestactivities.container}>




<h3 className={latestactivities.header}>Latest Activities</h3>


<div className={latestactivities}>



    <div className={latestactivities.notransactionContainer}>
    <div className={latestactivities.notransaction}>


    <img src="data:image/svg+xml,%3Csvg width='85' height='85' viewBox='0 0 85 85' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='85' height='85' fill='white'/%3E%3Cpath d='M77.9167 30.1034C77.9167 42.8179 67.6104 53.1242 54.8958 53.1242C54.2938 53.1242 53.6563 53.0888 53.0542 53.0533C52.1688 41.8263 43.1729 32.8305 31.9458 31.945C31.9104 31.343 31.875 30.7054 31.875 30.1034C31.875 17.3888 42.1813 7.08252 54.8958 7.08252C67.6104 7.08252 77.9167 17.3888 77.9167 30.1034Z' fill='%23D4B418'/%3E%3Cpath opacity='0.4' d='M53.1252 54.8958C53.1252 67.6104 42.8189 77.9167 30.1043 77.9167C17.3897 77.9167 7.0835 67.6104 7.0835 54.8958C7.0835 42.1813 17.3897 31.875 30.1043 31.875C30.7064 31.875 31.3439 31.9104 31.946 31.9458C43.173 32.8313 52.169 41.8271 53.0544 53.0542C53.0898 53.6562 53.1252 54.2938 53.1252 54.8958Z' fill='%23D4B418'/%3E%3Cpath d='M26.9875 51.7795L30.1042 46.042L33.2209 51.7795L38.9583 54.8962L33.2209 58.0128L30.1042 63.7503L26.9875 58.0128L21.25 54.8962L26.9875 51.7795Z' fill='%23303030'/%3E%3C/svg%3E%0A"/>

    </div>

    <div className={latestactivities.notransaction}>
    <p className={latestactivities.notransactionParagraph}> You have not made any
        transaction yet.</p>


    </div>
    </div>

</div>



        </div>
    )
}
