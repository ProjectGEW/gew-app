import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PopUp = styled.div`
    width: 9vw;
    max-height: 40vh;
    
    background: #c2e4ff;
    border-radius: 0.8vh;

    font-size: 2.5vh;
    font-weight: bold;
    color: #00579D;

    overflow: auto;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;

    div {
        width: 100%;
        padding: 1vh;
        border-bottom: 0.1vh solid #c3c3c3;

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;

        h1 {
            font-size: 2.4vh;
        }

        button {
            border: 0;
            background-color: transparent;
            padding: 0vh;

        }

        svg {          
            width: 1.2em;
            height: 1.2em;
            color: red;

            &:hover {
                opacity: 0.8;
                cursor: pointer;
            }

            &:active {
                opacity: 0.7;
            }
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.25);
        }
    }
`;