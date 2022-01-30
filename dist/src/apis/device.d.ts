declare const user: {
    /**
     * Get the current language environment, e.g. "en-us".
     */
    getCurrentLanguage: () => Promise<string>;
    /**
     * Get currency from user settings, e.g. "CNY".
     */
    getCurrentCurrency: () => Promise<string>;
};
export default user;
