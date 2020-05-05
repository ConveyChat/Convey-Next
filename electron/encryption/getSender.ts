import EthCrypto from 'eth-crypto'
import { PRIVATE_KEY } from './constants'


// replace bobs private key with imported private key
export async function getSender(message:string): Promise<string> {
  
  // decompress encrypted string
  const encryptedObject = EthCrypto.cipher.parse(message)
  
  //decrypt w bobs private key
  const decrypted = await EthCrypto.decryptWithPrivateKey(
    PRIVATE_KEY,
    encryptedObject,
  )

  const decryptedPayload = JSON.parse(decrypted)

  const senderAddress = EthCrypto.recover(
    decryptedPayload.signature,
    EthCrypto.hash.keccak256(decryptedPayload.message),
  )

  return senderAddress
}
