import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  listDisplay: false,
  stateMenu: 1,
  language: null,
}

export default createReducer(INITIAL_STATE, {
  [actionsTypes.TOGGLE_MENU]: state => {
    let value = 0

    if (state.stateMenu < 2) {
      value = state.stateMenu + 1
    }

    return { ...state, stateMenu: value }
  },
  [actionsTypes.TOGGLE_DISPLAY]: state => ({ ...state, listDisplay: !state.listDisplay }),
  [actionsTypes.SELECT_LANGUAGE]: (state = INITIAL_STATE, { payload }) => ({ ...state, language: payload.language }),
})
