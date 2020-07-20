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
            ipcRenderer: any
        }
    }
}

store.subscribe(() => {
    console.log(store.getState())
})

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/compose" component={Compose} />
                    <Route path="" component={Main} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
