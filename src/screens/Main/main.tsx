import React, { useState, useEffect } from 'react'

import SideBar from '../../components/Sidebar/sidebar'
import Searchbar from '../../components/Searchbar/searchbar'
import MsgList from '../../components/MsgList/msglist'
import MsgViewer from '../../components/MsgViewer/msgviewer'

import Styles from './main.module.css'

import { connect } from 'react-redux'
import { setMessages } from '../../actions/message'
import { setWallet } from '../../actions/wallet'

import { Wallet, providers } from 'ethers'

function Main(props: any) {
    useEffect(() => {
        props.setMessages([
            {
                tag: 'DAPP',
                sender: 'Ethereum Name Services',
                subject: 'Domain Expiring Soon',
                content: 'This is the content of the message right now',
                timestamp: '15:44',
            },
            {
                tag: 'DAPP',
                sender: 'Ryan Ouyang',
                subject: 'Test test test',
                content: 'This is some test content for searching',
                timestamp: '14:44',
            },
        ])
        initializeWallet(
            '2984b77b549e4960a6383b2d769fbf6e',
            '0xf300cb1461fabe3a4057c0b3705944993966003d174bd83cbd8a1d438ff9f4a1'
        )
    }, [])

    const initializeWallet = (infuraKey: string, privateKey: string) => {
        const provider: providers.InfuraProvider = new providers.InfuraProvider(
            'kovan',
            infuraKey
        )
        const currWallet: Wallet = new Wallet(privateKey, provider)

        props.setWallet(currWallet)
    }

    const handleNewComposeWindow = () => {
        const remote = window.require('electron').remote
        const BrowserWindow = remote.BrowserWindow
        const win = new BrowserWindow({
            height: 600,
            width: 1000,
            frame: true,
            webPreferences: {
                nodeIntegration: true,
            },
        })
        win.loadURL('http://localhost:3000/index.html#/compose')
        // win.loadURL(`file://${__dirname}/../index.html`)
    }

    console.log(props.wallet)

    return (
        <div className={Styles.app}>
            <div className={Styles.app__sidebar}>
                <SideBar />
                <button onClick={() => handleNewComposeWindow()}>
                    Compose
                </button>
            </div>
            <div className={Styles.app__msglist}>
                <Searchbar />
                <MsgList />
            </div>
            <div className={Styles.app__msgviewer}>
                <MsgViewer />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        messageItems: state.messages.messages,
        wallet: state.wallet.wallet,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setMessages: (messages: any[]) => dispatch(setMessages(messages)),
        setWallet: (wallet: Wallet) => dispatch(setWallet(wallet)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
