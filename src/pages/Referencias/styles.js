import styled from 'styled-components'
import { colors } from '../../themes'

export const Container = styled.div`
  padding-left: 300px;
`
export const Card = styled.div`
  padding: 10px 15px 0px 15px;  
  background: ${colors.QUINARY};
  // border: 1px solid ${colors.QUARTENARY};
  border-radius: 12px; 
  width: 70%;
  -webkit-box-shadow: 0px 2px 12px 7px rgba(134,180,194,0.53);
  -moz-box-shadow: 0px 2px 12px 7px rgba(134,180,194,0.53);
  box-shadow: 0px 2px 12px 7px rgba(134,180,194,0.53);

`
export const Title = styled.h3`
  padding: 10px 15px 0px 15px;
  color: ${colors.SECONDARY};
`


export const Text = styled.a`
  font-size: 18px;
  padding: 10px 15px 0px 15px;
  color: ${colors.PRIMARY};
  text-align: left;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration:underline;
    cursor: pointer;
  }
`
