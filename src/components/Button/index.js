import React from 'react'

import { PressMe } from './styles'

const Header = ({ title, button }) => (
  <>
    <h1>
      <span>{title}</span>
    </h1>
    {button
      && (
        <div className="float-sm-right mb-2">
          <PressMe
            size="sm"
            style={{ width: 150 }}
            onClick={() => button.action()}
          >
            <span>{button.label}</span>
          </PressMe>
          {' '}
        </div>
      )}

  </>
)

export default Header
