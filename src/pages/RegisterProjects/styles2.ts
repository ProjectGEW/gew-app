import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 279vh;
  position: absolute;
  top: 14vh;
  left: 21vw;
  border-radius: 0.8vh;

  input {
    color: #424242;
    &::placeholder {
      color: #8f8f8f;
    }
  }
`;

export const ContainerRegister = styled.div`
  width: 60vw;
  height: 273vh;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.8vh;
`;

export const Info = styled.div`
  width: 100%;
  height: 7vh;
  background-color: #00579D;

  box-shadow: 0.25vh 0.25vh 0.5vh rgb(0, 0, 0, 0.25);
  border-radius: 0.8vh 0.8vh 0 0;

  display: flex;
  align-items: center;

  h1 {
    color: white;
    margin-left: 1vw;
    font-size: 4vh;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 75vh;

  padding: 1vw;

  background-color: white;

  display: flex;
  flex-direction: column;

  border-radius: 0vh 0vh 0.8vh 0.8vh;

  input, textarea {
    height: 5vh;
    margin-bottom: 3vh;

    font-size: 2.4vh;

    border-radius: 0.4vh;
    border: 0px;
    padding: 1vh;

    background-color: #e9e9e9;
    box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
    color: #5E5E5E;
  }

  label{
    color: #00579D;
    font-size: 3vh;
    margin-bottom: 1vh;
  }
`;

export const Geral = styled.div`
  width: 100%;

  h1 {
    font-size: 3vh;
    color: #00579D;
    padding-bottom: 2vh;
  }
`;

export const Topicos = styled.div `
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0.8vh;
  overflow: hidden;

  h1 {
    width: 25%;
    text-align: center;
    padding: 1vh;
    font-size: 3vh;
    color: #575757;
    display: block;
    font-weight: 500;
    
    &:hover {
      background-color: #ebebeb;
      cursor: pointer;
    }

    &:nth-child(1) {
      background-color: #c2e4ff;
      color: #575757;
    }
  }
`;

export const Projetos = styled.div`
  /* Estilização dos erros */

  .msgErro {
    position: absolute;
    font-size: 1.9vh;
    color: red;
  }

  #numeroProjetoResponse {
    margin-top: 9.5vh;
    margin-left: 0vw;
  }

  #ataResponse {
    margin-top: 22vh;
    margin-left: 0vw;
  }

  #tituloResponse {
    margin-top: 10vh;
    margin-left: 0vw;
  }

  #descricaoResponse {
    margin-top: 25vh;
    margin-left: 0vw;
  }

  /* Fim */

  h1 {
    font-size: 3.5vh;
    padding-bottom: 1.8vh;
    border-bottom: 0.1vh solid #ebebeb;
    color: #00579D;
  }

  div {
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #primeiraLinha {
    #numeroProjeto, #ataNome {
      width: 18vw;
    }

    div {
      display: flex;
      flex-direction: column;

      &:last-child {
        input[type='file'] {
          display: none;
        }
          
        label {
          width: 14vw;

          margin-top: 2.2vh;
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
        }
      }
    }
  }

  #segundaLinha {
    display: flex;
    flex-direction: row;

    #titulo {
      width: 28vw;
    }

    #descricao {
      width: 28vw;
      height: 20vh;
    }
    
    div {
      display: flex;
      flex-direction: column;

      width: 50%;
      margin-top: 0;

      div {
        margin-left: 1.5vw;
        margin-right: 1.5vw;
      }
    }

    #ladoDireito {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      iframe {
        width: 25vw;
        height: 37vh;
        margin-right: 1vw;
        background-color: #e9e9e9;
        //border: 0.1vh solid #c4c4c4;
        border: 0;
      }
    }
  }
`;

export const Responsavel = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.5vh;
    padding-bottom: 1.8vh;
    border-bottom: 0.1vh solid #ebebeb;
    color: #00579D;
  }

  #primeiraLinha, #segundaLinha {
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    padding-top: 2vh;
    background-color: #f8f8f8;
    border-radius: 0.5vh ;

    h1 {
      border-bottom: 0;
      font-size: 3vh;
      //font-weight: 400;
      display: flex;
      align-items: center;
      margin-left: 1.4vw;
      justify-content: space-between;

      svg {
        margin-right: 2vw;

        &:hover {
          opacity: 0.85;
          cursor: pointer;
        }

        &:active {
          opacity: 0.75;
        }
      }
    }

    div {
      margin-top: 0.6vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      
      div {
        display: flex;
        flex-direction: column;

        #cracha_responsavel, #cracha_solicitante {
          width: 10vw;
        }

        #nome_responsavel, #nome_solicitante {
          width: 20vw;
          background-color: #f0f0f0;
          box-shadow: 0vh 0vh 0vh transparent;
        }

        #secao_responsavel, #secao_solicitante {
          width: 20vw;
          background-color: #f0f0f0;
          box-shadow: 0vh 0vh 0vh transparent;
        }
      }
    }
  }
`;

export const Gastos = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.5vh;
    padding-bottom: 1.8vh;
    border-bottom: 0.1vh solid #ebebeb;
    color: #00579D;
  }

  #primeiraLinha, #segundaLinha {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
  }
`;

export const Table = styled.div`
  width: 56vw;
  border-radius: 0.8vh;
  box-shadow: rgba(0, 0, 0, 0.15) -1.95px 1.95px 2.6px;
  background-color: #f8f8f8;

  h1 {
    border-bottom: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    display: flex;
    align-items: center;
  }
  
  .table {
    width: 100%;
    background-color: #00579D;
    padding: 1.2vh;
    border-radius: 0.8vh 0.8vh 0vh 0vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    h1 {
      color: #fff;
      font-size: 3vh;
      margin-left: 1vw;

      &:nth-child(2) {
        margin-left: 6vw;
      }

      &:nth-child(3) {
        margin-right: 1.2vw;
      }
    }
  }

  #scroll {
    width: 100%;
    height: 138px;
    min-height: 138px;

    margin-top: 0.3vh;

    overflow: scroll;
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
    align-items: center;
    flex-direction: column;
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;    

  div {
    width: 70%;
    padding: 1.3vh;
    border-radius: 0vh 0vh 0.8vh 0.8vh;

    display: flex;
    align-items: center;
    flex-direction: row;

    // primeira div
    &:first-child {
      width: 30%;
      padding: 0vh 0vw 0vh 0.5vw;

      button {
        padding: 1vh;
        border: 0;
        border-radius: 0.5vh;

        font-size: 2vh;
        color: white;
        font-weight: bold;
        background-color: #00579D;

        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        &:hover {
          background-color: ${shade(0.09, "#00579D")}
        }

        // primeiro botão
        &:first-child {
          margin-right: 1vw;
        }
      }
    }

      // segunda div
    &:last-child {
      justify-content: flex-end;

      h2 {
        color: #00579D;
        font-size: 3vh;
      }

      input {
        // primeiro input
        &:nth-child(2) {
          width: 8vw; 
          margin-left: 0.9vw;    
          text-align: end;        
        }

        // segundo input
        &:nth-child(3) {
          width: 12vw;              
          margin-left: 0.7vw;
          margin-right: 0.3vw;
        }
        
        height: 5vh;
        font-size: 2.4vh;
        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: #f0f0f0;
        box-shadow: 0vh 0vh 0vh transparent;
        color: #5E5E5E;
      }

      #totalValor {
        width: 12vw;
        text-align: end;
      }

      svg {
        position: absolute;
        color: #00579D;
        width: 2.5%;
        height: 2.5%;
        margin-top: 4vh;
        margin-right: -0.5vw;
        transform: rotate(90deg);

        &:hover {
          cursor: pointer;
          color: ${shade(0.03, '#00579D')};
        }   
      }
    }
  }
`;

export const Linha = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 1vh;

  input {
    width: 10vw;
    height: 5vh;
    font-size: 2.4vh;
    border-radius: 0.4vh;
    border: 0px;
    padding: 1vh;

    background-color: #e9e9e9;
    box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
    color: #5E5E5E;
  }

  input {
    &:nth-child(1) {
      width: 26vw;
    }

    &:nth-child(2) {
      width: 11vw;
      text-align: end;
    }

    &:nth-child(3) {
      width: 15vw;
      text-align: end;
    }
  }
`;