import React, { useState } from 'react'

import SideBar from '../../components/Sidebar/sidebar'
import Searchbar from '../../components/Searchbar/searchbar'
import MsgList from '../../components/MsgList/msglist'
import MsgViewer from '../../components/MsgViewer/msgviewer'

import Styles from './main.module.css'

import { connect } from 'react-redux'
import { setText, clearText } from '../../actions/hello'

import { Wallet, providers } from 'ethers'

function Main(props: any) {
    const [textValue, setTextValue] = useState(props.text)
    const [searchbarValue, setSearchbarValue] = useState('')

    function onUpdateClick() {
        props.updateText(
            (document.getElementById('textInput') as HTMLInputElement).value
        )
    }

    function onClearClick() {
        setTextValue('')
        props.clearText()
    }

    const provider: providers.InfuraProvider = new providers.InfuraProvider(
        'ropsten',
        '2984b77b549e4960a6383b2d769fbf6e'
    )

    const wallet: Wallet = new Wallet(
        '0xf300cb1461fabe3a4057c0b3705944993966003d174bd83cbd8a1d438ff9f4a1',
        provider
    )

    console.log(wallet.privateKey)

    const sidebarItems = [
        { name: 'compose', label: 'Compose' },
        { name: 'inbox', label: 'Inbox' },
        { name: 'sent', label: 'Sent' },
        { name: 'saved', label: 'Saved' },
        { name: 'settings', label: 'Settings' },
    ]

    const [messageItems, setMessageItems] = useState([
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

    function handleSearchbarChange(event: any) {
        setSearchbarValue(event.target.value)
    }

    const filteredItems = messageItems.filter((message) => {
        return (
            message.content.toLowerCase().includes(searchbarValue) ||
            message.sender.toLowerCase().includes(searchbarValue) ||
            message.subject.toLowerCase().includes(searchbarValue)
        )
    })

    return (
        <div className={Styles.app}>
            <div className={Styles.app__sidebar}>
                <h1 className={Styles.app__sidebar__title}>Convey</h1>
                {/* <input
                    type="text"
                    id="textInput"
                    value={textValue}
                    onChange={(e: any) => setTextValue(e.target.value)}
                ></input>
                <button onClick={onUpdateClick}>Update</button>
                <button onClick={onClearClick}>Clear</button> */}
                <SideBar items={sidebarItems} />
            </div>
            <div className={Styles.app__msglist}>
                <Searchbar
                    handleSearchbarChange={(e: any) => handleSearchbarChange(e)}
                />
                <MsgList items={filteredItems} />
            </div>
            <div className={Styles.app__msgviewer}>
                <MsgViewer />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        text: state.hello.text,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateText: (text: string) => dispatch(setText(text)),
        clearText: () => dispatch(clearText()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
