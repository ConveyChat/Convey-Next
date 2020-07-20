import React, { useState } from 'react'

import Styles from './compose.module.css'

import * as Helpers from '../../helpers/helpers'

import { Wallet } from 'ethers'

interface Props {
    wallet: Wallet
}

function Compose(props: Props) {
    const [recipient, setRecipient] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const [showConfirmation, setShowConfirmation] = useState(false)
    const [confirmation, setConfirmation] = useState(
        'Message successfully sent!'
    )

    async function handleSend(e: any) {
        e.preventDefault()

        try {
            await Helpers.sendMessage(body, recipient)
        } catch (e) {
            console.table(e)
            setConfirmation(e.message)
        } finally {
            setShowConfirmation(true)
        }
    }

    return (
        <div className={Styles.container}>
            <input
                type="text"
                name="reciever"
                placeholder="To:"
                onChange={(e) => setRecipient(e.target.value)}
                className={Styles.reciever}
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
                className={Styles.subject}
            />
            <textarea
                name="body"
                placeholder="Your message here..."
                onChange={(e) => setBody(e.target.value)}
                className={Styles.body}
            />
            <button
                type="submit"
                className={Styles.sendButton}
                onClick={(e) => handleSend(e)}
            >
                Send
            </button>

            {showConfirmation && <span>{confirmation}</span>}
        </div>
    )
}

export default Compose
