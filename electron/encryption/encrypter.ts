import EthCrypto from 'eth-crypto'
import { PRIVATE_KEY } from './constants'


export async function encrypt(message:string, receiverAddress: string): Promise<string> {
  // sign the message 
  const signature = EthCrypto.sign(
    PRIVATE_KEY,
    EthCrypto.hash.keccak256(message),
  )
  const payload = {
    message: message,
    signature,
  }
  // encryption
  const encrypted = await EthCrypto.encryptWithPublicKey(
    receiverAddress, // by encryping with bobs publicKey, only bob can decrypt the payload with his privateKey
    JSON.stringify(payload), // we have to stringify the payload before we can encrypt it
  )

  // return compressed encrypted object
  return EthCrypto.cipher.stringify(encrypted)
}
