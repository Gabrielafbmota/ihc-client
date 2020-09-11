import React from 'react'

import Header from '../../../components/Header'
import { translate } from '../../../locales'
import { Container } from './styles'

function Main() {
  return (
    <Container>
      <Header title={translate('menu.tecnicas')} number={1} />
    </Container>

  )
}

export default Main
