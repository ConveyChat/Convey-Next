import React from 'react'

import Styles from './msglist.module.css'

import { connect } from 'react-redux'

import MsgItem from './MsgItem/msgitem'

function MsgList(props: any) {
    const filteredItems = props.searchValue
        ? props.messageItems.filter((message: any) => {
              return (
                  message.content.toLowerCase().includes(props.searchValue) ||
                  message.sender.toLowerCase().includes(props.searchValue) ||
                  message.subject.toLowerCase().includes(props.searchValue)
              )
          })
        : props.messageItems

    return (
        <div>
            {filteredItems.map((item: any) => {
                return <MsgItem {...item} />
            })}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        messageItems: state.messages.messages,
        searchValue: state.messages.searchValue,
    }
}

export default connect(mapStateToProps)(MsgList)
