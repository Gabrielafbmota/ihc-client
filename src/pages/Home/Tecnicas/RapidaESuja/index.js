import React from 'react'

import Header from '../../../../components/Header'
import { translate } from '../../../../locales'
import { Container, Card, Text, List, ListText } from './styles'
function RapidaESuja() {
  return (
   <>
      <Header title={translate('menu.rapidaESuja')} />

      <Container>
        <Card>
          <Text>{translate('pages.Techs.rapidaesuja.p1')}</Text>
          <Text>{translate('pages.Techs.rapidaesuja.p2')}</Text>          
          <Text>{translate('pages.Techs.rapidaesuja.p3')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p4')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p5')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p6')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p7')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p8')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p9')}</Text>        
          <List><ListText>{translate('pages.Techs.rapidaesuja.p10')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p11')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p12')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p13')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p14')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p15')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p16')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p17')}</Text>
          <List><ListText>{translate('pages.Techs.rapidaesuja.p18')}</ListText></List>
          <Text>{translate('pages.Techs.rapidaesuja.p19')}</Text>
          <Text>{translate('pages.Techs.rapidaesuja.p20')}</Text>
        </Card>
      </Container>


   </>
  )
}

export default RapidaESuja
