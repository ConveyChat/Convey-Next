import * as ContractInfo from './contractInfo'
import { Contract, Wallet } from 'ethers'

const ipfs = window.require('electron').remote.require('./IPFS/ipfs')

function connectWalletToContract(wallet: Wallet): Contract {
    return new Contract(ContractInfo.contractAddress, ContractInfo.abi, wallet)
}

export async function sendMessage(
    message: string,
    recipient: string,
    wallet: Wallet
) {
    const conveyContract = connectWalletToContract(wallet)
    const hash: string = await ipfs.pinStringMessage(message)

    const mID: string = `mid:${hash}:${recipient}:ethereum@kovan`

    await conveyContract.sendMessage(recipient, mID)
}
