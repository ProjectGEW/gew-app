import styled from "styled-components";

import atua from '../../assets/atualizar.svg';

export const Container = styled.div`
  position: absolute;
  top: 14vh;
  left: 12vw;
  width: 78vw;
  height: 80vh;
`;

export const ContainerProject = styled.div`
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
  height: 12vh;

  padding-top: 1vh;

  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const ContainerFiltro = styled.div`
  width: 100%;
  height: 16vh;

  border-bottom: 0.2vh solid #ccc;

  display: flex;
  place-content: flex-start space-between;
  align-items: center;

  h1 {
    color: #00579D;
    font-size: 3vh;
    margin-left: 1.2vw;
  }

  div {
    display: flex;
    align-items: center;

    &:nth-child(3) {
      div {
        button {
          border: 0;
          padding: 0.8vh;
          font-size: 2vh;
          margin-left: 0.3vw;
          border-radius: 0.8vh;
          background-color: rgba(212, 212, 212, 0.3);
          color: #575757;

          &:nth-child(1) {
            background-color: rgba(212, 212, 212, 0.7);
          }

          &:hover {
            cursor: pointer;
            background-color: rgba(212, 212, 212, 0.5);
          }
        }
      }
    }
    
    label {
      font-size: 2.6vh;
      color: #00579D;

      margin-right: 0.5vw;
    }

    select {
      width: 12vw;
      padding: 0.5vh;

      color: #575757;
      border: 0.2vh solid #c4c4c4;
    }

    input {
      width: 12vw;
      padding: 0.5vh;
      padding-left: 1vh;

      border: 0.2vh solid #ccc;

      color: #00579D;

      ::placeholder {
        font-size: 1.8vh;
        color: rgb(0, 0, 0, 0.4);
      }
    }

    &:last-child {
      margin-right: 1.4vw;
    }

    svg {
      color: #00579D;
      
      &:hover {
        opacity: 0.85;
        cursor: pointer;
      }

      &:active {
        opacity: 0.75;
      }
    }
  }
`;

export const Atualizar = styled.svg`
  width: 1.8vw;
  height: 3.6vh;
  background-repeat: no-repeat;
  background-image: url('${atua}');
  
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:active {
    opacity: 0.75;
  }
`;

export const ProjectsGrid = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0px 20px;
  align-items: center;   
  
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
`;

export const Center = styled.div`
  width: 100%;

  &:last-child {
    margin-bottom: 4vh;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Msg = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 25vh;

  svg {
    color: #bfbfbf;
    opacity: 1;
    animation: rodar 2s infinite;
  }

  @keyframes rodar {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }    
  
  h1 {
    font-size: 4vh;
    color: #bfbfbf;
    opacity: 1;
  }
`;