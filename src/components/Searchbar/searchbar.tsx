import React from 'react'

import Styles from './searchbar.module.css'

export default function Searchbar(props: any) {
    return (
        <div className={Styles.container}>
            <input
                className={Styles.searchbar}
                type="text"
                placeholder="Search Inbox"
                onChange={(e: any) => props.handleSearchbarChange(e)}
            ></input>
        </div>
    )
}
