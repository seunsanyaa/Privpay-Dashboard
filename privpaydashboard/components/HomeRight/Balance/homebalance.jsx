import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import homeBalance from './homebalance.module.scss'
import navstyles from "../../NavBar/navbar.module.scss";
import homeRight from "../homeright.module.scss";


export default function HomeBalance() {
    return (



            <div className={homeBalance.container}>

<div className={homeBalance.containerElement}>

    <div className={homeBalance.IconandText}>
        <div className={homeBalance.welcomeIcon}>
        <img className={homeBalance.welcomeIconImage} src="data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M29.8634 12.1552V21.8452C29.8634 23.4318 29.0134 24.9052 27.6392 25.7127L19.2242 30.5719C17.8501 31.3652 16.1501 31.3652 14.7617 30.5719L6.34672 25.7127C4.97256 24.9194 4.12256 23.446 4.12256 21.8452V12.1552C4.12256 10.5685 4.97256 9.09515 6.34672 8.28765L14.7617 3.4285C16.1359 2.63516 17.8359 2.63516 19.2242 3.4285L27.6392 8.28765C29.0134 9.09515 29.8634 10.5544 29.8634 12.1552Z' fill='%23D4B418'/%3E%3Cpath d='M17.0001 17.0001C18.8231 17.0001 20.3009 15.5222 20.3009 13.6992C20.3009 11.8762 18.8231 10.3984 17.0001 10.3984C15.1771 10.3984 13.6992 11.8762 13.6992 13.6992C13.6992 15.5222 15.1771 17.0001 17.0001 17.0001Z' fill='%23D4B418'/%3E%3Cpath d='M20.7967 23.6017C21.9442 23.6017 22.6101 22.3267 21.9726 21.3776C21.0092 19.9467 19.1392 18.9834 17.0001 18.9834C14.8609 18.9834 12.9909 19.9467 12.0276 21.3776C11.3901 22.3267 12.0559 23.6017 13.2034 23.6017H20.7967Z' fill='%23D4B418'/%3E%3C/svg%3E%0A" width={30} height={30}/>
        </div>
        <div className={homeBalance.welcomeDetails}>
            <h4 className={homeBalance.welcomeBack}>
                Welcome Back, <span className={homeBalance.name}>Samson    </span>
            </h4>
            <p className={homeBalance.date}>
                Today, 24th March 2021
            </p>


        </div>

    </div>


<img className={homeBalance.divider} src="data:image/svg+xml,%3Csvg width='2' height='142' viewBox='0 0 2 142' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1V141' stroke='%23C4C4C4' stroke-width='0.8' stroke-linecap='square'/%3E%3C/svg%3E%0A"/>




    <div className={homeBalance.IconandText}>
        <div className={homeBalance.welcomeIcon}>
            <img className={homeBalance.welcomeIconImage} src="data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M17 31.0247C24.824 31.0247 31.1667 24.6821 31.1667 16.8581C31.1667 9.03404 24.824 2.69141 17 2.69141C9.17596 2.69141 2.83333 9.03404 2.83333 16.8581C2.83333 24.6821 9.17596 31.0247 17 31.0247Z' fill='%23D4B418'/%3E%3Cpath d='M20.2017 17L18.0626 16.2492V11.4467H18.5726C19.7201 11.4467 20.6551 12.4525 20.6551 13.685C20.6551 14.2658 21.1367 14.7475 21.7176 14.7475C22.2984 14.7475 22.7801 14.2658 22.7801 13.685C22.7801 11.2767 20.8959 9.32167 18.5726 9.32167H18.0626V8.5C18.0626 7.91917 17.5809 7.4375 17.0001 7.4375C16.4192 7.4375 15.9376 7.91917 15.9376 8.5V9.32167H15.0167C12.9201 9.32167 11.2059 11.0925 11.2059 13.26C11.2059 15.7958 12.6792 16.6033 13.7984 17L15.9376 17.7508V22.5392H15.4276C14.2801 22.5392 13.3451 21.5333 13.3451 20.3008C13.3451 19.72 12.8634 19.2383 12.2826 19.2383C11.7017 19.2383 11.2201 19.72 11.2201 20.3008C11.2201 22.7092 13.1042 24.6642 15.4276 24.6642H15.9376V25.5C15.9376 26.0808 16.4192 26.5625 17.0001 26.5625C17.5809 26.5625 18.0626 26.0808 18.0626 25.5V24.6783H18.9834C21.0801 24.6783 22.7942 22.9075 22.7942 20.74C22.7801 18.19 21.3067 17.3825 20.2017 17ZM14.5067 15.0025C13.7842 14.7475 13.3451 14.5067 13.3451 13.2742C13.3451 12.2683 14.0959 11.4608 15.0309 11.4608H15.9517V15.5125L14.5067 15.0025ZM18.9834 22.5533H18.0626V18.5017L19.4934 18.9975C20.2159 19.2525 20.6551 19.4933 20.6551 20.7258C20.6551 21.7317 19.9042 22.5533 18.9834 22.5533Z' fill='%23D4B418'/%3E%3C/svg%3E%0A" width={30} height={30}/>
        </div>
        <div className={homeBalance.welcomeDetails}>
            <h4 className={homeBalance.welcomeBack}>
           <span className={homeBalance.usdBalance}>  $300.00 </span>
            </h4>
            <p className={homeBalance.myBalance}>
                My Balance
                <div className={homeBalance.eyeDiv}>
                <img className={homeBalance.eyeIcon}src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M12.9833 9.99994C12.9833 11.6499 11.65 12.9833 10 12.9833C8.35001 12.9833 7.01668 11.6499 7.01668 9.99994C7.01668 8.34993 8.35001 7.0166 10 7.0166C11.65 7.0166 12.9833 8.34993 12.9833 9.99994Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.99995 16.8918C12.9416 16.8918 15.6833 15.1584 17.5916 12.1584C18.3416 10.9834 18.3416 9.00843 17.5916 7.83343C15.6833 4.83343 12.9416 3.1001 9.99995 3.1001C7.05828 3.1001 4.31661 4.83343 2.40828 7.83343C1.65828 9.00843 1.65828 10.9834 2.40828 12.1584C4.31661 15.1584 7.05828 16.8918 9.99995 16.8918Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"  width={30} height={12}/>
                </div>
            </p>


        </div>

    </div>

    <img className={homeBalance.divider} src="data:image/svg+xml,%3Csvg width='2' height='142' viewBox='0 0 2 142' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1V141' stroke='%23C4C4C4' stroke-width='0.8' stroke-linecap='square'/%3E%3C/svg%3E%0A"/>


    <div className={homeBalance.IconandText}>
        <div className={homeBalance.welcomeIcon}>
            <img className={homeBalance.welcomeIconImage} src="data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M34 0H0V34H34V0Z' fill='white'/%3E%3Cpath opacity='0.4' d='M17 31.1668C24.8241 31.1668 31.1667 24.8242 31.1667 17.0002C31.1667 9.17613 24.8241 2.8335 17 2.8335C9.17601 2.8335 2.83337 9.17613 2.83337 17.0002C2.83337 24.8242 9.17601 31.1668 17 31.1668Z' fill='%23D4B418'/%3E%3Cpath d='M23.3608 16.4473C23.8991 15.7532 24.2391 14.8748 24.2391 13.9257C24.2391 11.7298 22.3124 9.789 20.1024 9.789H18.8558V7.7915C18.8558 7.21067 18.3741 6.729 17.7933 6.729C17.2124 6.729 16.7308 7.21067 16.7308 7.7915V9.80317H15.3424H15.0166V7.7915C15.0166 7.21067 14.5349 6.729 13.9541 6.729C13.3733 6.729 12.9199 7.21067 12.9199 7.7915V9.80317H12.4383H9.98743C9.40659 9.80317 8.92493 10.2848 8.92493 10.8657C8.92493 11.4465 9.40659 11.9282 9.98743 11.9282H11.3758V16.9998V22.0715H9.98743C9.40659 22.0715 8.92493 22.5532 8.92493 23.134C8.92493 23.7148 9.40659 24.1965 9.98743 24.1965H12.4383H12.9058V26.2082C12.9058 26.789 13.3874 27.2707 13.9683 27.2707C14.5491 27.2707 15.0308 26.789 15.0308 26.2082V24.1965H15.3566H16.7449V26.2082C16.7449 26.789 17.2266 27.2707 17.8074 27.2707C18.3883 27.2707 18.8699 26.789 18.8699 26.2082V24.1965H21.2074C23.7291 24.1965 25.7833 22.3407 25.7833 20.0598C25.7833 18.5015 24.7916 17.1415 23.3608 16.4473ZM15.3566 11.9282H20.1166C21.2499 11.9282 22.1283 13.0048 22.1283 13.9398C22.1283 15.0448 21.2216 15.9515 20.1166 15.9515H13.5008V11.9282H15.3566ZM21.2074 22.0715H15.3566H13.5008V18.0623H20.1166H21.2074C22.5533 18.0623 23.6583 18.969 23.6583 20.074C23.6583 21.179 22.5533 22.0715 21.2074 22.0715Z' fill='%23D4B418'/%3E%3C/svg%3E%0A" width={30} height={30}/>
        </div>
        <div className={homeBalance.welcomeDetails}>
            <h4 className={homeBalance.welcomeBack}>
                <span className={homeBalance.cryptoBalance}>   0.00 </span>

                <span className={homeBalance.comingSoon}>coming soon</span>
            </h4>
            <p className={homeBalance.myBalance}>
                My Balance ( Crypto )
                <div className={homeBalance.eyeDiv}>
                    <img className={homeBalance.eyeIcon}src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.4' d='M12.9833 9.99994C12.9833 11.6499 11.65 12.9833 10 12.9833C8.35001 12.9833 7.01668 11.6499 7.01668 9.99994C7.01668 8.34993 8.35001 7.0166 10 7.0166C11.65 7.0166 12.9833 8.34993 12.9833 9.99994Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.99995 16.8918C12.9416 16.8918 15.6833 15.1584 17.5916 12.1584C18.3416 10.9834 18.3416 9.00843 17.5916 7.83343C15.6833 4.83343 12.9416 3.1001 9.99995 3.1001C7.05828 3.1001 4.31661 4.83343 2.40828 7.83343C1.65828 9.00843 1.65828 10.9834 2.40828 12.1584C4.31661 15.1584 7.05828 16.8918 9.99995 16.8918Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"  width={30} height={12}/>
                </div>
            </p>


        </div>

    </div>





</div>

        </div>
    )
}
