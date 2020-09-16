import React from 'react'

import {
  Container,
  Header,
  Body,
  Footer,
  Button,
} from './styles'

export default function Modal({ title, children, buttons, isOpen, toggle }) {
  return (
    <Container size="lg" isOpen={isOpen}>
      <Header toggle={toggle}>{title}</Header>
      <Body className="d-flex justify-content-center mb-2">
        {children}
      </Body>

      {buttons
        && (
        <Footer>
          {buttons.map(button => (
            <Button
              key={`bt-${button.label}`}
              color={button.color || 'primary'}
              outline={button.outline || false}
              onClick={button.action}
            >
              {button.label}
            </Button>
          ))}
        </Footer>
        )}
    </Container>
  )
}
