import { Reducer } from 'redux'
import { Wallet } from 'ethers'

import { WalletActions } from '../actions/wallet'

export interface WalletState {
    wallet: Wallet | null
}

const initialState: WalletState = {
    wallet: null,
}

export const walletReducer: Reducer<WalletState> = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case WalletActions.SET_WALLET:
            return {
                ...state,
                wallet: action.payload.wallet,
            }
        default:
            return state
    }
}
