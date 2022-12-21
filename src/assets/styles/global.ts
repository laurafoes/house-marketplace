import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    background-color: ${props => props.theme.colors.primaryBg};
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.small};
  }

  h1, h2 {
    font-family: 'DM Serif Display', serif;
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.large};
  }

  h2, h3 {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`

export default GlobalStyles
