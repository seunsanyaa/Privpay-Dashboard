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
<div className={watchList.name}>
    Name




</div>



    <div className={watchList.IconandText}>

        <img className={watchList.icon} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M16.19 2H7.82001C4.18001 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18001 21.99 7.82001 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z' fill='%23D4B418'/%3E%3Cpath d='M10.11 11.1504H7.46005C6.83005 11.1504 6.32007 11.6603 6.32007 12.2903V17.4103H10.11V11.1504Z' fill='%23292D32'/%3E%3Cpath opacity='0.4' d='M12.7601 6.6001H11.2401C10.6101 6.6001 10.1001 7.11011 10.1001 7.74011V17.4001H13.8901V7.74011C13.8901 7.11011 13.3901 6.6001 12.7601 6.6001Z' fill='%23292D32'/%3E%3Cpath d='M16.5501 12.8501H13.9001V17.4001H17.6902V13.9901C17.6802 13.3601 17.1701 12.8501 16.5501 12.8501Z' fill='%23292D32'/%3E%3C/svg%3E%0A" width={20} height={30}/>


        <span className={watchList.content}>  Charts  </span>

    </div>
    <div className={watchList.IconandText}>

        <img className={watchList.icon} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M12 21.8999C17.5228 21.8999 22 17.4228 22 11.8999C22 6.37705 17.5228 1.8999 12 1.8999C6.47715 1.8999 2 6.37705 2 11.8999C2 17.4228 6.47715 21.8999 12 21.8999Z' fill='%23D4B418'/%3E%3Cpath d='M14.26 12L12.75 11.47V8.08H13.11C13.92 8.08 14.58 8.79 14.58 9.66C14.58 10.07 14.92 10.41 15.33 10.41C15.74 10.41 16.08 10.07 16.08 9.66C16.08 7.96 14.75 6.58 13.11 6.58H12.75V6C12.75 5.59 12.41 5.25 12 5.25C11.59 5.25 11.25 5.59 11.25 6V6.58H10.6C9.12003 6.58 7.91003 7.83 7.91003 9.36C7.91003 11.15 8.95003 11.72 9.74003 12L11.25 12.53V15.91H10.89C10.08 15.91 9.42003 15.2 9.42003 14.33C9.42003 13.92 9.08003 13.58 8.67003 13.58C8.26003 13.58 7.92003 13.92 7.92003 14.33C7.92003 16.03 9.25003 17.41 10.89 17.41H11.25V18C11.25 18.41 11.59 18.75 12 18.75C12.41 18.75 12.75 18.41 12.75 18V17.42H13.4C14.88 17.42 16.09 16.17 16.09 14.64C16.08 12.84 15.04 12.27 14.26 12ZM10.24 10.59C9.73003 10.41 9.42003 10.24 9.42003 9.37C9.42003 8.66 9.95003 8.09 10.61 8.09H11.26V10.95L10.24 10.59ZM13.4 15.92H12.75V13.06L13.76 13.41C14.27 13.59 14.58 13.76 14.58 14.63C14.58 15.34 14.05 15.92 13.4 15.92Z' fill='%23292D32'/%3E%3C/svg%3E%0A" width={20} height={30}/>


        <span className={watchList.content}>  Price </span>

    </div>
    <div className={watchList.change}>
       Change




    </div>

</div>

            </div>


        </div>
    )
}
