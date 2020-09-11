import { all, fork } from 'redux-saga/effects'

import config from './config/sagas'


export default function* rootSaga() {
  return yield all([
    fork(config),

  ])
}
