import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import navstyles from './navbar.module.scss'

import React, { useState } from 'react';
import { Modal, Button } from 'antd';


// import "../../out/antd-namespaced.min.css"
export default function Logout() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (

        <>
            <Button type="default" onClick={showModal} className={navstyles}>
                <a className={navstyles.menuLinkContent}> Log out</a>
            </Button>
            <Modal okType="Okay" title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
