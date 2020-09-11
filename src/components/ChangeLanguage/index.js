import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { translate, languages } from '../../locales'
import { selectors, setLanguage } from '../../store/modules/config/actions'
import { Select } from './styled'

export default function ChangeLanguage() {
  const dispatch = useDispatch()
  const selected = useSelector(selectors.selectLanguage)

  const handleSelectLanguage = language => {
    dispatch(setLanguage({ language }))
    window.location.reload()
  }

  return (
    <>
      <Select
        className="btn btn-info"
        value={selected}
        onChange={e => handleSelectLanguage(e.target.value)}
      >
        {languages.map(l => (
          <option key={`lang${l}`} value={l}>
            {translate(`languages.${l}`)}
          </option>
        ))}
      </Select>
    </>
  )
}
