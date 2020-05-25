import EthCrypto from 'eth-crypto'
const fs = require('fs')

import { PRIVATE_KEY } from './constants'

async function encrypt(path: string, receiverAddress: string)  {
  const buffer = fs.readFileSync(path)

  // convery buffer to hex to shorten
  const message = buffer.toString("hex")

  // sign the message 
  const signature = EthCrypto.sign(
    PRIVATE_KEY,
    EthCrypto.hash.keccak256(message),
  )
  const payload = {
    title: path,
    message: message,
    signature,
  }

  // encryption
  const encrypted = await EthCrypto.encryptWithPublicKey(
    receiverAddress, 
    JSON.stringify(payload), // we have to stringify the payload before we can encrypt it
  )

  // return compressed encrypted object as a PROMISE
  return EthCrypto.cipher.stringify(encrypted)
}
