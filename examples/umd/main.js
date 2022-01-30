import './style.css'


if (window.HWAWebView) {
  document.querySelector('#app').innerHTML = `
 In token env: ${window.HWAWebView.isHwaEnv()}
`
}

