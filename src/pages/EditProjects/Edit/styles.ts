import styled from "styled-components";
import { shade } from "polished";

import Upload from "../../../assets/upload.svg";

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 217.5vh;
    margin-bottom: 5vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

    header {
        width: 100%;
        height: 7vh;
        background-color: #00579D;
        border-radius: 0.8vh 0.8vh 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3vh 0 3vh;
        position: absolute;

        h1 {
            font-size: 3.6vh;
            margin-top: -0.2vh;
            margin-left: -0.45vw;
            font-weight: bold;
            color: #fff;
        }

        svg {
            width: 3.6vh;
            height: auto;
            color: #fff;
            margin-top: 0.4vh;
        }
    }
`;

export const Footer = styled.div`
    position: absolute;
    width: 100vw;
    height: 235vh;
`;

export const BoxContainer = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-top: 20vh;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #00579D;
        width: 20vw;
        font-weight: normal;
        margin-right: 36vw;
        margin-bottom: 8vh;
        margin-top: -4vh;
        display: flex;
        align-items: flex-start;

        &::after {
            content: '';
            width: 61vw;
            height: 0.1vh;
            background: #c4c4c4;
            position: absolute;
            margin: 7.45vh 0 0 -2vw;
        }
    }

    &:nth-child(2)   {
        h1 {
            margin-top: -6vh;
        }
    }

    &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        h1 {
            margin-top: -14vh;
        }
    }

    label, p {
        color: #00579D;
        font-size: 3vh;

        margin-bottom: 1vh;
    }  

    textarea {
      max-width: 80vh;
      max-height: 20vh;
      min-width: 70.5vh;
      min-height: 18vh;
    }


  input, textarea {
      height: 5vh;
      margin-bottom: 3vh;

      font-size: 2.4vh;

      border-radius: 0.4vh;
      border: 0px;
      padding: 1vh;

      background-color: rgb(181, 181, 181, 0.6);
      box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
      color: #5E5E5E;
    }

    input[type='date'] {
        &:nth-child(1) {
            background-color: #00579D;
        }
      }
`;

export const Box = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
    }

    #tituloProjeto {
        width: 78.5%;
    }
`;

export const PageContainer = styled.div`
    width: 100vw;
    height: 250vh;

`;

export const Box2 = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-bottom: 3vh;

    div {
        display: flex;
        flex-direction: column;
    }

    #half {
        width: 47.5%;
        &:first-child {
            margin-right: 5%;
        }
    }

    #box {
        width: 30%;
        margin-right: 4%;
    }

    //a classe .bigger foi criada para ajustar o label, ela herda os elementos da #box

    .bigger {
        label {
            width: 30vw;
        }
    }

    #numeroProjeto {
        width: 45%;
        height: 7vh;
        margin-right: 20%;
    }

    #ata {
        width: 30%;
        height: 7vh;
        margin-left: 5%;
        margin-top: 2vh;

      input[type='file'] {
        display: none;
      }

       
      label {
        width: 13.3vw;

        margin-top: 2vh;

        background: #0090C5;
        border-radius: 0.8vh;
        color: #fff;
        font-weight: bold;

        padding: 1.6vh;
        padding-left: 1vh;
       
        font-size: 1.8vh;
        cursor: pointer;    

        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        &:hover {
          background: ${shade(0.08, "#0090C5")};
        }
     

    &::before {
          content: 'Selecionar ATA:';
          position: absolute;

          color: #00579D;
          font-size: 2.9vh;
          font-weight: 100;

          margin-top: -5.5vh;
          margin-left: -0.5vw;
        }

        &::after {
          content: '';
          width: 1.2vw;
          height: 2.2vh;
          position: absolute;

          margin-top: 0.2vh;
          margin-left: 0.5vw;

          background-image: url(${Upload});
          background-size: cover;
          background-position: center;
          z-index: 99;
        }
    }
}

`;



