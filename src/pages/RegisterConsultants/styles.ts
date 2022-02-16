import styled from 'styled-components';
import { shade } from 'polished';

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
  height: 6vh;

  padding-top: 1vh;

  display: flex;
  flex-direction: column;

  background: #00579D;
  border-radius: 0.8vh 0.8vh 0 0;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.1vh solid #c4c4c4;

  h1 {
    color: #fff;
    font-size: 3.2vh;
    margin-left: 1.2vw;
    padding-bottom: 0.8vh;

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
`;

export const Box = styled.div`
    width: 100%;
    height: 70vh;
    padding: 0px 20px;
    align-items: center;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    
    .col {
        width: 50%;

        display: flex;
        flex-direction: column;

        padding: 2vh;
        margin-top: 2vh;
        border-radius: 0.8vh;

        h1 {
            width: 25vw;

            font-size: 3vh;
            color: #00579D;
            padding-bottom: 0.4vh;
            margin-bottom: 1.6vh;

            border-bottom: 0.1vh solid #00579D;
        }

        label {
            font-size: 2.6vh;
            color: #00579D;
            padding-bottom: 1vh;

            display: flex;
            flex-direction: row;
            align-items: center;
        }

        #boxTags {
            font-size: 2.4vh;
            border: 0.1vh solid #c4c4c4;
            border-radius: 0.4vh;
            color: #575757;

            width: 25vw;
            max-height: 9vh;
            min-height: 9vh;

            padding: 1vh;
            margin: 0 1vw 1vw 0;

            display: flex;
            flex-wrap: wrap;
            //justify-content: space-between;

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

            a {
                padding: 0.5vh 0.5vw 0.5vh 0.5vw;
                background: #c2e4ff;
                border-radius: 0.4vh;
                margin: 0.3vh;

                display: flex;
                align-items: center;

                svg {
                    color: #575757;
                    margin-left: 0.2vw;

                    &:hover {
                        color: #333;
                    }
                }

                &:hover {
                    cursor: pointer;
                    background-color: ${shade(0.03, "#c2e4ff")}
                }
            }

            p {
                font-size: 2vh;
                color: #575757;
            }
        }

        #info {
            margin-top: 0.4vh;
            color: #00579D;
            font-size: 2vh;
        }

        .coluna {
            display: flex;
            flex-direction: column;
            padding-bottom: 3vh;
        }

        .linha {
            display: flex;
            flex-direction: row;
            //justify-content: space-between;
        }

        select {
            width: 25vw;
            padding: 1vh 2vh 1vh 2vh;
            font-size: 2vh;
            border: 0.1vh solid #c4c4c4;
            border-radius: 0.4vh;
            color: #00579D;
            cursor: pointer;
        }

        input {
            width: 12vw;
            height: 4.8vh;

            font-size: 2.4vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;
            margin-right: 1vw;

            background-color: #e9e9e9;
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }

        #nome, #email, #senha, #skill {
            width: 25vw;
        }
    }

    .esq {
        width: 46%;
        margin-left: 9%;
    }

    .dir {
        width: 38%;
        margin-left: 0%;
    }
`;

export const Salvar = styled.div`
    height: 10vh;
    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    span {
        width: 10vw;
        height: 2.5vh;
        margin-left: 1.5vw;
        background-image: linear-gradient(to left, 
        #64C3D5 15%, #fff 10%, #fff 19.3%,
        #0091BD 19.3%, #0091BD 33%, #fff 30%, #fff 37%,
        #005DA5 36%, #005DA5 50%, #fff 49%, #fff 54%,
        #00579D 54%, #00579D 67%, #fff 65.1%, #fff 71%,
        #0075B1 71%, #0075B1 84%, #fff 80%, #fff 88%,
        #6AACDA 10%, #6AACDA 100%);
    }

    button {
        height: 5vh;

        padding: 0 3vh;
        border: 0;
        border-radius: 0.5vh;

        margin: 0 2vw 4vh 0;

        font-size: 2.4vh;
        color: white;
        font-weight: bold;
        background-color: #00579D;

        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        &:hover {
            background-color: ${shade(0.09, "#00579D")}
        }
    }
`;