import { Wallet, providers } from 'ethers'

export const initializeWallet = (
    infuraKey: string,
    privateKey: string
): Wallet => {
    const provider: providers.InfuraProvider = new providers.InfuraProvider(
        'kovan',
        infuraKey
    )

    return new Wallet(privateKey, provider)
}
