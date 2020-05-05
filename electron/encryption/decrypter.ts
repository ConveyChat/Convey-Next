import EthCrypto from 'eth-crypto'
import { PRIVATE_KEY } from './constants'


// replace bobs private key with imported private key
export async function decrypt(message:string): Promise<string> {

  // decompress encrypted string
  const encryptedObject = EthCrypto.cipher.parse(message)
  
  // decrypt with bob's private key
  const decrypted = await EthCrypto.decryptWithPrivateKey(
    PRIVATE_KEY,
    encryptedObject,
  )

  const decryptedPayload = JSON.parse(decrypted)

  return decryptedPayload.message
}
