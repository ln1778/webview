'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ERRORS = {
    NOT_TOKEN_WEBVIEW: 'Not hwatoken environment.',
    USER_CANCEL: 'user_canceled',
};

/**
 * Identify if the error was cancelled by the user himself.
 */
const isCancelError = (error) => {
    if (typeof error === 'string') {
        return error === ERRORS.USER_CANCEL;
    }
    if (error.message === ERRORS.USER_CANCEL)
        return true;
    return error.errorCode === 1001;
};
const isHWAWebView = () => {
    if (typeof window === 'undefined')
        return false;
    const win = window;
    if (typeof win['hwaToken'] === 'undefined')
        return false;
    const token = win['hwaToken'] || {};
    if (token['isSimulated'])
        return false;
    if (!token['callAPI'])
        return false;
    return true;
};
const getHWAApis = () => {
    if (!isHWAWebView()) {
        throw new Error(ERRORS.NOT_TOKEN_WEBVIEW);
    }
    const win = window;
    return win['hwaToken'];
};
const callAPI = (...args) => {
    const token = getHWAApis();
    return token.callAPI(...args);
};
const callPromisifyAPI = (...args) => {
    const token = getHWAApis();
    return token.callPromisifyAPI.bind(window['hwaToken'])(...args);
};
const getVersion = () => {
    if (!isHWAWebView())
        return '';
    const matchArr = `${navigator.userAgent}`.match(/hwaToken\/(.*)/i);
    if (!matchArr || matchArr.length < 1)
        return '';
    if (!matchArr[1])
        return '';
    return `${matchArr[1]}`.trim();
};
const compareSemver = (a = '', b = '') => {
    const pa = a.split('.');
    const pb = b.split('.');
    for (let i = 0; i < 3; i++) {
        const na = Number(pa[i]);
        const nb = Number(pb[i]);
        if (na > nb)
            return 1;
        if (nb > na)
            return -1;
        if (!isNaN(na) && isNaN(nb))
            return 1;
        if (isNaN(na) && !isNaN(nb))
            return -1;
    }
    return 0;
};
const isGreaterThanOrEqualVersion = (version) => {
    const currentVersion = getVersion();
    if (!currentVersion)
        return false;
    const result = compareSemver(currentVersion, version);
    return !!(version && result >= 0);
};
const replaceHash = (str) => `${str}`.replace(/#/g, '');
const removeHashPrefix = (colors) => {
    if (!Array.isArray(colors))
        return replaceHash(colors);
    return colors.map(replaceHash);
};

/**
 * Change setting items such as route, title etc.
 */
const navigator$1 = {
    /**
     * Close the current web app.
     */
    closeDapp: () => {
        callAPI('navigator.setTitle');
    },
    /**
     * Returns the previous level of routing, or closes the app if there is no routing stack.
     */
    goBack: () => {
        callAPI('navigator.goBack');
    },
    /**
     * Hide Navbar manually.
     */
    toggleNavbar: () => {
        callAPI('navigator.toggleNavbar');
    },
    /**
     * Navigate to a specfic screen.
     */
    routeTo: ({ screen, props }) => {
        callAPI('navigator.routeTo', {
            screen: screen,
            passProps: props,
        });
    },
    /**
     * Get current screen Orientation.
     */
    getOrientation: () => {
        return new Promise((resolve, reject) => {
            callAPI('navigator.getOrientation', (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    },
    /**
     * Set screen Orientation.
     */
    setOrientation: (orientation) => {
        callAPI('navigator.setOrientation', `${orientation}`.toLowerCase());
    },
    /**
     * Dynamically set dapp title. No effect to `document.title`.
     */
    setTitle: (title) => {
        callAPI('navigator.setTitle', title);
    },
};

const native = {
    /**
     * Call the native component, UI effects depend on the platform.
     */
    alert: (content) => {
        callAPI('native.alert', content);
    },
    /**
     * Call the native component, UI effects depend on the platform.
     */
    confirm: (params) => {
        return new Promise(resolve => {
            callAPI('native.confirm', params, (err) => {
                if (err)
                    return resolve(false);
                resolve(true);
            });
        });
    },
    /**
     * Set loading status. the loading layer blocks all events from user.
     */
    setLoading: (visible) => {
        const method = visible ? 'showLoading' : 'hideLoading';
        callAPI(`native.${method}`);
    },
    /**
     * Share image or url address.
     */
    share: (params) => {
        const input = !params.image
            ? params
            : {
                title: params.title,
                url: params.image,
                type: 'image/png',
            };
        return new Promise((resolve, reject) => {
            callAPI('native.share', input, (err, ret) => {
                if (err)
                    return reject(err);
                resolve(ret);
            });
        });
    },
    /**
     * Call the native component, UI effects depend on the platform.
     */
    scanQRCode: () => {
        return new Promise((resolve, reject) => {
            callAPI('native.scanQRCode', (err, text) => {
                if (err)
                    return reject(err);
                resolve(text);
            });
        });
    },
    /**
     * Set the user's clipboard.
     */
    setClipboard: (text) => {
        callAPI('native.setClipboard', text);
    },
};

const user = {
    /**
     * Show switchable user wallets. If the switch is successful, the new address will be returned.
     */
    showAccountSwitch: (chainType = null) => {
        return new Promise((resolve, reject) => {
            callAPI('user.showAccountSwitch', { chainType }, (err, address) => {
                if (err)
                    return reject(err);
                resolve(address);
            });
        });
    },
};

const transaction = {
    /**
     * Show switchable user wallets. If the switch is successful, the new address will be returned.
     */
    sendSignTransaction: (tx = null) => {
        return new Promise((resolve, reject) => {
            callAPI('transaction.sendSignTransaction', Object.assign({}, tx), (err, address) => {
                if (err)
                    return reject(err);
                resolve(address);
            });
        });
    },
    signTransaction: (tx = null) => {
        return new Promise((resolve, reject) => {
            callAPI('transaction.signTransaction', Object.assign({}, tx), (err, address) => {
                if (err)
                    return reject(err);
                resolve(address);
            });
        });
    },
};

const user$1 = {
    /**
     * Get the current language environment, e.g. "en-us".
     */
    getCurrentLanguage: () => {
        return new Promise((resolve, reject) => {
            callAPI('device.getCurrentLanguage', (err, language) => {
                if (err)
                    return reject(err);
                resolve(language);
            });
        });
    },
    /**
     * Get currency from user settings, e.g. "CNY".
     */
    getCurrentCurrency: () => {
        return new Promise((resolve, reject) => {
            callAPI('device.getCurrentCurrency', (err, currency) => {
                if (err)
                    return reject(err);
                resolve(currency);
            });
        });
    },
};

const internal = {
    /**
     * Internal API, unstable, for debugging only.
     */
    getHeaders: () => {
        return new Promise((resolve, reject) => {
            callAPI('private.getHeaders', (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    },
    /**
     * Internal API, unstable, for debugging only.
     */
    setLogo: (logo) => {
        callAPI('private.setLogo', logo);
    },
    /**
     * Internal API, unstable, for debugging only.
     */
    log: (...data) => {
        callAPI('private.logo', data);
    },
    /**
     * Internal API, unstable, for debugging only.
     */
    emitEvent: (eventName, params) => {
        return new Promise((resolve, reject) => {
            callAPI('private.emitEvent', {
                eventName,
                params: params || {},
            }, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    },
    /**
     * Internal API, unstable, for debugging only.
     */
    dangerouslyAPI: (...args) => {
        return callAPI(...args);
    },
    /**
     * Internal API, unstable, for debugging only.
     */
    dangerouslyPromisifyAPI: (...args) => {
        return callPromisifyAPI(...args);
    },
};

const headerMapKeys = {
    background: 'hbg',
    foreground: 'hfg',
    isTitleLeft: 'title_left',
    titleSize: 'title_size',
    isTransparent: 'trans',
    transparentScrollY: 'trans_y',
    loadingBackground: 'lbg',
    loadingForeground: 'lfg',
    bodyBackground: 'bbg',
    bodyForeground: 'bfg',
    statusBarStyle: 'sfg',
};
const colorKeys = [
    'background',
    'foreground',
    'loadingForeground',
    'loadingBackground',
    'bodyBackground',
    'bodyForeground',
];
const hasColorKey = (key) => colorKeys.includes(key);
const layout = {
    setOptions: (options) => {
        const params = Object.keys(options).reduce((pre, next) => {
            const apiKey = headerMapKeys[next];
            const val = options[next];
            const valOrColor = hasColorKey(next) ? removeHashPrefix(val) : val;
            if (!apiKey)
                return pre;
            return Object.assign(Object.assign({}, pre), { [apiKey]: valOrColor });
        }, {});
        callAPI('layout.setOptions', params);
    },
};

const apis = {
    navigator: navigator$1,
    native,
    user,
    device: user$1,
    internal,
    layout,
    transaction
};

const isHwaEnv = () => isHWAWebView();
const HWAWebView = {
    ERRORS,
    isHwaEnv: isHwaEnv,
    isCancelError,
    compareSemver,
    isGreaterThanOrEqualVersion,
    getVersion,
    apis,
};

exports.ERRORS = ERRORS;
exports.apis = apis;
exports.compareSemver = compareSemver;
exports.default = HWAWebView;
exports.getVersion = getVersion;
exports.isCancelError = isCancelError;
exports.isGreaterThanOrEqualVersion = isGreaterThanOrEqualVersion;
exports.isHwaEnv = isHwaEnv;
