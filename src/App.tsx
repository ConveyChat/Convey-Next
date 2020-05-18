import { Remote } from 'electron'
import React from 'react'
import Main from './screens/Main/main'

declare global {
    interface Window {
        require: (
            module: 'electron'
        ) => {
            remote: Remote
        }
    }
}

const { remote } = window.require('electron')
const ipfs = remote.require('./ipfs')

async function getIPFSStatus() {
    console.log('Getting Node ID')
    if (!ipfs.node) {
        console.log('Node not started')
    } else {
        const id = await ipfs.node.id()
        console.log(id)
    }
}

function App() {
    return <Main />
}

export default App
