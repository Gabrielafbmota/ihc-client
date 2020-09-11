import React, { useState } from 'react'

import ChangeLanguage from '../../components/ChangeLanguage'
import { translate } from '../../locales'
import Main from './Main'
import { Container, Navs, ItemLink, Item } from './styles'
import Direta from './Tecnicas/Direta'
import Indireta from './Tecnicas/Indireta'
import RapidaESuja from './Tecnicas/RapidaESuja'
import VozAlta from './Tecnicas/VozAlta'

function Home() {
  const [home, setHome] = useState(true)
  const [direta, setDireta] = useState(false)
  const [indireta, setIndireta] = useState(false)
  const [rapidaesuja, setRapidaESuja] = useState(false)
  const [vozalta, setVozAlta] = useState(false)
  const handleActive = eventKey => {
    setHome(false)
    setDireta(false)
    setIndireta(false)
    setRapidaESuja(false)
    setVozAlta(false)

    if (eventKey === 'home') {
      setHome(true)
    } else if (eventKey === 'direta') {
      setDireta(true)
    } else if (eventKey === 'indireta') {
      setIndireta(true)
    } else if (eventKey === 'rapidaEsuja') {
      setRapidaESuja(true)
    } else if (eventKey === 'emVozAlta') {
      setVozAlta(true)
    } else {
      setHome(false)
      setDireta(false)
      setIndireta(false)
      setRapidaESuja(false)
      setVozAlta(false)
    }
  }
  return (
    <Container>
      <ChangeLanguage />
      <Navs justify variant="tabs" defaultActiveKey="home">
        <Item>
          <ItemLink eventKey="home" onSelect={handleActive}>
            {translate('menu.home')}
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="direta" onSelect={handleActive}>
            {translate('menu.direta')}
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="indireta" onSelect={handleActive}>
            {translate('menu.indireta')}
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
      {direta === true ? <Direta /> : null}
      {indireta === true ? <Indireta /> : null}
      {rapidaesuja === true ? <RapidaESuja /> : null}
      {vozalta === true ? <VozAlta /> : null}
    </Container>
  )
}

export default Home
