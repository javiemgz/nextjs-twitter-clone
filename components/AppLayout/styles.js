import css from 'styled-jsx/css'
import { fonts, colors, breakpoints } from '../../styles/theme'
import { getOpacedColor } from '../../styles/util'

const backgroundColor = getOpacedColor(colors.primary, 0.4)

export default css`
  div {
    display:grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow 0 10px 25px rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}){
    main{
      height: 90vh;
      width: 450px;
    }
  }
`

export  const globalStyles = css.global`
  html,
  body {
    background-image:
      radial-gradient(${backgroundColor} 1px, #f3f3f3 1px),
      radial-gradient(${backgroundColor} 1px, #f3f3f3 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`