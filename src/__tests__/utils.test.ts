import { setupAPIs, resetAPIs, makeRandomString, getNum } from 'tests/utils'
import HWAWebView from 'src/index'
import { removeHashPrefix } from 'src/apis/utils'

describe('utils', () => {
  beforeAll(() => {})

  it('should be work correctly without imToken env', () => {
    setupAPIs()
    expect(HWAWebView.isHwaEnv()).toBe(true)
    resetAPIs()
    expect(HWAWebView.isHwaEnv()).toBe(false)
  })

  it('should get the same version', () => {
    setupAPIs()
    const version = `${getNum()}.${getNum()}.${getNum()}`
    const userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get')
    userAgentGetter.mockReturnValue(`${makeRandomString()}imToken/${version}`)
    expect(HWAWebView.getVersion()).toEqual(version)
    userAgentGetter.mockReset()
  })

  it('should be able to compare version with env', () => {
    const last = getNum()
    const version = `${getNum()}.${getNum()}`
    const lastVersion = `${version}.${last}`
    const nextVersion = `${version}.${last + 1}`
    const userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get')
    userAgentGetter.mockReturnValue(`${makeRandomString()}imToken/${nextVersion}`)
    expect(HWAWebView.isGreaterThanOrEqualVersion(lastVersion)).toBe(true)
  })

  it('should be able to compare version sizes correctly', () => {
    const last = getNum()
    const version = `${getNum()}.${getNum()}`
    const lastVersion = `${version}.${last}`
    const nextVersion = `${version}.${last + 1}`
    expect(HWAWebView.compareSemver(lastVersion, nextVersion)).toBe(-1)
    expect(HWAWebView.compareSemver(nextVersion, lastVersion)).toBe(1)
    expect(HWAWebView.compareSemver(nextVersion, nextVersion)).toBe(0)
  })

  it('should be infer whether it is a cancellation error', () => {
    expect(HWAWebView.isCancelError(new Error(HWAWebView.ERRORS.USER_CANCEL))).toBe(true)

    const nonstandardError = {
      errorCode: 1001,
    }
    const isError = HWAWebView.isCancelError as any
    expect(isError(nonstandardError)).toBe(true)

    expect(HWAWebView.isCancelError(new Error(makeRandomString()))).toBe(false)
  })

  it('should be replace all hash tags', () => {
    const str = `#${makeRandomString()}#${makeRandomString()}#`
    const result = removeHashPrefix(str)
    expect(result).not.toContain('#')

    const arr = [str, str, str]
    const result2 = removeHashPrefix(arr)
    expect(result2).toBeInstanceOf(Array)
    expect(result2.includes('#')).not.toBeTruthy()

    const notIncludeHash = `${makeRandomString()}`
    const result3 = removeHashPrefix(notIncludeHash)
    expect(result3).toEqual(notIncludeHash)
  })
})
