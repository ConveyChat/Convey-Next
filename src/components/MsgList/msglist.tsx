import React from 'react'

import Styles from './msglist.module.css'

import MsgItem from './MsgItem/msgitem'

export default function MsgList({ items }: { items: any }) {
    return (
        <div>
            {items.map((item: any) => {
                return <MsgItem {...item} />
            })}
        </div>
    )
}
