import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    -webkit-font-smoothing: antialiased;
    background: rgba(196, 196, 196, 0.4);
    cursor: default;
  }

  body::-webkit-scrollbar {
    display: none;
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
 
  button {
    cursor: pointer;
  }

  #iconNews, #iconRef, #iconDel {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;