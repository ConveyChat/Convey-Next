import React from 'react'

import Sidebar from '../../components/Sidebar/sidebar'
import MsgList from '../../components/MsgList/msglist'
import MsgViewer from '../../components/MsgViewer/msgviewer'

import Styles from './main.module.css'

export default function Main() {
    return (
        <div className={Styles.app}>
            <div className={Styles.app__sidebar}>
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
