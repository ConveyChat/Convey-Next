import { combineReducers } from 'redux'
import { helloReducer, HelloState } from './helloReducer'

export interface RootState {
    hello: HelloState
}

export const getRootReducer = combineReducers<RootState | undefined>({
    hello: helloReducer,
})
