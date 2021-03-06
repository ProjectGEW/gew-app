import { shade } from "polished";
import Popup from 'reactjs-popup';
import styled, { css } from "styled-components";

import Close from '../../../assets/close.svg';

interface TableProps {
    status: boolean;
}

export const Container = styled.div`
  position: absolute;
  top: 14vh;
  left: 12vw;
  width: 78vw;
  height: 80vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.8vh;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 12vh;

  padding-top: 1vh;

  display: flex;
  flex-direction: column;
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

export const ContainerTitle = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #00579D;
    font-size: 3vh;
    margin-left: 1.2vw;

    display: flex;
    align-items: center;
  }

  span {
    width: 10vw;
    height: 2.5vh;
    margin-right: 1.5vw;
    background-image: linear-gradient(to left, 
      #64C3D5 15%, #fff 10%, #fff 19.3%,
      #0091BD 19.3%, #0091BD 33%, #fff 30%, #fff 37%,
      #005DA5 36%, #005DA5 50%, #fff 49%, #fff 54%,
      #00579D 54%, #00579D 67%, #fff 65.1%, #fff 71%,
      #0075B1 71%, #0075B1 84%, #fff 80%, #fff 88%,
      #6AACDA 10%, #6AACDA 100%);
  }
`;

export const ContainerFiltro = styled.div`
  width: 100%;
  height: 16vh;

  border-bottom: 0.2vh solid #ccc;

  display: flex;
  place-content: flex-start space-between;
  align-items: center;

  h1 {
    color: #00579D;
    font-size: 3vh;
    margin-left: 1.2vw;
  }

  div {
    display: flex;
    align-items: center;

    &:nth-child(3) {
      form {
        button {
          border: 0;
          padding: 0.8vh;
          font-size: 2vh;
          margin-left: 0.3vw;
          border-radius: 0.8vh;
          background-color: rgba(212, 212, 212, 0.3);
          color: #575757;

          &:nth-child(1) {
            background-color: rgba(212, 212, 212, 0.7);
          }

          &:hover {
            cursor: pointer;
            background-color: rgba(212, 212, 212, 0.5);
          }
        }
      }
    }
    
    label {
      font-size: 2.6vh;
      color: #00579D;

      margin-right: 0.5vw;
    }

    select {
      width: 12vw;
      padding: 0.5vh;

      color: #575757;
      border: 0.2vh solid #c4c4c4;
    }

    input {
      width: 12vw;
      padding: 0.5vh;
      padding-left: 1vh;

      border: 0.2vh solid #ccc;

      color: #00579D;

      ::placeholder {
        font-size: 1.8vh;
        color: rgb(0, 0, 0, 0.4);
      }
    }

    &:last-child {
      margin-right: 1.4vw;
    }

    #consultor {
      width: 20vw;
    }
  }
`;

export const Table = styled.div`
  width: 70vw;
  margin-top: 2vh;
  border-spacing: 0;
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  span {
    padding: 0.4vh 0 0.4vh 1vw;
    font-size: 2.1vh;
    color: #444;
    
    display: flex;
    align-items: center;

    select {
      width: auto;
      padding: 0.5vh;
      margin-left: -0.25vw;

      background-color: #fff;

      font-size: 2vh;
      color: #575757;
      border: 0.1vh solid #c4c4c4;
      cursor: pointer;
    }

    button {
      padding: 0.8vh;
      border: 0;
      border-radius: 0.5vh;
      margin-left: 0.8vw;
      font-size: 2vh;
      color: white;
      font-weight: bold;
      background-color: #00579D;

      &:hover {
        background-color: ${shade(0.09, "#00579D")}
      }
    }

    #atrelado {
      opacity: 0.6;
      cursor: default;

      &:hover {
        background-color: #00579D;
      }
    }

    &:first-child {
      &:before {
        content: '|';
        color: #2bd42b;
        font-size: 3.4vh;
        padding-top: -1vh;
        padding-bottom: 1vh;
        margin: 0 1vw 0 -1vw;
        background: #2bd42b;
        border-radius: 0 0.4vh 0.4vh 0;
      }
    }

    &:nth-child(2) {
      color: #2bd42b;
      font-weight: bold;
    }
  }

  #header {
    width: 70vw;
    height: 5.4vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #005DA5;
    font-weight: bold;
    font-size: 2.4vh;
    border-radius: 0.8vh 0.8vh 0 0;

    color: #fff;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cadastro {
      width: 8vw;
      justify-content: left;
    }

    .status {
      justify-content: left;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cadastro {
    width: 8vw;
    justify-content: left;
  }

  .status {
    width: 4vw;
  }

  .nome {
    width: 20vw;
  }

  .fornecedor {
    width: 12vw;
  }

  .projetos {
    width: 11vw;
  }

  .atribuicao {
    width: 10vw;
  }

  .perfil {
    //width: 4vw;
  }
`;

export const TableDimensions = styled.div`
  width: 90%;
  margin: 1vh 0 0 5%;
  height: 64vh;
  overflow: hidden;
`;

export const TableScroll = styled.div`
  width: 70vw;
  height: 56vh;
  
  border: 0.1vh solid rgb(196, 196, 196, 0.5);   

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: rgb(196, 196, 196, 0.5);
    width: 0.5vw;
  }
      
  ::-webkit-scrollbar-thumb {
    background-color: rgb(196, 196, 196); 
    border-radius: 1vh;
  }
`;

export const LinhaConsultor = styled.div<TableProps>`
  display: flex;
  align-items: center;
  border-bottom: 0.1vh solid #e9e9e9;

  .desativado {
    background-color: #00579D;
    opacity: 0.5;
  }

  &:nth-child(2n + 1) {
    background-color: rgb(0, 0, 0, 0.025);
  } 
  
  ${props => props.status === true && css`
    &:hover {
      background-color: #f6fff5;
    }

    span {
      &:first-child {
        &:before {
          color: #2bd42b;
          background-color: #2bd42b;
        }
      }

      &:nth-child(2) {
        color: #2bd42b;
      }
    }
  `}  
  
  ${props => props.status === false && css`    
    &:hover {
      background-color: #fff6f6;
    }

    span {
      &:first-child {
        &:before {
          color: #e21d1d;
          background-color: #e21d1d;
        }
      }

      &:nth-child(2) {
        color: #e21d1d;
      }
    }
  `}  
`;

export const PopupPerfilConsultor = styled(Popup)`
  &-content {
    background: transparent;
    animation: anvil 0.2s;
    margin-left: 0.2vw;
  }

  .popup-arrow {
    color: #c2e4ff;
    stroke-width: 1px;
    stroke: rgba(0, 0, 0, 0.16);
    stroke-dasharray: 30px;
    stroke-dashoffset: -54px;
  }

  @keyframes anvil {
    0% {
      opacity: 0;
      // box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      opacity: 1;
      //box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
`;

export const Msg = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 20vh;

  svg {
    color: #bfbfbf;
    opacity: 1;
    animation: rodar 2s infinite;
  }

  @keyframes rodar {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }    
  
  h1 {
    font-size: 4vh;
    color: #bfbfbf;
    opacity: 1;
  }
`;

export const ContainerTooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
  border-radius: 0.8vh;
  overflow: hidden;
`;

export const PopUpTooltip = styled.div`
  width: 9vw;
  max-height: 40vh;
  
  background: #c2e4ff;
  border-radius: 0.8vh;

  font-size: 2.5vh;
  font-weight: bold;
  color: #00579D;

  overflow: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: rgb(196, 196, 196, 0.5);
    width: 0.5vw;
  }
      
  ::-webkit-scrollbar-thumb {
    background-color: rgb(196, 196, 196); 
    border-radius: 1vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;

  div {
    width: 100%;
    padding: 1vh;
    border-bottom: 0.1vh solid #c3c3c3;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    h1 {
      font-size: 2.4vh;
    }

    button {
      border: 0;
      background-color: transparent;
      padding: 0vh;
    }

    svg {          
      width: 1.2em;
      height: 1.2em;
      color: #e21d1d;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }

      &:active {
        opacity: 0.7;
      }
    }

    &:hover {
      background-color: #d2ebff;
    }
  }
`;

export const ContainerPopupHoras = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
  border-radius: 0.8vh;
  overflow: hidden;
`;

export const PopupAdicionarHoras = styled.div`
  width: 42vw;
  height: 20vh;
  background: #fff;
  border-radius: 0.8vh;
  //overflow: hidden;

  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 

  .projeto {       
    margin-top: 0vh;         
    margin-left: 1vw;
    margin-right: 1vw;

    font-size: 2.5vh;
    color: #00579D;

    border-bottom: 0.1vh solid #ccc;

    &:hover {
      background-color: rgba(220, 220, 220, 0.25);
    }

    p {
      &:nth-child(1) {
        width: 17.5vw;
        border-right: 0.1vh solid #c4c4c4;
        color: #484848;
      }
    }

    font-weight: bold;
    padding: 1.4vh;
    padding-top: 2vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ScrollPopupHoras = styled.div`
  width: 42vw;
  height: 20vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  overflow-x: hidden;

  h1 {
    color: #00579D;
    font-size: 2.6vh;
  }

  #disponivel {
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 0.4vh;

    padding: 1vh;
    margin-right: 5%;

    &:before {
      content: '';
      width: 0.1vw;
      height: 10vh;
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      margin-right: 14vw;
    }

    h1, button {
      color: #00579D;
      font-size: 2.6vh;
      border: 0;
      background-color: transparent;
      cursor: default;
    }

    button {
      color: #00579D;
      font-size: 3.2vh;
      font-weight: 100;
      margin-right: 1vw;
    }
  }

  div {
    width: 65%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      flex-direction: row;
    }

    input {
      height: 5vh;
      margin-top: 1vh;
      margin-bottom: 1vh;
      margin-right: 0.5vw;

      text-align: center;

      font-size: 2.4vh;

      border-radius: 0.4vh;
      border: 0px;
      padding: 1vh;

      background-color: #e9e9e9;
      box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
      color: #424242;

      &::placeholder {
        color: #8f8f8f;
      }
    }

    button {
      padding: 0.8vh;
      border: 0;
      border-radius: 0.5vh;
      margin-left: 0.5vw;
      font-size: 2.6vh;
      color: white;
      font-weight: bold;
      background-color: #00579D;

      &:hover {
        background-color: ${shade(0.09, "#00579D")}
      }
    }
  }
`;

export const TitlePopupHoras = styled.div`
  width: 42vw;
  padding: 1vh;
  background-color: #00579D;

  display: flex;
  flex-direction: row;

  h1 {
    color: #fff;
    font-size: 3vh;
    margin-left: 0.5vw;
  }

  span {
    background-image: url(${Close});
    border: 0;
    background-color: transparent;
    width: 4vh;
    height: 4vh;
    margin-top: -0.4vh;
    margin-left: 39vw;
    position: absolute;
    background-size: cover;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }
`;