import styled from 'styled-components'
import { colors } from '../../../../themes'
import { Media } from 'reactstrap'

export const Container = styled.div`
  padding-left: 300px;
`
export const Card = styled.div`
  padding: 10px 15px 0px 15px;  
  background: ${colors.QUINARY};
  border: 1px solid ${colors.QUARTENARY};
  border-radius: 12px; 
  width: 70%;

`
export const Text = styled.p`
  font-size: 18px;
  padding: 10px 15px 0px 15px;
  color: ${colors.PRIMARY};
`
export const Img = styled(Media)`
  width: 70%;
  heigth: 70%;
  border-radius: 10px;
`