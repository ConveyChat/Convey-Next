import React, { useState } from 'react'

import SideBar from '../../components/Sidebar/sidebar'
import MsgList from '../../components/MsgList/msglist'
import MsgViewer from '../../components/MsgViewer/msgviewer'

import Styles from './main.module.css'
import { connect } from 'react-redux'
import { setText, clearText } from '../../actions/hello'
import sidebar from '../../components/Sidebar/sidebar'

function Main(props: any) {
    const [textValue, setTextValue] = useState(props.text)

    const sidebarItems = [
        { name: 'compose', label: 'Compose' },
        { name: 'inbox', label: 'Inbox' },
        { name: 'sent', label: 'Sent' },
        { name: 'saved', label: 'Saved' },
        { name: 'settings', label: 'Settings' },
    ]

    const messageItems = [
        {
            tag: 'DAPP',
            sender: 'Ethereum Name Services',
            subject: 'Domain Expiring Soon',
            content: 'This is the content of the message right now',
            timestamp: '15:44',
        },
        {
            tag: 'DAPP',
            sender: 'Ethereum Name Services',
            subject: 'Domain Expiring Soon',
            content: 'This is the content of the message right now',
            timestamp: '14:44',
        },
    ]

    function onUpdateClick() {
        props.updateText(
            (document.getElementById('textInput') as HTMLInputElement).value
        )
    }

    function onClearClick() {
        setTextValue('')
        props.clearText()
    }

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
                <MsgList items={messageItems} />
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
