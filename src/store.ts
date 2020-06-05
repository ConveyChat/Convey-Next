import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState, getRootReducer } from './reducers'

const configureStore = (
    initialState?: RootState
): Store<RootState | undefined> => {
    const middlewares: any[] = []
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
    return createStore(getRootReducer, initialState, enhancer)
}

const store = configureStore()

export default store
