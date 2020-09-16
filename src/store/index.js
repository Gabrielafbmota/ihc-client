import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMIddleware from 'redux-saga'

import createStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import persistReducers from './persistReducers'

const sagaMiddleware = createSagaMIddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger()
  middlewares.unshift(logger)
}

const store = createStore(persistReducers(rootReducer), applyMiddleware(...middlewares))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }
