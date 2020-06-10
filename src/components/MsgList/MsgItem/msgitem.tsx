import React from 'react'

import Styles from './msgitem.module.css'

export default function MsgItem(props: any) {
    return (
        <div className={`${Styles.msg} ${Styles['msg--active']}`}>
            <div className={Styles.topText}>
                <div>
                    <span className={Styles.topText__tag}>{props.tag}</span>
                    <span className={Styles.topText__sender}>
                        {props.sender}
                    </span>
                </div>
                <span className={Styles.topText__timestamp}>
                    {props.timestamp}
                </span>
            </div>
            <div className={Styles.bottomText}>
                <span className={Styles.bottomText__subject}>
                    {props.subject}
                </span>
                <span className={Styles.bottomText__content}>
                    {props.content}
                </span>
            </div>
        </div>
    )
}
