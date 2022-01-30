## HWAWebView

WebView utils for imToken application v2.

You can use this utils to call the imToken App's public APIs,
including features such as modifying title, route navigation, and support for `TypeScript`, `cjs`, `esm`, `umd`.

Package size about `1kb` (gzipped), no external dependences and no side effects.

### Installing

Using NPM:

```bash
npm i @lnssh/webview
```

Or using Yarn:

```bash
yarn add @lnssh/webview
```


### Guide

It is recommended that you determine the current environment before using the APIs:

```jsx
import HWAWebView from '@lnssh/webview'

if (HWAWebView.isHwaEnv()) {
  HWAWebView.apis.navigator.setTitle('hello world')
}
```

**Need help?**

- For a complete sample project, please refer to [examples](https://github.com/ln1778/webview/tree/master/examples).
- For any questions about the APIs, please open an [issue](https://github.com/ln1778/webview/issues/new).
- For any feature suggestions or for help, please open a [discussion](https://github.com/ln1778/webview/discussions/new).

### Documention

- [Official API Documentation](https://imtoken.gitbook.io/developers/products/webview)

### License

[MIT](https://github.com/ln1778/webview/tree/master/LICENSE)
