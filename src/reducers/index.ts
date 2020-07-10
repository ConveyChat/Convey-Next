import { combineReducers } from 'redux'
import { messageReducer, MessageState } from './messageReducer'
import { walletReducer, WalletState } from './walletReducer'

export interface RootState {
    messages: MessageState
    wallet: WalletState
}

export const getRootReducer = combineReducers<RootState | undefined>({
    messages: messageReducer,
    wallet: walletReducer,
})
