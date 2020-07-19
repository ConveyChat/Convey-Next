import React, { useState, useEffect } from 'react'

import SideBar from '../../components/Sidebar/sidebar'
import Searchbar from '../../components/Searchbar/searchbar'
import MsgList from '../../components/MsgList/msglist'
import MsgViewer from '../../components/MsgViewer/msgviewer'

import Styles from './main.module.css'

import { connect } from 'react-redux'
import { setMessages } from '../../actions/message'

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
    }, [])

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
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setMessages: (messages: any[]) => dispatch(setMessages(messages)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
