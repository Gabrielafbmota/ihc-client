import React, { useState } from 'react'


import { translate } from '../../locales'
import Main from './Main'
import { Container, Navs, ItemLink, Item } from './styles'
import DiretaEIndireta from './Tecnicas/DiretaEIndireta'

import RapidaESuja from './Tecnicas/RapidaESuja'
import VozAlta from './Tecnicas/VozAlta'

function Home() {
  const [home, setHome] = useState(true)
  const [direta, setDireta] = useState(false)

  const [rapidaesuja, setRapidaESuja] = useState(false)
  const [vozalta, setVozAlta] = useState(false)
  const handleActive = eventKey => {
    setHome(false)
    setDireta(false)
    setRapidaESuja(false)
    setVozAlta(false)

    if (eventKey === 'home') {
      setHome(true)
    } else if (eventKey === 'direta') {
      setDireta(true)
    } else if (eventKey === 'rapidaEsuja') {
      setRapidaESuja(true)
    } else if (eventKey === 'emVozAlta') {
      setVozAlta(true)
    } else {
      setHome(false)
      setDireta(false)
      setRapidaESuja(false)
      setVozAlta(false)
    }
  }
  return (
    <Container>
      <Navs justify variant="tabs" defaultActiveKey="home">
        <Item>
          <ItemLink eventKey="home" onSelect={handleActive}>
            {translate('menu.home')}
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="direta" onSelect={handleActive}>
            {translate('menu.diretaEIndireta')}
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="rapidaEsuja" onSelect={handleActive}>
            {translate('menu.rapidaESuja')}
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="emVozAlta" onSelect={handleActive}>
            {translate('menu.vozAlta')}
          </ItemLink>
        </Item>
      </Navs>
      {home === true ? <Main /> : null}
      {direta === true ? <DiretaEIndireta /> : null}

      {rapidaesuja === true ? <RapidaESuja /> : null}
      {vozalta === true ? <VozAlta /> : null}
    </Container>
  )
}

export default Home
