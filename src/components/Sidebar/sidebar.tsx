import React from 'react'

import Styles from './sidebar.module.css'

import { ReactComponent as InboxIcon } from '../../assets/images/sidebar/inbox.svg'
import { ReactComponent as SentIcon } from '../../assets/images/sidebar/sent.svg'
import { ReactComponent as SavedIcon } from '../../assets/images/sidebar/saved.svg'
import { ReactComponent as SettingsIcon } from '../../assets/images/sidebar/settings.svg'

export default function sidebar() {
    return (
        <div className={Styles.container}>
            <span className={Styles.CONVEY}>CONVEY</span>
            <div className={Styles.iconContainer}>
                <InboxIcon />
                <SentIcon />
                <SavedIcon />
                <SettingsIcon />
            </div>
        </div>
    )
}
