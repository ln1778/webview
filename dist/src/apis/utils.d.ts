/**
 * Identify if the error was cancelled by the user himself.
 */
export declare const isCancelError: (error: Error | string) => boolean;
export declare const isHWAWebView: () => boolean;
export declare const callAPI: <T>(...args: unknown[]) => T;
export declare const callPromisifyAPI: <T>(...args: unknown[]) => Promise<T>;
export declare const getVersion: () => string;
export declare const compareSemver: (a?: string, b?: string) => number;
export declare const isGreaterThanOrEqualVersion: (version: string) => boolean;
export declare const removeHashPrefix: (colors: string | string[]) => string | string[];
