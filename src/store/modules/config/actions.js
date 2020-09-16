export const actionsTypes = {
  TOGGLE_DISPLAY: '@config/TOGGLE_DISPLAY',
  TOGGLE_MENU: '@config/TOGGLE_MENU',
  SELECT_LANGUAGE: '@config/SELECT_LANGUAGE',
}

const baseSelector = state => state.config

export function toggleDisplay() {
  return { type: actionsTypes.TOGGLE_DISPLAY }
}

export function toggleMenu() {
  return { type: actionsTypes.TOGGLE_MENU }
}

export function setLanguage({ language }) {
  return { type: actionsTypes.SELECT_LANGUAGE, payload: { language } }
}

export const selectors = {
  selectMenuState: state => baseSelector(state).stateMenu,
  selectDisplay: state => baseSelector(state).listDisplay,
  selectLanguage: state => baseSelector(state).language,
}
