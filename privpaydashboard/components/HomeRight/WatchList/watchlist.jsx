import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import navstyles from "../../NavBar/navbar.module.scss";
import homeRight from "../homeright.module.scss";
import React, { useState } from "react";
import watchList from "./watchlist.module.scss"
import homeBalance from "../Balance/homebalance.module.scss";
// import { VictoryLine } from 'victory';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function WatchList() {
//
//     const [series, setSeries] = useState( [{
//         name: 'series2',
//         data: [11, 32, 45, 32, 34, 52, 41],
//         color:'mediumspringgreen'
//
//     }]);
//
//     const [options, setOptions]= useState({
//
//
//         fill: {
//             colors: undefined,
//             type: 'gradient',
//             gradient: {
//                 shadeIntensity: 1,
//                 inverseColors: false,
//                 opacityFrom: 0.5,
//                 opacityTo: 0,
//                 stops: [0, 90, 100]
//             }
//
//         },
//         chart: {
//             foreColor:'white',
//             height: 100,
//             type: 'bar',
//             background:'none',
//             toolbar:{
//                 show:false,
//                 enabled:false
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth'
//
//         },
//         grid: {
//             show: false
//
//         },
//         yaxis:{
//             show: false,
//
//             showAlways: false,
//             lines:{
//                 show:false
//             },
//
//             tooltip:{
//                 show:false,
//                 showAlways:false,
//                 enabled: false
//             }
//         },
//         xaxis: {
//
//
//             show: false,
//             showAlways: false,
//             lines:{
//                 show:false
//             },
//
//             tooltip:{
//                 show:false,
//                 showAlways:false,
//                 enabled: false
//             },
//             dataLabels:{
//                 show: false
//             }
// ,
//             labels: {
//                 axisBorder: {
//                     show: false,
//                     color: '#78909C',
//                     height: 1,
//                     width: '100%',
//                     offsetX: 0,
//                     offsetY: 0
//                 },
//                 axisTicks: {
//                     show: false,
//                     borderType: 'solid',
//                     color: 'red',
//                     height: 6,
//                     offsetX: 0,
//                     offsetY: 0
//
//                 }
//             },
//
//             type: 'category',
//             categories: [""]
//
//
//         }
//     })
//

    const [series, setSeries] = useState( [{
        name: 'TEAM A',
        type: 'column',
        data: []
    }, {
        name: 'TEAM B',
        type: 'area',
        data: []
    }, {
        name: 'TEAM C',
        type: 'line',
        data: [25, 0, 36, 11, 40, 35, 50, 10, 40, 20, 30],
        color:'mediumspringgreen'

    }]);

    const [options,setOptions] = useState({

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

    )
    // this.state = {
    //
    //     series: [{
    //         name: 'series1',
    //         data: [31, 40, 28, 51, 42, 109, 100]
    //     }, {
    //         name: 'series2',
    //         data: [11, 32, 45, 32, 34, 52, 41]
    //     }],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'area'
    //         },
    //         dataLabels: {
    //             enabled: false
    //         },
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         xaxis: {
    //             type: 'datetime',
    //             categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    //         },
    //         tooltip: {
    //             x: {
    //                 format: 'dd/MM/yy HH:mm'
    //             },
    //         },
    //     },
    //
    //
    // };







    return (



        <div className={watchList.container}>
            <h3 className={watchList.watchlistHeader}>WatchList</h3>


                {/*<VictoryLine*/}
                {/*    style={{*/}
                {/*        data: { stroke: "#c43a31" },*/}
                {/*        parent: { border: "1px solid #ccc"}*/}
                {/*    }}*/}
                {/*    data={[*/}
                {/*        { x: 1, y: 2 },*/}
                {/*        { x: 2, y: 3 },*/}
                {/*        { x: 3, y: 5 },*/}
                {/*        { x: 4, y: 4 },*/}
                {/*        { x: 5, y: 7 }*/}
                {/*    ]}*/}
                {/*/>*/}

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


                                    <ApexCharts options={options} series={series} type="line" height={90} width={110} />

                                </div>


                                <div className={watchList.coinPriceDiv}>
                                    <h4 className={watchList.coinPrice}>
                                        $50,900
                                    </h4>
                                </div>


                                <div className={watchList.coinChangeDiv}>
                                    <h4 className={watchList.coinChange}>
                                        -3.73%
                                    </h4>
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

                        <ApexCharts options={options} series={series} type="line" height={90} width={110} />


                    </div>


                    <div className={watchList.coinPriceDiv}>
                        <h4 className={watchList.coinPrice}>
                            $2,400
                        </h4>
                    </div>


                    <div className={watchList.coinChangeDiv}>
                        <h4 className={watchList.coinChangeSecond}>
                            +4.73%
                        </h4>
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
                        <ApexCharts options={options} series={series} type="line" height={90} width={110} />

                        {/*<img width={110} src="data:image/svg+xml,%3Csvg width='149' height='34' viewBox='0 0 149 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 31.6436L2.41398 31.2693C3.41822 30.3612 4.88618 30.1857 6.07624 30.8313L7.93713 31.841C8.7628 32.2889 9.78129 32.1671 10.478 31.5371V31.5371C11.0535 31.0167 11.8593 30.8355 12.6021 31.0594L12.7993 31.1189C13.8432 31.4335 14.9723 31.0577 15.6193 30.18L16.5467 28.9222C16.6023 28.8468 16.6654 28.7771 16.7349 28.7142V28.7142C17.2689 28.2313 18.0818 28.2313 18.6159 28.7142L18.9845 29.0475C19.9174 29.8912 21.393 29.6451 22.0017 28.5443L22.6804 27.3168C23.4092 25.9988 24.9877 25.4059 26.404 25.9181L28.7269 26.7583C29.0211 26.8647 29.2981 27.0138 29.5489 27.2008L32.4347 29.3523C34.0336 30.5443 36.3219 29.9941 37.2041 28.2056L43.6556 15.1272C44.4409 13.535 46.3748 12.8899 47.9588 13.6917L52.0036 15.7391C52.1757 15.8262 52.3554 15.8975 52.5403 15.9522L58.7477 17.7868C59.6898 18.0652 60.7077 17.8942 61.5071 17.3232L63.9703 15.5638C65.0798 14.7712 66.5704 14.7712 67.68 15.5638L71.0532 17.9732C71.2898 18.1423 71.5023 18.3429 71.6846 18.5694L72.3769 19.4298C73.5653 20.9068 75.7718 21.0281 77.1151 19.6904L79.6866 17.1295C80.0154 16.802 80.4117 16.5502 80.8479 16.3916L87.2097 14.0782C88.2922 13.6846 89.5027 13.9047 90.3772 14.6543L93.6501 17.4597C94.2285 17.9555 94.9652 18.228 95.727 18.228H97.7725C98.7573 18.228 99.687 17.7733 100.292 16.9959L103.15 13.321C104.154 12.0295 105.973 11.7069 107.36 12.574L108.51 13.2929C110.037 14.2473 112.051 13.7501 112.958 12.1947L115.331 8.12657C116.198 6.64094 118.086 6.10933 119.601 6.92452L121.72 8.06557C123.078 8.79657 124.765 8.45176 125.727 7.2464L128.738 3.47406C129.722 2.24204 131.457 1.91267 132.824 2.69878L136.702 4.92989C137.303 5.27581 138.001 5.41639 138.689 5.33035L142.918 4.80177C143.626 4.71324 144.344 4.86469 144.956 5.2319L148 7.05858' stroke='%23ED3237' stroke-width='3.19126'/%3E%3C/svg%3E%0A" />*/}

{/*                        <VictoryLine*/}
{/*                            interpolation="natural"*/}
{/*                            data={[*/}
{/*                                { x: 1, y: 7 },*/}
{/*                                { x: 2, y: 0 },*/}
{/*                                { x: 3, y: 5 },*/}
{/*                                { x: 4, y: 4 },*/}
{/*                                { x: 5, y: 7 },*/}
{/*                                {x: 0, y: 5},*/}
{/*                                {x: 5, y: 10},*/}
{/*                                {x: 8, y: 5},*/}
{/*                                // {x: 15, y: 0}*/}


{/*                            ]}*/}
{/*                            style={{*/}
{/*                                data: {*/}
{/*                                    stroke: "#c43a31",*/}
{/*                                    strokeWidth: ({data}) => data.length*/}
{/*                                }*/}
{/*                            }}*/}


{/*width={650}*/}
{/*                            height={200}*/}



{/*                        />*/}



                        {/*<div id="chart">*/}
                        {/*    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />*/}
                        {/*</div>*/}

                    </div>


                    <div className={watchList.coinPriceDiv}>
                        <h4 className={watchList.coinPrice}>
                            $1
                        </h4>
                    </div>


                    <div className={watchList.coinChangeDiv}>
                        <h4 className={watchList.coinChange}>
                            -0.09%
                        </h4>
                    </div>

                </div>

            </div>





        </div>
    )
}
