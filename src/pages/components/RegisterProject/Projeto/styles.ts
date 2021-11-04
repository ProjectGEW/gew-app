import styled from "styled-components";
import { shade } from "polished";

import Upload from "../../../../assets/upload.svg";

export const BoxProjeto = styled.div`
  width: 80%;
  height: 57vh;

  padding: 0.2vh 0vw 0vh 1vw;

  display: flex;
  align-items: start;

  /* Estilização dos erros */

  .msgErro {
    position: absolute;
    font-size: 1.9vh;
  }

  #numeroProjetoResponse {
    margin-top: 9.5vh;
    margin-left: 0vw;
  }

  #tituloResponse {
    margin-top: 22vh;
    margin-left: 0vw;
  }

  #descricaoResponse {
    margin-top: 47.2vh;
    margin-left: 0vw;
  }

  #ataResponse {
    margin-top: 9.8vh;
    margin-left: -10vw;
  }

  /* Fim */

  span {
    display: flex;
    justify-content: flex-start;    
    
    #left-box{
      margin-left: 0;
    /*  p {
        margin-top: -2.6vh;
        margin-bottom: 1vh;
        font-size: 2.3vh;
        color: rgb(255, 0, 0, 0.8);
      }*/
    }
  }

  div {
    width: 50%;
    margin-top: 2vh;
    margin-left: 6vw;
    display: flex;
    flex-direction: column;

    p {
      margin-top: 0vh;
      margin-left: 6vw;
      font-size: 2.3vh;
      color: rgb(255, 0, 0, 0.8);
    }   

    label{
      color: #00579D;
      font-size: 3vh;
      margin-bottom: 1vh;
    }

    #numeroProjeto {
      width: 15vw;
    }

    #titulo {
      width: 30vw;
    }

    #descricao {
      max-width: 30vw;
      max-height: 18vh;
      min-width: 30vw;
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

   textarea {
      /*max-width: 80vh;
      max-height: 20vh;
      min-width: 70.5vh;
      min-height: 18vh;*/
    }

    &:last-child {
      input[type='file'] {
        display: none;
      }
        
      label {
        width: 13.3vw;

        margin-top: 2.2vh;
        margin-left: -16.3vw;
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
  }
`;

export const Preview = styled.iframe`
  max-width: 640px;
  max-height: 450px;

  min-width: 320px;
  min-height: 300px;

  margin-top: 30px;
  margin-left: -10vw; 
  
  margin-top: 30px;
  margin-left: -10vw;

  border: 0.1vh solid #c4c4c4;
  //background-color: rgb(181, 181, 181, 0.6);
`;