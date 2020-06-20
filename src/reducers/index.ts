import { combineReducers } from 'redux'
import { helloReducer, HelloState } from './helloReducer'
import { messageReducer, MessageState } from './messageReducer'

export interface RootState {
    hello: HelloState
    messages: MessageState
}

export const getRootReducer = combineReducers<RootState | undefined>({
    hello: helloReducer,
    messages: messageReducer,
})
