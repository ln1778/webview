export declare type HexColor = `#${string}`;
export declare type StatusBarStyle = 0 | 1 | 2;
export declare type WebViewLayoutOptions = {
    background?: HexColor | Array<HexColor>;
    foreground?: HexColor;
    isTitleLeft?: boolean;
    titleSize?: number;
    isTransparent?: boolean;
    transparentScrollY?: number;
    loadingBackground?: HexColor;
    loadingForeground?: HexColor;
    bodyBackground?: HexColor;
    bodyForeground?: HexColor;
    statusBarStyle?: StatusBarStyle;
};
declare const layout: {
    setOptions: (options: WebViewLayoutOptions) => void;
};
export default layout;
