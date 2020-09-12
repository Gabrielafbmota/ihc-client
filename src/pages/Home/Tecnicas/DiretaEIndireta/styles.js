import styled from 'styled-components'
import { colors } from '../../../../themes'
import { Media, Col, Row  } from 'reactstrap'

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
export const Text = styled.p`
  font-size: 18px;
  padding: 10px 15px 0px 15px;
  color: ${colors.PRIMARY};
`
export const Img = styled(Media)`
  width: 100%;
  heigth: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 2px 12px 7px rgba(134,180,194,0.53);
  -moz-box-shadow: 0px 2px 12px 7px rgba(134,180,194,0.53);
  box-shadow: 0px 2px 12px 7px rgba(134,180,194,0.53);
`
export const ImgContent = styled(Col)``
export const ImgContainer = styled(Row)`
  padding-top: 30px;
  position: relative;
  left: -15%;
`