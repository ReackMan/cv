import {createGlobalStyle} from "styled-components";

// export const GlobalStyle = createGlobalStyle`
  
  // *,
  // *::after,
  // *::before {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }
  //
  //
  // body {
  //   background: ${({theme}) => theme.body};
  //
  //   color: ${({theme}) => theme.text};
  //
  //   transition: all 0.50s linear;
  //
  //   margin: 0;
  //   font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  //   sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  // }

  
// `

export const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    background: ${({theme}) => theme.body};

    color: ${({theme}) => theme.text};

    transition: all 0.50s linear;

  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
  
  section {
    margin-bottom: 200px;
    padding: 0 15px;
  }
  
`;