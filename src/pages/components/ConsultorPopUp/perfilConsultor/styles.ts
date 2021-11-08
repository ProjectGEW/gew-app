import { shade } from "polished";
import styled from "styled-components";

import Close from '../../../../assets/close.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
    border-radius: 0.8vh;
    overflow: hidden;
`;

export const PopUp = styled.div`
    width: 35vw;
    height: 43vh;
    background: #fff;
    border-radius: 0.8vh;

    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 
`;

export const Texto = styled.p`
    background-color: #c2e4ff;
    padding: 1vh;
    border-radius: 0.8vh;
    font-size: 2.2vh;
    font-weight: bold;
    color: #00579D;
`;

export const Title = styled.div`
    width: 40vw;
    padding: 1vh;
    background: #00579D;

    display: flex;
    flex-direction: row;

    h1 {
        color: #fff;
        font-size: 2.8vh;
        margin-left: 0.4vw;
    }

    span {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        margin-top: -0.4vh;
        margin-left: 32vw;
        position: absolute;
        background-size: cover;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;

export const Header = styled.div`
    width: 30vw;
    height: 26vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0vh 2vh 2vh 2vh;

    p {
        font-size: 2.2vh;
        color: #00579D;
        font-weight: bold;

        padding: 1vh 0 1vh 0;
    }

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;

        .detalhe {
            border-bottom: 0.1vh solid #ccc;

            &:hover {
                background-color: rgba(220, 220, 220, 0.25);
            }
        }

        div {
            &:first-child {
                div {
                    width: 22vw;
                }
            }
        }

        div > div {
            width: 100%;
            display: flex;
            flex-direction: row;

            .txt {
                margin-left: 1vw;
                color: #484848;
                font-weight: 200;
            }

            &:last-child {
                div {    
                    border-bottom: 0;

                    &:hover {
                        background-color: #fff;
                    }

                    &:last-child {
                        background-color: rgba(220, 220, 220, 0.6);
                        width: 10vw;
                        height: 20vh;
                        margin-top: 2.2vh;
                        margin-left: 1vw;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 2vh;
                        
                    }
                }
            }
        }
    }

    .projetos {
        width: 33vw;
        margin-top: 4vh;

        text-align: left;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        p {
            width: 22vw;
            font-size: 2.2vh;
        }

        button {
            padding: 0.8vh;
            height: 4.5vh;
            border: 0;
            border-radius: 0.5vh;
            margin-right: 0.2vw;
            font-size: 2vh;
            color: white;
            font-weight: bold;
            background-color: #e21d1d;

            &:hover {
                background-color: ${shade(0.09, "#e21d1d")}
            }
        }
    }
`;