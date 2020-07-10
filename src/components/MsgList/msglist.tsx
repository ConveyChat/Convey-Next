import React from 'react'

import Styles from './msglist.module.css'

import { connect } from 'react-redux'
import { setActiveMessage } from '../../actions/message'

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
            {filteredItems.map((item: any, key: number) => {
                return (
                    <div
                        key={key}
                        onClick={(e: any) => props.setActiveMessage(item)}
                    >
                        <MsgItem {...item} />
                    </div>
                )
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        setActiveMessage: (item: any) => dispatch(setActiveMessage(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgList)
