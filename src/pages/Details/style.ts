import styled, { css } from "styled-components";
import { shade } from 'polished';

import Ata from '../../assets/ata.svg';
import Dashboard from '../../assets/dashboardIcon.svg';

interface GraphBarProps {
  valor: number;
}

export const Container = styled.div`
  position: absolute;
  top: 20vh;
  left: 12vw;
  width: 78vw;
  height: 200vh;
`;

export const ContainerDetails = styled.div`
  width: 100%;
  height: 200vh;
  margin-bottom: 8vh;
  margin-top: -6vh;
  padding: 6vh;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: rgb(194, 194, 194, 0.5);
    width: 0.4vw;    
  }
      
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.8vh;

  span {
    font-weight: bold;
    font-size: 3vh;
    color: #00579D;     

    &::before {
      content: '';
      width: 148vh;
      height: 0.1vh;
      background-color: #ccc;
      position: absolute;
      margin-top: -4vh;
      margin-left: 0.3vw;
    }
  }
`;

export const Inputs = styled.div`
  width: 21%;
  margin-top: -2vh;
  display: flex;
  flex-direction: column;

  input[type='file'] { display: none; }
          
  label {
    width: 10vw;
    height: 5vh;
    background-color: #0090C5;
    display: flex;
    align-items: center;
    border-radius: 0.5vh;
    color: #fff;
    margin-right: 3vw;
    margin-bottom: 2vw;
    padding: 1vh;
    padding-left: 4vh;
    font-size: 2vh;
    font-weight: bold;
    cursor: pointer;  
    box-shadow: 0.3vh 0.3vh 0.4vh rgb(0, 0, 0, 0.3);

    &:hover {
      background-color: ${shade(0.09, "#0090C5")}
    }

    &:nth-child(3) {
      &::before {
        background-image: url(${Dashboard});
      }
    }

    &::before {
      content: '';
      width: 1.1vw;
      height: 2.3vh;
      position: absolute;
      margin-top: -0.2vh;
      margin-left: -3.2vh;

      background-image: url(${Ata});
      background-size: cover;
      background-position: center;
    }
  }
`;

export const ContainerDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2vh 3vh 0vh 0;

  text-align: justify;

  h1 {
    font-size: 1em;
    font-weight: bold;
    color: #111;
  }

  h2 {
    font-size: 1em;
    font-weight: normal;
    margin-top: 1.4vh;
  }
`;

export const ContainerInfos = styled.div`
  width: 70vw;
  margin-bottom: 3vh;
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    &:first-child {
      margin-left: 7vw;
    }

    &:last-child {
      margin-right: 7vw;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  }

  li {
    display: flex;
    flex-direction: row;
    //list-decoration: none;

      h1 { font-size: 1em; color: #111; margin-right: 1vh; font-weight: bold; }

      h2 { font-size: 1em; color: #00579D; font-weight: 100; }
  }
`;

export const ContainerSection = styled.div`
  width: 100%;
  float: left;
  margin: 0 0 -1vh 0;

  h1 {
    font-size: 1em;
    color: #229FC6;
  }
`;

export const ContainerTittles = styled.div`
  display: flex;
  flex-direction: row;
  width: 76vw;
  margin-top: 2vh;
  justify-content: space-between;
  color: #111;
`;

export const Tittle = styled.div`
  width: 50%;
  font-size: 4vh;
  font-weight: bold;
`;

export const Box = styled.div`
  width: 32%;
  height: 14vh;
  text-align: center;
  padding-top: 4vh;
  margin-bottom: 5vh;

  h1 {
    font-size: 1em;
    margin-bottom: 1.4vh;
  }

  h2 {
    font-size: 1em;
    color: #023A67;
  }
`;

export const ContainerAppointments = styled.div`
  width: 72vw;
  height: 22vh;
  margin-top: 3vh;
  border-radius: 0.8vh 0.8vh 0 0;
  border-left: 0.1vh solid #ccc;
  border-bottom: 0.1vh solid #ccc;
  background-color: rgba(226, 226, 226, 0.2);
  overflow: hidden;

  .tableHeader {
    top: 0;
    left: 0;
    width: 100%;
    height: 5vh;
    background-color: #00579d;
    border-radius: 0.8vh 0.8vh 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.4vh;
    padding-right: 4vh;

    h2 {
      width: 25%;
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 2vh;
      font-weight: bold;
    }
  }

  .scroller {
    width: 100%;
    height: 17vh;
    overflow-y: auto;
  }

  .sc1::-webkit-scrollbar {
    width: 1vh;
    height: 1vh;
  }
  .sc1::-webkit-scrollbar-track {
    background-color: rgb(196, 196, 196, 0.5);
    border-radius: 10px;
  }

  .sc1::-webkit-scrollbar-thumb {
    background-color: rgb(196, 196, 196);
    border-radius: 10px;
  }

  ul {
    width: 100%;
    height: 17vh;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1.4vh;
      padding-right: 4vh;
      border-bottom: 0.1vh solid #c4c4c4;

      &:hover {
        background-color: rgba(226, 226, 226, 0.4);
      }

      h2 {
        width: 25%;
        font-size: 1.8vh;
        font-weight: 100;
        color: #023A67;
        display: flex;
        justify-content: center;

        &:first-child {
          margin-right: 6vh;
          font-weight: bold;
        }
      }

      h3 {
        width: 25%;
        font-size: 1.9vh;
        color: #023A67;
        display: flex;
        justify-content: center;
      }
    }

    .row {
      width: 34.6vw;
      height: 0.2vh;
      margin-left: 1vh;
      background-color: #c4c4c4;
      position: relative;
    }
  }
`;

export const ContainerGraphs = styled.div`
  width: 72vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Graphic = styled.div`
  width: 49%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 4vh;

  &:nth-child(1) {
    border-right: 0.1vh solid #ccc;
  }

  h1 {
    width: 14vw;
    font-size: 2.2vh;
    text-align: center;
    color: #111;
  }
`;

export const Graphic2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 38vh; 
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1vh solid #ccc;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 1vh;
    height: 10vh;

    h1 {
      font-size: 3.6vh;
      color: #00579D;
      margin-left: 5vw;
    }
  }
`;

export const Filtros = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    width: 40%;
    
    &:last-child {
      margin-right: 2%;
    }

    label {
      color: #575757;
      font-size: 2.2vh;
      margin-right: 1vw;
    }

    select {
      width: 9vw;

      font-size: 1.8vh;
      padding: 0.5vh;

      color: #575757;
      border: 0.2vh solid #c4c4c4;
    }
  }
`;

export const Bottom = styled.div`
  width: 62vw;
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;

export const Graph = styled.div`
  width: 62vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
`;

export const Left = styled.div`
  width: 8vw;
  height: 30vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  p {
    font-size: 2.2vh;
    text-align: right;
    margin-right: 1vw;

    &::after {
      content: '';
      width: 113.7vh;
      height: 0.1vh;
      background-color: #ccc;
      position: absolute;
      margin-top: 1vh;
      margin-left: 0.3vw;
    }
  }
`;

export const Right = styled.div`
  width: 54vw;
  display: flex;
  justify-content: center;
  align-items: center;   
`;

export const Square = styled.div`
  width: 54vw;
  height: 30vh;

  border: 0.1vh solid #ccc;
  border-top: 0;
  border-bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;   
`;

export const Pack = styled.div`
  width: 14vw;
  height: 30vh;

  display: flex;
  justify-content: space-between;
  align-items: center;   

  &:nth-child(1) {
    margin-left: 1.5vw;
  }

  &:nth-child(3) {
    margin-right: 1.5vw;
  }
`;

export const Bar = styled.div<GraphBarProps>`
  width: 3.2vw;

  background-color: #0075B1;

  &:hover {
    background-color: ${shade(0.1, '#0075B1')}
  }

  display: flex;
  justify-content: center;
  align-items: center;   
  z-index: 9;

  height: 0vh;

  ${props => props.valor >= 1 && props.valor <= 20000  && css `
    height: 9vh;
    margin-top: 18vh;
  `}

  ${props => props.valor > 20000 && props.valor <= 60000  && css `
    height: 18.2vh;
    margin-top: 8.8vh;
  `}

  ${props => props.valor > 60000 && css `
    height: 27.27vh;
    margin-top: -0.3vh;
  `}
`;

export const Footer = styled.div`
  width: 54vw;
  height: 5vh;
  margin-left: 8vw;

  display: flex;
  justify-content: space-between;
  align-items: center;   

  p {
    &::before {
      content: '';
      width: 0.1vh;
      height: 30.5vh;
      background-color: #ccc;
      position: absolute;
      margin-top: -31.3vh;
      margin-left: 2.5vw;
    }

    color: #333;
    font-weight: bold;
    font-size: 2.6vh;

    &:nth-child(1) {
      margin-left: 6.05vw;
    }

    &:nth-child(2) {
      &::before {
        margin-left: 2.65vw;
      }
    }

    &:nth-child(3) {
      margin-right: 5.5vw;

      &::before {
        margin-left: 2.85vw;
      }
    }
  }
`;

