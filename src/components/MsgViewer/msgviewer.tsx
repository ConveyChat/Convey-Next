import React from 'react'

import Styles from './msgviewer.module.css'

import { connect } from 'react-redux'

function MsgViewer(props: any) {
    const data = props.activeMessage

    return data ? (
        <div>
            <h1>Yay there's a message</h1>
        </div>
    ) : (
        <div>
            <p>Please select a message from the left</p>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        activeMessage: state.messages.activeMessage,
    }
}

export default connect(mapStateToProps)(MsgViewer)
