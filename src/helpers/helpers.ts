import store from '../store'

const ipfs = window.require('electron').remote.require('./IPFS/ipfs')

export async function sendMessage(message: string, recipient: string) {
    const hash: string = await ipfs.pinStringMessage(message)

    console.log(hash)
}
