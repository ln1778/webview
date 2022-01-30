import HWAWebView from 'src/index'
import { setupAPIs } from 'tests/utils'

describe('APIs', () => {
  it('all APIs should be forwarded', () => {
    setupAPIs()
    const fn = jest.fn()
    ;(window as any).imToken.callAPI = fn

    expect(() => HWAWebView.apis.internal.dangerouslyAPI('unknow')).not.toThrow()
    expect(fn).toBeCalled()
    fn.mockReset()
  })

  it('all promisify APIs should be forwarded', () => {
    setupAPIs()
    const fn = jest.fn()
    ;(window as any).imToken.callPromisifyAPI = fn

    expect(() => HWAWebView.apis.internal.dangerouslyPromisifyAPI('unknow')).not.toThrow()
    expect(fn).toBeCalled()
    fn.mockReset()
  })
})
