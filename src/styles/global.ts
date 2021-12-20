import styled, { createGlobalStyle } from 'styled-components';
import Popup from 'reactjs-popup';

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
  
  body, input, button, textarea {
    font: 16px Roboto, sans-serif;
  }
 
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  ::-ms-reveal {
    display: none;
    //margin-right: 3vw;
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

export const PopupModal = styled(Popup)`
    &-content {
        background: transparent;
        animation: anvil 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;