import { combineReducers } from 'redux'
import { messageReducer, MessageState } from './messageReducer'

export interface RootState {
    messages: MessageState
}

export const getRootReducer = combineReducers<RootState | undefined>({
    messages: messageReducer,
})
