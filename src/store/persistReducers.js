import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { KEY } from '~/config'

export default reducers => {
  const persistedReducer = persistReducer({
    key: KEY,
    storage,
    whitelist: ['config'],
  }, reducers)

  return persistedReducer
}
