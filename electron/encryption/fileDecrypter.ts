import EthCrypto from 'eth-crypto'
const fs = require('fs')
const FileType = require('file-type')

import { PRIVATE_KEY } from './constants'

async function decrypt(message: string): Promise<Object> {
  
    // decompress encrypted string
    const encryptedObject = EthCrypto.cipher.parse(message)
    
    // decrypt with user's private key
    const decrypted = await EthCrypto.decryptWithPrivateKey(
      PRIVATE_KEY,
      encryptedObject,
    )
    
    // parse decrypted payload
    const decryptedPayload = JSON.parse(decrypted)

    var title = decryptedPayload.title
  
    // convert from hex back into buffer
    const data = Buffer.from(decryptedPayload.message, 'hex')
  
    // write buffer back to a file
    return fs.writeFile(decryptedPayload.title, data, (err:Error) => {
      if(err) {
          throw err;
      }
      console.log("Data has been written to file successfully.");
    });
  }
