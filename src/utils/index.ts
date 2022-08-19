import storage from './storage'
import * as cipher from './cipher'
import * as date from './date'
import * as func from './func'
import * as type from './is'

const util: any = {
  storage,
  ...cipher,
  ...date,
  ...func,
  ...type
}

export default util
