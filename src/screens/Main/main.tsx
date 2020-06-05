import React, { useState } from 'react'

import Sidebar from '../../components/Sidebar/sidebar'
import MsgList from '../../components/MsgList/msglist'
import MsgViewer from '../../components/MsgViewer/msgviewer'

import Styles from './main.module.css'
import { connect } from 'react-redux'
import { setText, clearText } from '../../actions/hello'

function Main(props: any) {
    const [textValue, setTextValue] = useState(props.text)

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
                <h1 style={{ color: 'white' }}>Redux</h1>
                <input
                    type="text"
                    id="textInput"
                    value={textValue}
                    onChange={(e: any) => setTextValue(e.target.value)}
                ></input>
                <button onClick={onUpdateClick}>Update</button>
                <button onClick={onClearClick}>Clear</button>
                <Sidebar />
            </div>
            <div className={Styles.app__msglist}>
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
