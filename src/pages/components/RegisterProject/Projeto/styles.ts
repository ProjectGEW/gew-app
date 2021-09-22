import styled from "styled-components";
import { shade } from "polished";

import Upload from "../../../../assets/upload.svg";

export const BoxProjeto = styled.div`
  width: 50%;
  height: 57vh;

  margin-left: -5vw;

  display: flex;
  align-items: start;

  span {
    display: flex;
    justify-content: flex-start;    
    
    #left-box{
      margin-left: 0;
    }
  }

  div {
    width: 50%;
    margin-top: 2vh;
    margin-left: 6vw;
    display: flex;
    flex-direction: column;

    label, p {
      color: #00579D;
      font-size: 3vh;

      margin-bottom: 1vh;
    }

    #titulo {
      width: 34vw;
    }

    #descricao {
      width: 29vw;
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
      max-width: 80vh;
      max-height: 20vh;
      min-width: 68vh;
      min-height: 18vh;
    }

    &:last-child {
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
  }
`;