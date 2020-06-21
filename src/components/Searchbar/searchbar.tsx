import React from 'react'

import Styles from './searchbar.module.css'

import { connect } from 'react-redux'
import { setSearchValue } from '../../actions/message'

function Searchbar(props: any) {
    return (
        <div className={Styles.container}>
            <input
                className={Styles.searchbar}
                type="text"
                placeholder="Search Inbox"
                onChange={(e: any) => props.setSearchValue(e.target.value)}
            ></input>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        searchValue: state.messages.searchValue,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setSearchValue: (searchValue: string) =>
            dispatch(setSearchValue(searchValue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
