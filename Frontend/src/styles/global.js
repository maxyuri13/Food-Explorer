import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Poppins', sans-serif; */
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  a:hover {
    filter: brightness(.9);
  }

  ::-webkit-scrollbar {
    width: .8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
  }
`