import styled from "styled-components";
import { shade } from "polished";

export const BoxDinheiro = styled.div`
    width: 70%;
    height: 57vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        margin-top: -2.6vh;
        margin-bottom: 1vh;
        margin-left: 2vh;
        font-size: 2.3vh;
        color: rgb(255, 0, 0, 0.8);
    }

    #tableOne {
        display: block;
    }

    #tableTwo {
        display: none;
    }

    #choose {
        width: 5vw;
        height: auto;

        color: #00579D;
        visibility: visible;

        position: absolute;
        margin-top: 5vh;
        margin-left: 54vw;

        &:hover {
            cursor: pointer;
        }

        &:active {
            opacity: 0.8;
        }
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        div {
            &:nth-child(1) {
                div {
                    &:nth-child(2) {
                        div {
                            &:last-child {
                                justify-content: flex-start;

                                div {
                                  justify-content: flex-start;
                                  align-items: center;

                                  svg{
                                    margin-top: 0vh;
                                  }
                                }

                                h2 {
                                    margin-right: 1.3vw;
                                    margin-left: -0.5vw;
                                }

                                #totalEsforco {
                                    width: 6.2vw;
                                    margin-right: 0.7vw;
                                }

                                #totalValor {
                                    width: 10vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Table = styled.div`
    width: 50vw;
    margin-top: 3vh;

    svg {
        float: right;
        margin-top: -1.2vw;
        margin-right: -0.8vw;
        width: 3vw;
        height: 3vh;
        color: #00579D;
        
        &:hover {
            cursor: pointer;
            color: ${shade(0.08, '#00579D')};
        }
    }

    #soma {
        transform: rotate(90deg);
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    overflow: hidden;

    background-color: #fff;
    border-radius: 0.8vh;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    input {
        font-size: 2.2vh;
    }

    .alinhar {
        text-align: center;
    }

    #first-table, #second-table {
        background-color: #00579D;
    }

    #second-table {
        h1 {
            &:first-child {
                margin-left: 0.7vw;
            }

            &:nth-child(2) {
                margin-left: -17vw;
            }

            &:last-child {
                margin-right: 3.5vw;
            }
        }
    }

    #first-scroll, #second-scroll {
        max-height: 40vh;

        flex-direction: column;
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
    }

    #first-table {
        h1 {
            margin-right: 3vw;

            &:nth-child(1) {
                margin-left: 0.7vw;
            }

            &:nth-child(2) {
                margin-left: 11.5vw;
            }

            &:nth-child(3) {
                margin-left: 0vw;
                margin-right: 3.5vw;
            }
        }
    }

    #second-scroll {
        #remove {
            display: flex;
            align-items: center;

            h2 {
                color: #00579D;
                font-size: 2.6vh;
            }

            svg {   
                margin-top: 0.1vh;
                margin-right: 31.5vw;                
            }
        }

    }

    div {
        width: 100%;
        padding: 1.5vh;
        padding-bottom: 1vh;

        display: flex;
        justify-content: space-between;
        flex-direction: row;

        h1 {
            color: white;
            font-size: 2.6vh;
            margin-left: 4.4vw;
            margin-right: 3vw;
        }
    }

    &:nth-child(2) {
        div {
            h1 {
                margin-right: 2vw;
                
                &:nth-child(1) {
                    margin-left: 1.8vw;
                }

                &:nth-child(2) {
                    margin-left: 2.8vw;
                }

                &:nth-child(3) {
                    margin-left: 1.6vw;
                }

                &:nth-child(4) {
                    margin-left: 0vw;
                }
            }

            &:last-child {
                input {
                    &:nth-child(1) {
                        width: 10.3vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(2) {
                        width: 24.8vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(3) {
                        width: 10vw;
                        margin-right: 0vw;
                    }
                }
            }
        }
    }

    #removeRow {
            h2 {
                color: #00579D;
                font-size: 2.6vh;
                margin-left: 0.9vw;
            } 
            svg {
                width: 3.3vw;
                height: 3.3vh;
                float: left;
                margin-left: 20vw;
                color: #00579D;
                
                &:hover {
                    color: #0075B1;
                }
             }
        }
`;

export const Linha = styled.div`
    display: block;
    width: 100%;
    transition: all 0.2s;

    input {
        display: block;
        height: 5vh;

        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;

        &:nth-child(1) {
            width: 29vw;
        }

        &:nth-child(2) {
            width: 6vw;
        }

        &:nth-child(3) {
            width: 10vw;
        }
    }
`;

export const Total = styled.div`
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        color: #00579D;
        font-size: 2.6vh;
    }

    svg {
      margin-top: 4.8vh;
      margin-left: -0.8vw;
    }

    div {
      h2 {
        color: #00579D;
        font-size: 2.6vh;
        float: right;
      } 

      svg {
          margin-top: -0.2vh;
          margin-left: -1.5vw;
          width: 3vw;
          height: 3vh;
          color: #00579D;
          
          &:hover {
            cursor: pointer;
            color: ${shade(0.08, '#00579D')};
        }
      }
    }

    input {
        height: 5vh;

        &:nth-child(1) {
            width: 8vw;
        }

        &:nth-child(2) {
            width: 12vw;
        }

        &:first-child {
            margin-left: 25.5vw;
        }

        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;
    }  
`;