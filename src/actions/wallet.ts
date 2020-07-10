import { Wallet } from 'ethers'

export enum WalletActions {
    SET_WALLET = 'SET_WALLET',
}

export function setWallet(wallet: Wallet) {
    return {
        type: WalletActions.SET_WALLET,
        payload: {
            wallet: wallet,
        },
    }
}
