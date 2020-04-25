const IPFS = require('ipfs')

export var node: any = null

export async function startNode() {
    try {
        node = await IPFS.create()
        const id = await node.id()
        console.log(id)
    } catch (err) {
        console.error(err)
    }
}
