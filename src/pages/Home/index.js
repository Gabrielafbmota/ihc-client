import React, { useState } from "react";

import { Container, Navs, ItemLink, Item } from "./styles";

import Main from "./Main";
import Direta from "./Tecnicas/Direta";
import Indireta from "./Tecnicas/Indireta";
import RapidaESuja from "./Tecnicas/RapidaESuja";
import VozAlta from "./Tecnicas/VozAlta";

function Home() {
  const [home, setHome] = useState(true);
  const [direta, setDireta] = useState(false);
  const [indireta, setIndireta] = useState(false);
  const [rapidaesuja, setRapidaESuja] = useState(false);
  const [vozalta, setVozAlta] = useState(false);
  const handleActive = (eventKey) => {
    setHome(false);
    setDireta(false);
    setIndireta(false);
    setRapidaESuja(false);
    setVozAlta(false);

    if (eventKey === "home") {
      setHome(true);
    } else if (eventKey === "flyonthewall") {
      setDireta(true);
    } else if (eventKey === "monitoramento") {
      setIndireta(true);
    } else if (eventKey === "shadowing") {
      setRapidaESuja(true);
    } else if (eventKey === "heuristica") {
      setVozAlta(true);
    } else {
      setHome(false);
      setDireta(false);
      setIndireta(false);
      setRapidaESuja(false);
      setVozAlta(false);
    }
  };
  return (
    <Container>
      <Navs justify variant="tabs" defaultActiveKey="home">
        <Item>
          <ItemLink eventKey="home" onSelect={handleActive}>
            Home
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="flyonthewall" onSelect={handleActive}>
            Mosca na parede
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="monitoramento" onSelect={handleActive}>
            Monitoramento online
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="shadowing" onSelect={handleActive}>
            Sombra
          </ItemLink>
        </Item>
        <Item>
          <ItemLink eventKey="heuristica" onSelect={handleActive}>
            Avaliação heurística{" "}
          </ItemLink>
        </Item>
      </Navs>
      {home === true ? <Main /> : null}
      {direta === true ? <Direta /> : null}
      {indireta === true ? <Indireta /> : null}
      {rapidaesuja === true ? <RapidaESuja /> : null}
      {vozalta === true ? <VozAlta /> : null}
    </Container>
  );
}

export default Home;
