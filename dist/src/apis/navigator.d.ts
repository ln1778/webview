export declare type ScreenProps = {
    title: string;
    url: string;
};
export declare type Orientation = 'LANDSCAPE' | 'PORTRAIT';
/**
 * Change setting items such as route, title etc.
 */
declare const navigator: {
    /**
     * Close the current web app.
     */
    closeDapp: () => void;
    /**
     * Returns the previous level of routing, or closes the app if there is no routing stack.
     */
    goBack: () => void;
    /**
     * Hide Navbar manually.
     */
    toggleNavbar: () => void;
    /**
     * Navigate to a specfic screen.
     */
    routeTo: ({ screen, props }: {
        screen: string;
        props: ScreenProps;
    }) => void;
    /**
     * Get current screen Orientation.
     */
    getOrientation: () => Promise<Orientation>;
    /**
     * Set screen Orientation.
     */
    setOrientation: (orientation: Orientation) => void;
    /**
     * Dynamically set dapp title. No effect to `document.title`.
     */
    setTitle: (title: string) => void;
};
export default navigator;
