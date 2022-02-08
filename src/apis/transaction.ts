import { callAPI } from './utils'

export type TxType =
 {
     to:string,
     value:number|string
     coin_code?:string
     contract?:string
     memos?:string
 }

const transaction = {
  /**
   * Show switchable user wallets. If the switch is successful, the new address will be returned.
   */
   sendSignTransaction: (tx: TxType | null = null): Promise<string> => {
    return new Promise((resolve, reject) => {
      callAPI('transaction.sendSignTransaction', {...tx}, (err: Error, address: string) => {
        if (err) return reject(err)
        resolve(address)
      })
    })
  },
  signTransaction: (tx: TxType | null = null): Promise<string> => {
    return new Promise((resolve, reject) => {
      callAPI('transaction.signTransaction', {...tx}, (err: Error, address: string) => {
        if (err) return reject(err)
        resolve(address)
      })
    })
  },
}

export default transaction
