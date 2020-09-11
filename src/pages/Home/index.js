import React, { useState } from 'react'

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
      <Navs justify variant="tabs" defaultActiveKey="home">
        <Item>
          <ItemLink eventKey="home" onSelect={handleActive}>
            Home
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="direta" onSelect={handleActive}>
            Observação Direta
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="indireta" onSelect={handleActive}>
            Observação Indireta
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="rapidaEsuja" onSelect={handleActive}>
            Rápida e Suja
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="emVozAlta" onSelect={handleActive}>
            Em Voz Alta
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
