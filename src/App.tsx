import { Remote } from 'electron'
import Main from './screens/Main/main'
import { Provider } from 'react-redux'
import store from './store'
const React = require('react')

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
    console.log('[State Change] New Text: ', store.getState()?.hello.text)
})

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

export default App
