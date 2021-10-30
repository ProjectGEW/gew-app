import styled, { css } from "styled-components";

import arrow from "../../../assets/arrow.svg";

import BR from "../../../assets/br.svg";
import EN from "../../../assets/en.svg";
import ES from "../../../assets/es.svg";
import FR from "../../../assets/fr.svg";
import WEG from "../../../assets/weg.svg";

interface SiglaFlag {
    type: string;
}

interface HistoricPageProps {
  localDaRota: boolean;
}

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: fixed;
  z-index: 9;
  
`;

export const Logo = styled.div`
  width: 4.4vw;
  height: 6vh;
  margin: 1vh 0 0 1vw;
  background-image: url(${WEG});
  float: left;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const HistoricPage = styled.p<HistoricPageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageIndicator = styled.div`
  position: absolute;
  width: 50vw;
  height: 8vh;
  display: flex;
  margin-left: 7vw;

  div {
    width: 10vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 2.3vh;
    font-weight: bold;
    color: #00579d;
    margin-left: 2vw;

    &:nth-child(1),
    &:nth-child(2) {
      margin-left: -0.5vw;
    }

    a {
      color: inherit;
    }
  }

  #projects {
    margin-left: -1.5vw;
  }

  #home, #projects {
    &:before {
      content: "";
      width: 1vw;
      height: 2vh;
      margin-left: 8vw;
      background-image: url(${arrow});
      position: absolute;
    }
  }

  #page {
    &:after {
      content: "";
      width: 8vw;
      height: 0.75vh;
      margin: 7.25vh 0 0 0;
      background: #00579d;
      border-radius: 1vh 1vh 0 0;
      position: absolute;
    }
  }
`;

export const SandwichMenu = styled.div`
  width: 2vw;
  height: 4vh;
  margin: 2.2vh 2vw 0 1vw;
  float: right;

  background-image: linear-gradient(
    to bottom, #00579d 20%, #fff 20%, #fff 40%, #00579d 40%, #00579d 60%, #fff 60%, #fff 80%, #00579d 80%);

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  width: 10vw;
  height: 18vh;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 2px;
  position: absolute;
  margin-top: 5.9vh;
  transform: translateX(-6.5vw);
  display: none;
  z-index: 20;

  ul {
    width: 100%;
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      width: 100%;
      color: #005da5;
      font-size: 2.5vh;

      &:before {
        content: "";
        width: 90%;
        height: 0.1vh;
        margin: 6vh 0 0 5%;
        position: absolute;
        background: rgb(200, 200, 200, 0.4);
      }
    }

    li {
      width: 100%;
      height: 6vh;
      color: #00579d;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: rgb(200, 200, 200, 0.2);
        cursor: pointer;
      }
    }

    a:last-child:before {
      display: none;
    }
  }
`;

export const LanguageIndicator = styled.div`
  width: 5vw;
  height: 6vh;
  margin: 1.5vh 0vw 1vh 0;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 0.5vh;
    color: #023a67;
    transition: all 0.1s;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Flag = styled.div<SiglaFlag>`
    width: 2.4vw;
    height: 3.2vh;
    border-radius: 0.1vh;
    background-image: url(${BR});
    background-size: cover;
    background-position: center;

    ${props => props.type === "BR" && css`background-image: url(${BR});`}
    ${props => props.type === "ES" && css`background-image: url(${ES});`}
    ${props => props.type === "EN" && css`background-image: url(${EN});`}
    ${props => props.type === "FR" && css`background-image: url(${FR});`}
`;

export const DropdownFlag = styled.div`
  width: 8vw;
  height: 20vh;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 2px;
  position: absolute;
  margin-top: 8.1vh;
  transform: translateX(88vw);
  display: none;
  z-index: 20;
  transition: all 0.1s;

  ul { 
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    li {
      width: 100%;
      height: 6vh;
      color: #00579D;
      list-style: none;
      display: flex;
      justify-content: left;
      align-items: center;

      p {
        margin-right: 1.4vw;
      }

      &:hover {
        background: rgb(200, 200, 200, 0.2);
        cursor: pointer;
      }

      &:active {
        background: #00579D;
        
        p {
            color: #fff;
        }
      }

      p {
        color: #005DA5;
        font-size: 2.5vh;
        margin-left: 1.2vw;        
      }

      &:after {
        content: "";
        width: 90%;
        height: 0.1vh;
        margin: 5vh 0 0 5%;
        position: absolute;
        background: rgb(200, 200, 200, 0.6);
      }
    }

    p {
      color: #005da5;
      font-size: 2.5vh;
      margin-left: 1.2vw;
    }
  }

  li:last-child:after {
    display: none;
  }

`;
