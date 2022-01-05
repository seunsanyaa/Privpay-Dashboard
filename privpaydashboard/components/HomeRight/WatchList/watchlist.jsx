
import React, {useEffect, useState} from "react";

import watchList from "./watchlist.module.scss"

import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
let color;
export default function WatchList(props) {
    // const price = props.data

    const bitcoinPrice= props.data.bitcoinPrice
    const ethereumPrice = props.data.ethereumPrice
    const tetherPrice = props.data.tetherPrice


    const bitcoinchange = props.data.bitcoinChange

    const ethereumchange = props.data.ethereumChange


    const tetherchange= props.data.tetherChange




  const  Btcpon=()=> {

        if (Math.sign(bitcoinchange)=== -1 || Math.sign(bitcoinchange)===0) {
            return     <h4 className={watchList.coinChange} style={{color: "red"}}>
                {bitcoinchange} %
            </h4>;
        }

        else {
            return     <h4 className={watchList.coinChange} style={{color: "green"}}>
                + {bitcoinchange} %
            </h4>;
        }
    }



    const  Ethpon=()=> {

        if (Math.sign(ethereumchange)=== -1 || Math.sign(ethereumchange)===0) {
            return     <h4 className={watchList.coinChange} style={{color: "red"}}>
                {ethereumchange} %
            </h4>;
        }

        else {
            return     <h4 className={watchList.coinChange} style={{color: "green"}}>
               + {ethereumchange} %
            </h4>;
        }
    }





    const  Usdtpon=()=> {

        if (Math.sign(tetherchange)=== -1 || Math.sign(tetherchange)=== 0) {
            return     <h4 className={watchList.coinChange} style={{color: "red"}}>
                {tetherchange} %
            </h4>;
        }

        else {
            return     <h4 className={watchList.coinChange} style={{color: "green"}}>
                +{tetherchange} %
            </h4>;
        }
    }

//

    const [btcseries, setBtcSeries] =
        useState(
            [
                {
        name: 'TEAM A',
        type: 'column',
        data: []
    }, {
        name: 'TEAM B',
        type: 'area',
        data: []
    }, {
            name: 'chart',
            type: 'line',
            data: [25, 0, 36, 11, 40, 35, 50, 10, 40, 20, 30],

        color:'#3c9f52'

    }]
        );
    useEffect(() => {
        setInterval(() => {
            let bitcoinChart = () => {

                let btccolor
                if (Math.sign(bitcoinchange) === -1 || Math.sign(bitcoinchange) === 0) {
                    btccolor =  {chartColor: '#FF0000'}

                } else {
                    btccolor = {chartColor: '#3c9f52'}


                }
                setBtcSeries(

                    [
                        {
                            name: 'TEAM A',
                            type: 'column',
                            data: []
                        }, {
                        name: 'TEAM B',
                        type: 'area',
                        data: []
                    }, {
                        name: 'chart',
                        type: 'line',
                        data: [25, 0, 36, 11, 40, 35, 50, 10, 40, 20, 30],

                        color:btccolor.chartColor

                    }]
                )



            }

            bitcoinChart()
        },5000)
    })

    const [ethseries, setEthSeries] = useState( [{
        name: 'TEAM A',
        type: 'column',
        data: []
    }, {
        name: 'TEAM B',
        type: 'area',
        data: []
    }, {
            name: 'chart',
            type: 'line',
            data: [5, 10, 36, 6, 30, 35, 40, 10, 60, 20, 10],

           color: '#3c9f52'

    }]

    );


    useEffect(() => {
        setInterval(() => {
            let ethereumChart = () => {

                let ethcolor
                if (Math.sign(ethereumchange) === -1 ||  Math.sign(ethereumchange) === 0) {
                    ethcolor =  {chartColor: '#FF0000'}

                } else {
                    ethcolor = {chartColor: '#3c9f52'}


                }
                setEthSeries(

                    [{
                        name: 'TEAM A',
                        type: 'column',
                        data: []
                    }, {
                        name: 'TEAM B',
                        type: 'area',
                        data: []
                    }, {
                        name: 'chart',
                        type: 'line',
                        data: [5, 10, 36, 6, 30, 35, 40, 10, 60, 20, 10],

                        color: ethcolor.chartColor

                    }]
                )



            }

            ethereumChart()
        },5000)
    })

    const [usdtseries, setUsdtSeries] = useState(
        [{
        name: 'TEAM A',
        type: 'column',
        data: []
    }, {
        name: 'TEAM B',
        type: 'area',
        data: []
    }, {
            name: 'chart',
            type: 'line',
            data: [35, 50, 10, 40, 20, 30,25, 0, 36, 11, 40 ],

        color: '#3c9f52'

    }]
    );



    useEffect(() => {
        setInterval(() => {
            let tetherChart = () => {

                let usdtcolor
                if (Math.sign(tetherchange) === -1 || Math.sign(tetherchange) === 0 ) {
                    usdtcolor =  {chartColor: '#FF0000'}

                } else {
                    usdtcolor = {chartColor: '#3c9f52'}


                }
                setUsdtSeries(

                    [{
                        name: 'TEAM A',
                        type: 'column',
                        data: []
                    }, {
                        name: 'TEAM B',
                        type: 'area',
                        data: []
                    }, {
                        name: 'chart',
                        type: 'line',
                        data: [35, 50, 10, 40, 20, 30,25, 0, 36, 11, 40 ],

                        color:usdtcolor.chartColor

                    }]
                )



            }

            tetherChart()
        },5000)
    })
    const [btcoptions,setBtcOptions] = useState({

            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
            show: false,  padding: {
                    left: 0,
                    right: 0
                }

        },
        chart: {
height:'100%',

            type: 'line',
            stacked: false,

                        toolbar:{
                show:false,
                enabled:false
            }
        },
        stroke: {
            width: [0, 3, 2.5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: {
                show:false,
            enabled:false
        },
        markers: {
           show:false
        },
            xaxis: {

                axisBorder: {
                    show: false,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
            show: false,
            showAlways: false,
            lines:{
                show:false
            },

            tooltip:{
                show:false,
                showAlways:false,
                enabled: false
            },
            dataLabels:{
                show: false,
                showAlways:false
            }
,
            labels: {
                axisBorder: {
                    show: false,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
                axisTicks: {
                    show: false,
                    borderType: 'solid',
                    color: 'red',
                    height: 6,
                    offsetX: 0,
                    offsetY: 0

                }
            },

            type: 'category',
            categories: [""]
},
        yaxis: {
            show:false,
            title: {
                text: 'Points',
            },
            min: 0
        },
        tooltip: {
                show:false,
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    }


    );



    const [ethoptions,setEthOptions] = useState({

            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false,  padding: {
                    left: 0,
                    right: 0
                }

            },
            chart: {
                height:'100%',

                type: 'line',
                stacked: false,

                toolbar:{
                    show:false,
                    enabled:false
                }
            },
            stroke: {
                width: [0, 3, 2.5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: {
                show:false,
                enabled:false
            },
            markers: {
                show:false
            },
            xaxis: {

                axisBorder: {
                    show: false,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
                show: false,
                showAlways: false,
                lines:{
                    show:false
                },

                tooltip:{
                    show:false,
                    showAlways:false,
                    enabled: false
                },
                dataLabels:{
                    show: false,
                    showAlways:false
                }
                ,
                labels: {
                    axisBorder: {
                        show: false,
                        color: '#78909C',
                        height: 1,
                        width: '100%',
                        offsetX: 0,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'red',
                        height: 6,
                        offsetX: 0,
                        offsetY: 0

                    }
                },

                type: 'category',
                categories: [""]
            },
            yaxis: {
                show:false,
                title: {
                    text: 'Points',
                },
                min: 0
            },
            tooltip: {
                show:false,
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        }
    );

    const [usdtoptions,setUsdtOptions] = useState({

            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false,  padding: {
                    left: 0,
                    right: 0
                }

            },
            chart: {
                height:'100%',

                type: 'line',
                stacked: false,

                toolbar:{
                    show:false,
                    enabled:false
                }
            },
            stroke: {
                width: [0, 3, 2.5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: {
                show:false,
                enabled:false
            },
            markers: {
                show:false
            },
            xaxis: {

                axisBorder: {
                    show: false,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
                show: false,
                showAlways: false,
                lines:{
                    show:false
                },

                tooltip:{
                    show:false,
                    showAlways:false,
                    enabled: false
                },
                dataLabels:{
                    show: false,
                    showAlways:false
                }
                ,
                labels: {
                    axisBorder: {
                        show: false,
                        color: '#78909C',
                        height: 1,
                        width: '100%',
                        offsetX: 0,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'red',
                        height: 6,
                        offsetX: 0,
                        offsetY: 0

                    }
                },

                type: 'category',
                categories: [""]
            },
            yaxis: {
                show:false,
                title: {
                    text: 'Points',
                },
                min: 0
            },
            tooltip: {
                show:false,
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        }

    );










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





                            <div className={watchList.coinRow}>


                                <div className={watchList.coinLogo}>


                                    {/*<div className={homeRight.userProfile}>*/}

                                        <div className={watchList.coinImage}>
                                            <img className={watchList.coinLogoImage} src="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M49.2499 31.0498C45.9129 44.4413 32.3454 52.5918 18.9499 49.2498C5.5544 45.9078 -2.59235 32.347 0.749902 18.9543C4.09215 5.56154 17.6529 -2.59271 31.0454 0.749788C44.4379 4.09229 52.5922 17.6538 49.2499 31.0498Z' fill='%23F7931A'/%3E%3Cpath d='M36.025 21.4384C36.522 18.1117 33.989 16.3232 30.525 15.1302L31.65 10.6239L28.906 9.94044L27.81 14.3282C27.0895 14.1487 26.349 13.9782 25.613 13.8112L26.713 9.39444L23.9718 8.71094L22.85 13.2154L17.317 11.8449L16.587 14.7752C16.587 14.7752 18.6225 15.2417 18.5795 15.2707C19.6905 15.5482 19.892 16.2832 19.858 16.8662L16.7795 29.2112C16.6435 29.5487 16.299 30.0547 15.5225 29.8612C15.55 29.9012 13.5285 29.3612 13.5285 29.3612L12.1665 32.5059L17.6915 33.9009L16.556 38.4597L19.296 39.1432L20.421 34.6334C21.171 34.8364 21.896 35.0239 22.6065 35.2004L21.486 39.6892L24.2295 40.3727L25.365 35.8227C30.0433 36.7077 33.5613 36.3507 35.04 32.1227C36.233 28.7164 34.9815 26.7514 32.52 25.4694C34.3125 25.0544 35.6625 23.8759 36.0228 21.4402L36.025 21.4384ZM29.755 30.2282C28.905 33.6344 23.1713 31.7937 21.3108 31.3312L22.8173 25.2924C24.6768 25.7564 30.6395 26.6754 29.756 30.2277L29.755 30.2282ZM30.606 21.3902C29.8325 24.4902 25.0583 22.9152 23.5088 22.5287L24.8728 17.0502C26.4228 17.4372 31.4105 18.1577 30.604 21.3899' fill='white'/%3E%3C/svg%3E%0A" width={30}  />

                                        </div>
                                    <h4 className={watchList.coinName}>
                                       Bitcoin
                                    </h4>



                                    </div>


                                <div className={watchList.coinChart}>


                                    <ApexCharts options={btcoptions} series={btcseries} type="line" height={90} width={110} />

                                </div>


                                <div className={watchList.coinPriceDiv}>
                                    <h4 className={watchList.coinPrice}>
                                        {/*$ {bitcoinprice}*/}

                                       $ {bitcoinPrice}
                                    </h4>
                                </div>


                                <div className={watchList.coinChangeDiv}>

                                  <Btcpon/>
                                    {/*<h4 className={watchList.coinChange}>*/}
                                    {/*     {bitcoinchange}*/}
                                    {/*</h4>*/}
                                </div>

                                </div>







                <div className={watchList.coinRow}>


                    <div className={watchList.coinLogo}>


                        {/*<div className={homeRight.userProfile}>*/}

                        <div className={watchList.coinImage}>
                            <img className={watchList.coinLogoImage} src="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z' fill='%23627EEA'/%3E%3Cpath d='M25.7781 6.25V20.1094L37.4921 25.3437L25.7781 6.25Z' fill='white' fill-opacity='0.602'/%3E%3Cpath d='M25.7781 6.25L14.0625 25.3437L25.7781 20.1094V6.25Z' fill='white'/%3E%3Cpath d='M25.7781 34.3249V43.7421L37.4999 27.5249L25.7781 34.3249Z' fill='white' fill-opacity='0.602'/%3E%3Cpath d='M25.7781 43.7421V34.3233L14.0625 27.5249L25.7781 43.7421Z' fill='white'/%3E%3Cpath d='M25.7781 32.1456L37.4921 25.344L25.7781 20.1128V32.1456Z' fill='white' fill-opacity='0.2'/%3E%3Cpath d='M14.0625 25.344L25.7781 32.1456V20.1128L14.0625 25.344Z' fill='white' fill-opacity='0.602'/%3E%3C/svg%3E%0A" width={30}  />

                        </div>
                        <h4 className={watchList.coinName}>
                         Ethereum
                        </h4>



                    </div>


                    <div className={watchList.coinChart}>

                        <ApexCharts options={ethoptions} series={ethseries} type="line" height={90} width={110} />


                    </div>


                    <div className={watchList.coinPriceDiv}>
                        <h4 className={watchList.coinPrice}>
                            $ {ethereumPrice}
                        </h4>
                    </div>


                    <div className={watchList.coinChangeDiv}>
                      <Ethpon/>
                    </div>

                </div>




                <div className={watchList.coinRow}>


                    <div className={watchList.coinLogo}>


                        {/*<div className={homeRight.userProfile}>*/}

                        <div className={watchList.coinImage}>
                            <img className={watchList.coinLogoImage} src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=014" width={30}  />

                        </div>
                        <h4 className={watchList.coinName}>
                           Tether
                        </h4>



                    </div>


                    <div className={watchList.coinChart}>
                        <ApexCharts options={usdtoptions} series={usdtseries} type="line" height={90} width={110} />


                    </div>


                    <div className={watchList.coinPriceDiv}>
                        <h4 className={watchList.coinPrice}>
                           $ {tetherPrice}
                        </h4>
                    </div>


                    <div className={watchList.coinChangeDiv}>

                            <Usdtpon/>

                    </div>

                </div>

            </div>





        </div>
    )



}



