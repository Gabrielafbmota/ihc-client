import React from 'react'

import Header from '../../components/Header'
import { translate } from '../../locales'
import { Container, Card, Text, Title } from './styles'

function Referencias() {
  return (
    <>
      <Header title={translate('menu.referencias')} number={1} />
      <Container>
        <Card>
          <Title>{translate('menu.diretaEIndireta')}</Title>
          <Text>{translate('pages.Referencias.rf01')}</Text>

          <Title>{translate('menu.rapidaESuja')}</Title>
          <Text>{translate('pages.Referencias.rf02')}</Text>
          <Text>{translate('pages.Referencias.rf03')}</Text>

          <Title>{translate('menu.vozAlta')}</Title>
          <Text>{translate('pages.Referencias.rf04')}</Text>
          <Text>{translate('pages.Referencias.rf05')}</Text>

        </Card>
      </Container>
    </>
  )
}

export default Referencias
