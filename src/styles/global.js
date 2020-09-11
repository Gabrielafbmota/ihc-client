import { createGlobalStyle } from 'styled-components'

// import 'react-circular-progressbar/dist/styles.css'
import { colors } from '../themes'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: ${colors.TERNARY};
  -webkit-font-smoothing: antialiased;
}
`
