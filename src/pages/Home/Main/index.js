import React from 'react'

import Header from '../../../components/Header'
import { translate } from '../../../locales'
import { Container, Card, Text, List, ListText } from './styles'

function Main() {
  return (
    <>
      <Header title={translate('menu.tecnicas')} number={1} />
      <Container>
        <Card>

          <Text>
            Nesse estudo, apresentaremos a Técnica de Consulta ao Usuário: Observação.
            Serão abordados aqui:
          </Text>
          <List>
            <ListText>{translate('menu.diretaEIndireta')}</ListText>
            <ListText>{translate('menu.vozAlta')}</ListText>
            <ListText>{translate('menu.rapidaESuja')}</ListText>
          </List>
          <Text>Basta clicar nas abas correspondentes para saber mais sobre cada uma!</Text>
        </Card>
      </Container>
    </>

  )
}

export default Main
