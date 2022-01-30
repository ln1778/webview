declare const internal: {
    /**
     * Internal API, unstable, for debugging only.
     */
    getHeaders: () => Promise<string>;
    /**
     * Internal API, unstable, for debugging only.
     */
    setLogo: (logo: string) => void;
    /**
     * Internal API, unstable, for debugging only.
     */
    log: (...data: any[]) => void;
    /**
     * Internal API, unstable, for debugging only.
     */
    emitEvent: <T extends Record<string | number | symbol, any>>(eventName: string, params?: T | undefined) => Promise<T>;
    /**
     * Internal API, unstable, for debugging only.
     */
    dangerouslyAPI: <T_1>(...args: unknown[]) => T_1;
    /**
     * Internal API, unstable, for debugging only.
     */
    dangerouslyPromisifyAPI: <T_2>(...args: unknown[]) => Promise<T_2>;
};
export default internal;
