export const actionsTypes = { SELECT_LANGUAGE: '@config/SELECT_LANGUAGE' }

const baseSelector = state => state.config

export function setLanguage({ language }) {
  return { type: actionsTypes.SELECT_LANGUAGE, payload: { language } }
}

export const selectors = { selectLanguage: state => baseSelector(state).language }
