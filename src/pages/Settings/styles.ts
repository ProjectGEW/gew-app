import styled, { css } from "styled-components";
import { shade } from "polished";

interface IProps {
  tamanhoFonte: string;
}

export const Container = styled.div`
  position: absolute;
  top: 14vh;
  left: 12vw;
  width: 78vw;
  height: 80vh;
`;

export const ContainerSettings = styled.div`
  width: 78vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.8vh;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 6vh;

  padding-top: 1vh;

  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.2vh solid #ccc;

  h1 {
    color: #00579D;
    font-size: 3vh;
    margin-left: 1.2vw;

    display: flex;
    align-items: center;

    svg {
      margin-left: 0vw;

      &:last-child {
        margin-left: 0vw;

        &:hover {
          opacity: 0.85;
          cursor: pointer;
        }

        &:active {
          opacity: 0.75;
        }
      }
    }
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

export const Box = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0px 20px;
  align-items: center;  
  
  .row {
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    border: 0.1vh solid rgba(0, 0, 0, 0.1);

    padding: 2vh;
    margin-top: 2vh;
    border-radius: 0.8vh;

    h1 {
      font-size: 2.8vh;
      color: #00579D;
      //font-weight: 100;
      margin-left: 1vw;
    }

    p {
      font-size: 2.2vh;
      color: #00579D;
      margin-left: 2vw;
      padding: 0.5vh 1vh 1.5vh 1vh;

      display: flex;
      align-items: center;

      &:before {
        content: '┕';
        width: 1vw;
        height: 1vh;
        position: absolute;

        margin: -2vh 0 0 -1.5vw;
      }
    }

    button, select {
      padding: 1vh 2vh 1vh 2vh;
      font-size: 2vh;
      border: 0.1vh solid #c4c4c4;
      border-radius: 0.4vh;
      color: #00579D;
      cursor: pointer;
    }

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

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }

    #inputs {
      margin-top: 2.2vh;
      height: 18vh;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: column;

      input[type='file'] {
        display: none;
      }

      label {
        padding: 0.6vh 3vh 0.6vh 3vh;
        border: 0;
        border-radius: 0.5vh;

        font-size: 2vh;
        color: white;
        font-weight: bold;
        background-color: #00579D;

        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        &:hover {
          cursor: pointer;
          background-color: ${shade(0.09, "#00579D")}
        }
      }

      input {
        width: 25vw;
        font-size: 2.2vh;

        border: 0;
        border-bottom: 0.4vh solid #00579D;

        color: #5E5E5E;
      }
    }

    span {
      padding: 0.6vh 3vh 0.6vh 3vh;
      border: 0;
      border-radius: 0.5vh;

      font-size: 2vh;
      color: white;
      font-weight: bold;
      background-color: #009d56;

      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

      &:hover {
        cursor: pointer;
        background-color: ${shade(0.09, "#009d56")}
      }
    }
  }
`;

export const Example = styled.div<IProps>`
  width: 42vw;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h2 {
    color: #575757;

    ${props => props.tamanhoFonte === '2' && css`
      font-size: 2vh;
    `};

    ${props => props.tamanhoFonte === '2.8' && css`
      font-size: 2.8vh;
    `};

    ${props => props.tamanhoFonte === '3.2' && css`
      font-size: 3.2vh;
    `};

    ${props => props.tamanhoFonte === '4' && css`
      font-size: 4vh;
    `};

    ${props => props.tamanhoFonte === '99' && css`
      font-size: 99vh;
    `};
  }
`;