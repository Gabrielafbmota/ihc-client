import { Nav } from 'react-bootstrap'

import styled from 'styled-components'

import { colors } from '../../themes'

export const Container = styled.div``
export const Navs = styled(Nav)``
export const Item = styled(Nav.Item)``
export const ItemLink = styled(Nav.Link)`
  color: ${colors.PRIMARY};
  font-weight: bold;
  font-size: 18px;
`
