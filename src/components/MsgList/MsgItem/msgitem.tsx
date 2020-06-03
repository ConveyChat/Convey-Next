import React from 'react'

import Styles from './msgitem.module.css'

export default function MsgItem() {
    return (
        <div className={`${Styles.msg} ${Styles['msg--active']}`}>
            <div className={Styles.topText}>
                <div>
                    <span className={Styles.topText__tag}>DAPP</span>
                    <span className={Styles.topText__sender}>
                        Ethereum Name Services
                    </span>
                </div>
                <span className={Styles.topText__timestamp}>15:44</span>
            </div>
            <div className={Styles.bottomText}>
                <span className={Styles.bottomText__subject}>
                    Domain Expiring Soon
                </span>
                <span className={Styles.bottomText__content}>
                    This is the content of the msg...
                </span>
            </div>
        </div>
    )
}
