import apis from './apis';
import { ERRORS } from './constants';
import { isGreaterThanOrEqualVersion, getVersion, compareSemver, isCancelError } from './apis/utils';
declare const isHwaEnv: () => boolean;
declare const HWAWebView: {
    ERRORS: {
        NOT_TOKEN_WEBVIEW: string;
        USER_CANCEL: string;
    };
    isHwaEnv: () => boolean;
    isCancelError: (error: string | Error) => boolean;
    compareSemver: (a?: string, b?: string) => number;
    isGreaterThanOrEqualVersion: (version: string) => boolean;
    getVersion: () => string;
    apis: {
        navigator: {
            closeDapp: () => void;
            goBack: () => void;
            toggleNavbar: () => void;
            routeTo: ({ screen, props }: {
                screen: string;
                props: import("./apis/navigator").ScreenProps;
            }) => void;
            getOrientation: () => Promise<import("./apis/navigator").Orientation>;
            setOrientation: (orientation: import("./apis/navigator").Orientation) => void;
            setTitle: (title: string) => void;
        };
        native: {
            alert: (content: string) => void;
            confirm: (params: import("./apis/native").ConfirmParams) => Promise<boolean>;
            setLoading: (visible: boolean) => void;
            share: (params: import("./apis/native").ShareParams) => Promise<import("./apis/native").OpenReturn>;
            scanQRCode: () => Promise<string>;
            setClipboard: (text: string) => void;
        };
        user: {
            showAccountSwitch: (chainType?: import("./apis/user").ChainType | null) => Promise<string>;
        };
        device: {
            getCurrentLanguage: () => Promise<string>;
            getCurrentCurrency: () => Promise<string>;
        };
        internal: {
            getHeaders: () => Promise<string>;
            setLogo: (logo: string) => void;
            log: (...data: any[]) => void;
            emitEvent: <T extends Record<string | number | symbol, any>>(eventName: string, params?: T | undefined) => Promise<T>;
            dangerouslyAPI: <T_1>(...args: unknown[]) => T_1;
            dangerouslyPromisifyAPI: <T_2>(...args: unknown[]) => Promise<T_2>;
        };
        layout: {
            setOptions: (options: import("./apis/layout").WebViewLayoutOptions) => void;
        };
        transaction: {
            sendSignTransaction: (tx?: import("./apis/transaction").TxType | null) => Promise<string>;
            signTransaction: (tx?: import("./apis/transaction").TxType | null) => Promise<string>;
        };
    };
};
export { ERRORS, isHwaEnv, isCancelError, compareSemver, isGreaterThanOrEqualVersion, getVersion, apis, };
export default HWAWebView;
