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
    margin-bottom: 4vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    overflow: hidden;

    background-color: #fff;
    border-radius: 0.8vh;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    #first-table, #second-table {
        background-color: #00579D;
    }

    #first-scroll, #second-scroll {
        max-height: 18vh;

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

    div {
        width: 100%;
        padding: 1.5vh;

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
                margin-right: 1.7vw;
            }

            &:last-child {
                input {
                    &:nth-child(1) {
                        width: 12vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(2) {
                        width: 16vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(3) {
                        width: 6vw;
                        margin-right: 0vw;
                    }
    
                    &:nth-child(4) {
                        width: 10vw;
                        margin-right: 0vw;
                    }
                }
            }
        }
    }

`;

export const Linha = styled.div`
    width: 100%;
    transition: all 0.2s;

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
    }

    /*&::before {
        content: '';
        width: 1.2vw;
        height: 3vh;
        position: absolute;
        
        margin-top: 1vh;
        margin-left: 50vw;

        background-image: url(${Plus});
        background-size: cover;
        background-position: center;
        cursor: pointer;
    }*/
`;