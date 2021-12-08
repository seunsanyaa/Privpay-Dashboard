import homeRight from "../HomeRight/homeright.module.scss";



export default function TopBar() {
    return (

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







        </div>

    )
}









