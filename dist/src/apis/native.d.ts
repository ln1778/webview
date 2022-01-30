export declare type ConfirmParams = {
    title: string;
    message: string;
    cancelText: string;
    confirmText: string;
};
export declare type ShareParamsDefault = {
    title: string;
    message: string;
    url: string;
};
export declare type ShareParamsImage = {
    title: string;
    image: string;
};
export declare type ShareParams = ShareParamsDefault & ShareParamsImage;
export interface OpenReturn {
    app?: string;
    dismissedAction?: boolean;
}
declare const native: {
    /**
     * Call the native component, UI effects depend on the platform.
     */
    alert: (content: string) => void;
    /**
     * Call the native component, UI effects depend on the platform.
     */
    confirm: (params: ConfirmParams) => Promise<boolean>;
    /**
     * Set loading status. the loading layer blocks all events from user.
     */
    setLoading: (visible: boolean) => void;
    /**
     * Share image or url address.
     */
    share: (params: ShareParams) => Promise<OpenReturn>;
    /**
     * Call the native component, UI effects depend on the platform.
     */
    scanQRCode: () => Promise<string>;
    /**
     * Set the user's clipboard.
     */
    setClipboard: (text: string) => void;
};
export default native;
