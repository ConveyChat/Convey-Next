import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Remote } from 'electron'

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
    return (
        <div className="App">
            <div>
                <button onClick={getIPFSStatus}>Get IPFS Status</button>
            </div>
        </div>
    )
}

export default App
