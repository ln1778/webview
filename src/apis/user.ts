import { callAPI } from './utils'

export type ChainType =
  | 'ETHEREUM'
  | 'TRON'
  | 'HWAN COIN'

const user = {
  /**
   * Show switchable user wallets. If the switch is successful, the new address will be returned.
   */
  showAccountSwitch: (chainType: ChainType | null = null): Promise<string> => {
    return new Promise((resolve, reject) => {
      callAPI('user.showAccountSwitch', { chainType }, (err: Error, address: string) => {
        if (err) return reject(err)
        resolve(address)
      })
    })
  },
}

export default user
