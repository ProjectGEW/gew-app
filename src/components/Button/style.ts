import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Search from '../../assets/search.svg';
import Data from '../../assets/data.svg';

interface buttonProps {
    tipo?: string;
}

export const Container = styled.div<buttonProps>`
  button {
    height: 5vh;

    padding: 0 3vh;
    border: 0;
    border-radius: 0.5vh;

    font-size: 2.4vh;
    color: white;
    font-weight: bold;
    background-color: #00579D;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &:hover {
      background-color: ${shade(0.09, "#00579D")}
    }
  }

  ${props => props.tipo === "PopUp" && css`
      button {
        margin-left: 13.5vw;
        margin-top: 2.8vh;
      }
  `}

  ${props => props.tipo === "PopUpDashBoard" && css`
      button {
        height: 5vh;
        background-color: #0090C5;
        font-size: 2vh;

        &:hover {
          background-color: ${shade(0.09, "#0090C5")}
        }
      }
  `}

  ${props => props.tipo === "DashboardDetails" && css`
    button {
      width: 10vw;
      background-color: #00579D;
      margin-right: 1vw;
      margin-bottom: 0.5vw;
      padding: 0vh 2vh;
      font-size: 2vh;
      font-weight: bold;
      cursor: pointer;  
      box-shadow: 0.3vh 0.3vh 0.4vh rgb(0, 0, 0, 0.3);

      &:hover {
        background-color: ${shade(0.09, "#00579D")}
      }
    }
  `}

  ${props => props.tipo === "Lupa" && css`
    button {
      padding: 2.5vh;
      margin-top: -8vh;
      margin-left: 21.8vw;

      &::after {
        content: '';
        width: 1.4vw;
        height: 3vh;

        position: absolute;
        margin-top: -1.5vh;
        margin-left: -0.7vw;

        background-image: url(${Search});
        background-position: center;
        background-size: cover;
      }
    }
  `}

  ${props => props.tipo === "Data" && css`
    button {
      padding: 2.5vh;

      margin-top: -8vh;
      margin-left: 22vw;

      &::after {
        content: '';
        width: 1.8vw;
        height: 3vh;

        position: absolute;
        margin-top: -1.5vh;
        margin-left: -0.9vw;

        background-image: url(${Data});
        background-position: center;
        background-size: cover;
      }
    }
  `}

  ${props => props.tipo === "Confirmar" && css`
    button {
      position: absolute;
      margin-top: 72.5vh;
      margin-left: -7.45vw;
    }
  `}

  ${props => props.tipo === "editProjetos" && css`
    button {
      width: 12vw;
      position: absolute;
      margin-top: 136vh;
      margin-left: 75vw;
    }
  `}

  ${props => props.tipo === "register_consultants" && css`
    button {
      width: 10vw;
      position: absolute;
      margin-top: 1vh;
      margin-left: 24.05vw;
    }
  `}

  ${props => props.tipo === "etapaProjeto" && css`
    button {
      position: absolute;
      display: block;
      margin-top: -5vh;
      margin-left: 44.5vw;
    }
  `}

  ${props => props.tipo === "etapaResponsaveis" && css`
    button {
      position: absolute;
      margin-top: 20.5vh;
      margin-left: 51.5vw;
    }
  `}

  ${props => props.tipo === "etapaDinheiro" && css`
    button {
      position: absolute;
    }
  `}

  ${props => props.tipo === "botaoEdicao" && css`
      button {
        position: absolute;
        margin-top: 180vh;
        margin-left: 50vw;
      }
  `}
`;
