// @ts-ignore
import * as IPFS from 'ipfs'

export var ipfs: any = null

export async function startNode() {
    try {
        ipfs = await IPFS.create()
        const id = await ipfs.id()
        console.log(id)
    } catch (err) {
        console.error(err)
    }
}

// Pins a string to IPFS and returns the IPFS hash
export async function pinStringMessage(message: string) {
    try {
        let bufferedString = Buffer.from(message);

        let result = [];
        for await (const file of ipfs.add(bufferedString, { pin: true })) {
            result.push(file);
        }

        console.log(result);
        return result[0].path;
    } catch (err) {
        console.error(err)
    }
}

export async function retrieveStringMessage(ipfsPath: string) {
    try {
        const chunks = [];
        for await (const chunk of ipfs.cat(ipfsPath)) {
            chunks.push(chunk);
        }

        const result: string = Buffer.concat(chunks).toString()
        console.log(`Retrieved message: ${result}`)
        return result;
    } catch (err) {
        console.error(err)
    }
}