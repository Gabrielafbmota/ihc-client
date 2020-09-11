import React from 'react'

import Header from '../../../../components/Header'
import { translate } from '../../../../locales'
import { Container } from './styles'

function VozAlta() {
  return (
    <Container>
      <Header title={translate('menu.vozAlta')} />
    </Container>

  )
}

export default VozAlta
