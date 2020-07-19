import * as ContractInfo from './contractInfo'
import { Contract, Wallet } from 'ethers'

const ipfs = window.require('electron').remote.require('./IPFS/ipfs')
const ethereum = window
    .require('electron')
    .remote.require('./ethereum/ethereum')

function loadWallet(): Wallet {
    return ethereum.initializeWallet(
        '2984b77b549e4960a6383b2d769fbf6e',
        '0xf300cb1461fabe3a4057c0b3705944993966003d174bd83cbd8a1d438ff9f4a1'
    )
}

function connectWalletToContract(wallet: Wallet): Contract {
    return new Contract(ContractInfo.contractAddress, ContractInfo.abi, wallet)
}

export async function sendMessage(message: string, recipient: string) {
    const wallet = loadWallet()
    const conveyContract = connectWalletToContract(wallet)

    const hash: string = await ipfs.pinStringMessage(message)
    const mID: string = `mid:${hash}:${recipient}:ethereum@kovan`

    await conveyContract.sendMessage(recipient, mID)
}
