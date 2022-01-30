import apis from './apis'
import { ERRORS } from './constants'
import {
  isGreaterThanOrEqualVersion,
  isHWAWebView,
  getVersion,
  compareSemver,
  isCancelError,
} from './apis/utils'

const isHwaEnv = (): boolean => isHWAWebView()

const HWAWebView = {
  ERRORS,

  isHwaEnv:isHwaEnv,

  isCancelError,

  compareSemver,

  isGreaterThanOrEqualVersion,

  getVersion,

  apis,
}

export {
  ERRORS,
  isHwaEnv,
  isCancelError,
  compareSemver,
  isGreaterThanOrEqualVersion,
  getVersion,
  apis,
}

export default HWAWebView
