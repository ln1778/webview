declare const apis: {
    navigator: {
        closeDapp: () => void;
        goBack: () => void;
        toggleNavbar: () => void;
        routeTo: ({ screen, props }: {
            screen: string;
            props: import("./navigator").ScreenProps;
        }) => void;
        getOrientation: () => Promise<import("./navigator").Orientation>;
        setOrientation: (orientation: import("./navigator").Orientation) => void;
        setTitle: (title: string) => void;
    };
    native: {
        alert: (content: string) => void;
        confirm: (params: import("./native").ConfirmParams) => Promise<boolean>;
        setLoading: (visible: boolean) => void;
        share: (params: import("./native").ShareParams) => Promise<import("./native").OpenReturn>;
        scanQRCode: () => Promise<string>;
        setClipboard: (text: string) => void;
    };
    user: {
        showAccountSwitch: (chainType?: "ETHEREUM" | "TRON" | "HWAN COIN" | null) => Promise<string>;
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
        setOptions: (options: import("./layout").WebViewLayoutOptions) => void;
    };
};
export default apis;
