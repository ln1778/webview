export declare type ChainType = 'ETHEREUM' | 'TRON' | 'HWAN COIN';
declare const user: {
    /**
     * Show switchable user wallets. If the switch is successful, the new address will be returned.
     */
    showAccountSwitch: (chainType?: ChainType | null) => Promise<string>;
};
export default user;
