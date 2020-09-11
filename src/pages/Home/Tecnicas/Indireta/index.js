import React from 'react'

import Header from '../../../../components/Header'
import { translate } from '../../../../locales'
import { Container } from './styles'

function Indireta() {
  return (
    <Container>
      <Header title={translate('menu.indireta')} />
    </Container>

  )
}

export default Indireta
