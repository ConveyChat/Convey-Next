import React from 'react'

import Styles from './compose.module.css'

import * as Helpers from '../../helpers/helpers'

interface State {
    reciever: string
    subject: string
    body: string
}
class Compose extends React.Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            reciever: '',
            subject: '',
            body: '',
        }
    }

    handleChange(e: any) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value } as State)
    }

    handleSend(e: any) {
        e.preventDefault()
        console.log(this.state)

        Helpers.sendMessage(this.state.body, 'placeholder')
    }

    render() {
        return (
            <div className={Styles.container}>
                <input
                    type="text"
                    name="reciever"
                    placeholder="To:"
                    onChange={(e) => this.handleChange(e)}
                    className={Styles.reciever}
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={(e) => this.handleChange(e)}
                    className={Styles.subject}
                />
                <textarea
                    name="body"
                    placeholder="Your message here..."
                    onChange={(e) => this.handleChange(e)}
                    className={Styles.body}
                />
                <button
                    type="submit"
                    className={Styles.sendButton}
                    onClick={(e) => this.handleSend(e)}
                >
                    Send
                </button>
            </div>
        )
    }
}

export default Compose
