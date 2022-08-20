import storage from './storage'
import * as cipher from './cipher'
import * as date from './date'
import * as func from './func'
import * as type from './is'
import * as router from './router'
import * as token from './token'

const util: any = {
  storage,
  router,
  ...token,
  ...cipher,
  ...date,
  ...func,
  ...type
}

export default util
