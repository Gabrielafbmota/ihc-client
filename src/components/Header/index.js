import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { translate } from '../../locales'
import { Container, Title } from './styles'

function Header({ title, number }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {
            number === 1 ? <Title className="justify-content-md-center">{title}</Title> : (
              <Title className="justify-content-md-center">
                {translate('menu.tecnicas')}
                {': '}
                {title}
              </Title>
            )
          }
        </Col>
      </Row>

    </Container>
  )
}

export default Header
