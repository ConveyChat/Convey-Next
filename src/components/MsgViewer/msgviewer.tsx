import React from 'react'

import Styles from './msgviewer.module.css'

import { connect } from 'react-redux'

function MsgViewer(props: any) {
    const data = props.activeMessage
    console.log(data)
    const content = data ? (
        <>
            <h1>{data.subject}</h1>
            <p>{data.content}</p>
        </>
    ) : null

    return (
        <div className={Styles.container}>
            {content ? content : <p>Please select a message from the left</p>}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        activeMessage: state.messages.activeMessage,
    }
}

export default connect(mapStateToProps)(MsgViewer)
