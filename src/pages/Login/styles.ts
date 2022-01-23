import styled from 'styled-components';

import { shade } from 'polished';

import Popup from 'reactjs-popup';

import wegImage from '../../assets/weg_banner_img.jpg';
import wegLogo from '../../assets/weg.svg';
// import email from '../../assets/email.svg';
// import lock from '../../assets/lock.svg';

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 5vh;

  /* &:nth-child(1) {
    &::after {
      content: '';
      width: 3vh;
      height: 3vh;
      background-image: url({email});
      background-size: cover;
      position: absolute;
      margin: 1vh 0 0 20vw;
      color: #005DA5;
    }
  }

  &:nth-child(2) {
    &::after {
      content: '';
      width: 3vh;
      height: 3vh;
      background-image: url({lock});
      background-size: cover;
      position: absolute;
      margin: 1vh 0 0 20vw;
      color: #005DA5;
    }
  } */

  label {
    margin-top: 0vh;
    margin-left: 0vh;
    position: absolute;
    cursor: text;
    font-size: 2.4vh;
    padding: 1vh;
    color: #00579D;
    font-weight: bold;
    z-index: 0;
    transition: all 0.2s;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rectangle = styled.div`
  width: 102.6vw;
  height: 155vh;
  margin: -35vh 0 0 -60vw;
  transform: rotate(15deg);
  background: #00579D;
  box-shadow: 0 0.4vh 0.4vh rgba(0, 0, 0, 0.25);
  overflow: hidden;

  .textBox {
    width: 21vw;
    height: 15vh;
    position: absolute;
    margin: 40vh 0 0 62vw;
    transform: rotate(-15deg);

  h1 {
    color: #ffffff ;
    font-size: 7vh;
    position: absolute;

    &::before {
      content: '';
      width: 0.5vh;
      height: 20vh;
      margin: 0 0 0 -2vw;
      background-color: #0090C5;
      position: absolute;
    }
  }

  h2 {
    color: #ffffff ;
    font-size: 2.7vh;
    font-weight: normal;
    margin-top: 12vh;
  }
  }
  &::after {
    content: '';
    width: 1.75vw;
    height: 170vh;
    background-color: #0075B1;
    position: absolute;
    margin: -10vh 0 0 101vw;
    box-shadow: 0 0.8vh 0.4vh rgba(0, 0, 0, 0.25), inset 0 0.6vh 0.6vh rgba(0, 0, 0, 0.25);
  }
`;

export const SideContainer = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  margin: -120vh 0 0 50vw;
  
  .logo {
    width: 8vw;
    height: 11.5vh;
    margin: 5vh 10vh 0 0;
    background-image: url(${wegLogo});
    background-size: cover;
    float: right;
  }
`;

export const LoginContainer = styled.div`
  width: 24vw;
  height: 60vh;
  margin: 30vh 0 0 10vw;

  h1 {
    color: #00579D;
    margin: -4vh 0 10vh 0;

    &::before {
      content: '';
      width: 0.5vh;
      height: 6vh;
      position: absolute;
      background-color: #0090C5;
      margin-left: -3vh;
    }
  }
`;

export const Section = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
`;

export const Image = styled.div`
  width: 80vw;
  height: 50vh;
  margin: 82.5vh 0 0 40vw;
  position: absolute;
  transform: rotate(-23deg);
  background-image: url(${wegImage});
  background-size: contain;
  background-size: 74vw 60vh;
  

  &::after {
    content: '';
    width: 100%;
    height: 3vh;
    position: absolute;
    background-color: #0075B1;
    box-shadow: 0 0.8vh 0.4vh rgba(0, 0, 0, 0.25), inset 0 0.6vh 0.6vh rgba(0, 0, 0, 0.25);
  }
`;

export const Line = styled.div`  
  width: 70vh;
  border-radius: 1vh 1vh 0 0;
  background: #00579D;
  height: 0.75vw;
`;

export const LoginCont = styled.div`
  width: 70vh;
  height: 70vh;
  margin-top: 15vh;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  flex-direction: column;
  border-radius: 1vh;
  border-left: 0.1vh solid rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    width: 8.5vw;
    height: 12vh;
    position: absolute;
    margin-top: 10vh;
  }

  #container-pwd {
    display: none;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-top: 9vh;

      h1 {
        color: #00579D;
        font-size: 4vh;
        margin-bottom: 1vh;

        &:before {
          content: "";
          width: 26vw;
          height: 0.2vh;

          position: absolute;
          margin-top: -5.5vh;
          margin-left: -2.2vw;

          display: none;

          background-color: rgba(0, 0, 0, 0.15);
        }
      }

      p {
        color: #00579D;
        font-size: 2.2vh;
      }
      
      button {
        width: 7vw;
        height: 5vh;
        margin-top: 13vh;
        border-radius: 1vh;
        border: 0;
        text-transform: uppercase;
        font-weight: 600;
        justify-content: center;
        display: flex;
        align-items: center;
        background-color: #005DA5;
        color: white;
        font-size: 2.2vh;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        &:hover {
          cursor: pointer;
          background-color: ${shade(0.1, 'rgb(0, 79, 139)')}
        }
      }      
    }
  }
`;

export const ContainerBottom = styled.div`
  width: 100%;
  height: 45vh;
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ContainerBtn = styled.div`
  width: 100%;
  height: 22vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  button {
    width: 7vw;
    height: 5vh;
    border-radius: 1vh;
    border: 0;
    margin-right: 7vh;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #005DA5;
    color: white;
    font-size: 2.2vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &:hover {
      cursor: pointer;
      background-color: ${shade(0.06, '#005DA5')}
    }

    &:active {
      background-color: ${shade(0.12, '#005DA5')}
    }
  }

  p {
    color: #005DA5;
    font-size: 2.2vh;
    font-weight: bold;
    text-decoration: none;
    
    &:hover {
      cursor: pointer;
    color: ${shade(0.03, '#005DA5')}
    }

    &:active {
      color: ${shade(0.09, '#005DA5')}
    }
  }
`;

export const PopupTooltip = styled(Popup)`
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
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ContainerPopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopUp = styled.div`
  width: 20vw;
  height: 6vh;
  background: #c2e4ff;
  border-radius: 0.8vh;
  overflow: hidden;

  font-size: 2.5vh;
  font-weight: bold;
  color: #00579D;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  text-align: center;

  p {
    padding: 1vh;
    font-size: 1.8vh;
  }
`;