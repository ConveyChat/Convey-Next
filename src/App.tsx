import { Remote } from 'electron'
import Main from './screens/Main/main'
import Compose from './screens/Compose/compose'
import { Provider } from 'react-redux'
import store from './store'
import React from 'react'

import {
    HashRouter as Router,
    Switch,
    Route,
    RouteComponentProps,
} from 'react-router-dom'

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
// const ipfs = remote.require('./ipfs')

// async function getIPFSStatus() {
//     console.log('Getting Node ID')
//     if (!ipfs.node) {
//         console.log('Node not started')
//     } else {
//         const id = await ipfs.node.id()
//         console.log(id)
//     }
// }

store.subscribe(() => {
    console.log(
        '[State Change] New Messages: ',
        store.getState()?.messages.messages
    )
})

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/compose" component={Compose} />
                    <Route exact path="" component={Main} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
