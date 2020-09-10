import React from 'react';

import { Container, Title } from './styles';
import { Row, Col } from 'react-bootstrap'
function Header({ title, number }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {
            number === 1 ? <Title className="justify-content-md-center">{title}</Title> : <Title className="justify-content-md-center">Técnica de Observação do Usuário: {title}</Title>
          }
        </Col>    
      </Row>
     
    </Container>
    );
}

export default Header;