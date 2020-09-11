import React from 'react'

import Header from '../../../../components/Header'
import { translate } from '../../../../locales'
import { Container } from './styles'

function Direta() {
  return (
    <Container>
      <Header title={translate('menu.direta')} />
    </Container>

  )
}

export default Direta
