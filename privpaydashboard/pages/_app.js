import '../styles/globals.css'
import Layout from '../components/Layout'
import React from "react";
import '../out/antd-namespaced.min.css'
// import "antd/dist/antd.css";
import '../assets/antd.less'
import '../styles/variables.less';

function MyApp({ Component, pageProps }) {
  return(

      <Layout>

          <Component {...pageProps} />
      </Layout>

      )
}

export default MyApp
