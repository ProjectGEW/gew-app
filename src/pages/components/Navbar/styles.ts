import styled from "styled-components";

import arrow from "../../../assets/arrow.svg";

import BR from "../../../assets/br.svg";
import EN from "../../../assets/en.svg";
import ES from "../../../assets/es.svg";
import UK from "../../../assets/uk.svg";
import FR from "../../../assets/fr.svg";

interface HistoricPageProps {
  localDaRota: boolean;
}

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  box-shadow: 0.1vh 0.1vh 0.8vh rgb(0, 0, 0, 0.35);
`;

export const Logo = styled.div`
  width: 4.2vw;
  height: 6vh;
  margin: 1vh 0 0 1vw;
  background-image: url("https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand.svg");
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
  #home,
  #projects {
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
    margin-left: -0.1vw;
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
  margin: 2.5vh 2vw 0 1vw;
  float: right;
  background-image: linear-gradient(
    to bottom,
    #00579d 20%,
    #fff 20%,
    #fff 40%,
    #00579d 40%,
    #00579d 60%,
    #fff 60%,
    #fff 80%,
    #00579d 80%
  );

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  width: 10vw;
  height: 18vh;
  background: #fff;
  box-shadow: 0.1vh 0.1vh 0.8vh rgb(0, 0, 0, 0.35);
  border-radius: 2px;
  position: absolute;
  margin-top: 5.55vh;
  transform: translateX(-6.5vw);
  display: none;
  z-index: 10;

  ul {
    width: 100%;
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
      }

      &:active {
        background: #00579d;

        a {
          color: #fff;
        }
      }

      a {
        color: #005da5;
        font-size: 2.5vh;

        &:hover {
          cursor: pointer;
        }
      }

      &:after {
        content: "";
        width: 80%;
        height: 0.1vh;
        margin: 6vh 0 0 5%;
        position: absolute;
        background: rgb(200, 200, 200, 0.6);
      }
    }

    li:last-child:after {
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

export const Flag = styled.div`
  width: 2.2vw;
  height: 3vh;
  border-radius: 0.1vh;
  background-image: url(${BR});
  background-size: cover;
  background-position: center;
`;

export const DropdownFlag = styled.div`
  width: 8vw;
  height: 20vh;
  background: #fff;
  box-shadow: 0.1vh 0.1vh 0.8vh rgb(0, 0, 0, 0.35);
  border-radius: 2px;
  position: absolute;
  margin-top: 8.1vh;
  transform: translateX(88vw);
  display: none;
  z-index: 10;
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
      color: #00579d;
      list-style: none;
      display: flex;
      justify-content: left;
      align-items: center;

      a {
        &::after {
          content: "";
          width: 2.4vw;
          height: 3.2vh;
          margin-left: 1.6vw;
          background-size: cover;
          background-position: center;
          position: absolute;
        }
      }

      &:nth-child(1) {
        a::after {
          background-image: url(${ES});
        }
      }

      &:nth-child(2) {
        a::after {
          background-image: url(${EN});
        }
      }

      &:nth-child(3) {
        a::after {
          background-image: url(${UK});
        }
      }

      &:nth-child(4) {
        a::after {
          background-image: url(${FR});
        }
      }

      &:hover {
        background: rgb(200, 200, 200, 0.2);
        cursor: pointer;
      }

      &:active {
        background: #00579d;

        a {
          color: #fff;
        }
      }

      a {
        color: #005da5;
        font-size: 2.5vh;
        margin-left: 1.2vw;
      }

      &:after {
        content: "";
        width: 80%;
        height: 0.1vh;
        margin: 5vh 0 0 5%;
        position: absolute;
        background: rgb(200, 200, 200, 0.6);
      }
    }

    li:last-child:after {
      display: none;
    }
  }
`;
