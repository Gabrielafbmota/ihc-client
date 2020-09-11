import React from 'react'

import Header from '../../../../components/Header'
import { translate } from '../../../../locales'
import { Container, Card, Text } from './styles'

function DiretaEIndireta() {
  return (
    <>
      <Header title={translate('menu.diretaEIndireta')} />
      <Container>
        <Card>
          <Text>{translate('pages.Techs.diretaindireta.p1')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p2')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p3')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p4')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p5')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p6')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p7')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p8')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p9')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p10')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p11')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p12')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p13')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p14')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p15')}</Text>
        </Card>
      </Container>
    </>

  )
}

export default DiretaEIndireta
