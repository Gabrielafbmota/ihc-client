import { initReactI18next } from 'react-i18next'
import { useSelector } from 'react-redux'

import i18n from 'i18next'

import { selectors } from '../store/modules/config/actions'

import ptBR from './pt-BR'

export const languages = [
 'pt-BR',
]

export default function Internationalization() {
  const language = useSelector(selectors.selectLanguage)
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        
        'pt-BR': { translation: ptBR },
      },
      lng: language || navigator.language,
      fallbackLng: 'pt-BR',

      interpolation: { escapeValue: false },
    })

  return null
}

export function translate(key) {
  return i18n.t(key)
}
