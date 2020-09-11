import React from 'react'

import Header from '../../../../components/Header'
import { translate } from '../../../../locales'
import { Container } from './styles'

function RapidaESuja() {
  return (
    <Container>
      <Header title={translate('menu.rapidaESuja')} />
    </Container>

  )
}

export default RapidaESuja
