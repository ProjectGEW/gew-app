import styled from "styled-components";

import Plus from '../../../../assets/plus.svg';

export const Box = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Table = styled.div`
    width: 50vw;
    padding: 1.5vh;

    margin-bottom: 4vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-image: linear-gradient(to bottom, #00579D 35%, #fff 35%, #fff 100%);
    border-radius: 0.8vh;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    div {
        width: 100%;
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

    &:last-child {
        div {

            h1 {
                margin-left: 1.6vw;
                margin-right: 1.6vw;
            }

            &:last-child {
                input {
                    &:nth-child(1) {
                        width: 13.5vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(2) {
                        width: 15.5vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(3) {
                        width: 9vw;
                        margin-right: 0vw;
                    }
    
                    &:nth-child(4) {
                        width: 8.5vw;
                        margin-right: 0vw;
                    }
                }
            }
        }
    }

`;

export const Linha = styled.div`
    width: 100%;
    margin-top: 4vh;
    margin-bottom: 1vh;

    input {
        height: 5vh;

        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;

        &:nth-child(1) {
            width: 24vw;
        }

        &:nth-child(2) {
            width: 8vw;
        }

        &:nth-child(3) {
            width: 12vw;
        }

        &:last-child {
            &::after {
                content: '';
                width: 4vw;
                height: 4vh;
                position: absolute;
                
                margin-top: 0vh;
                margin-left: 0vw;

                background-image: url(${Plus});
                background-size: cover;
                background-position: center;
            }
        }
    }
`;