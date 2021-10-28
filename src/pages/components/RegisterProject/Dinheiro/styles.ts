import styled from "styled-components";
import { shade } from "polished";

export const BoxDinheiro = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3vh;
    margin-bottom: 10vh;

    /* Estilização dos erros */
    .msgErro {
        position: absolute;
        font-size: 1.9vh;
        margin-top: 5.2vh;
    }

    .one {
        margin-left: 0vw;
    }

    .two {
        margin-left: 29.2vw;
    }

    .three {
        margin-left: 38.5vw;
    }

    /* Fim */

    p {
        margin-top: -2.6vh;
        margin-bottom: 1vh;
        margin-left: 2vh;
        font-size: 2.3vh;
        color: rgb(255, 0, 0, 0.8);
    }

    #tableTwo {
        margin-top: 5vh;

        #totalValor {
            input {
                width: 14vw;
            }
        }

        #scroll {
            input {
                &:nth-child(1) {
                    width: 12vw;
                }

                &:nth-child(2) {
                    width: 18vw;
                    text-align: start;
                }

                &:nth-child(3) {
                    width: 12vw;
                }
            }
        }

        .table {
            h1 {
                color: #fff;
                font-size: 3vh;

                &:nth-child(2) {
                    margin-right: 3.5vw;
                }

                &:nth-child(3) {
                    margin-right: 3vw;
                }
            }
        }
    }

`;

export const Table = styled.div`
    width: 90%;
    border-radius: 0.8vh;
    box-shadow: rgba(0, 0, 0, 0.15) -1.95px 1.95px 2.6px, rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;;

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

            &:nth-child(2) {
                margin-left: 1.8vw;
            }

            &:nth-child(3) {
                margin-right: 3vw;
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

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;
    }

    input {
        &:nth-child(1) {
            width: 22vw;
        }

        &:nth-child(2) {
            width: 8vw;
            text-align: end;
        }

        &:nth-child(3) {
            width: 12vw;
            text-align: end;
        }
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

                background-color: rgb(181, 181, 181, 0.6);
                box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
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