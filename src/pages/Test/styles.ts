import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

    h1 {
        color: #00579D;
        font-size: 4vh;
        margin-bottom: 2vh;
    }

    input {
        width: 14vw;
        height: 5vh;
        margin-bottom: 2vh;

        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;
    }

    button {
        height: 5vh;

        padding: 0 3vh;
        border: 0;
        border-radius: 0.5vh;

        font-size: 2.6vh;
        color: white;
        font-weight: bold;
        background-color: #00579D;

        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        &:hover {
            background-color: ${shade(0.09, "#00579D")}
        }
    }

    div {
        display: flex;
        flex-direction: row;
        margin-top: 2vh;
        input[type='file'] { display: none; }
            
        label {
            height: 5vh;
            background-color: #0090C5;
            display: flex;
            align-items: center;
            border-radius: 0.5vh;
            color: #fff;
            margin-left: 0.5vw;
            margin-right: 0.5vw;
            margin-bottom: 2vw;
            padding: 1vh;
            font-size: 1.5vh;
            font-weight: bold;
            cursor: pointer;  
            box-shadow: 0.3vh 0.3vh 0.4vh rgb(0, 0, 0, 0.3);

            &:hover {
                background-color: ${shade(0.09, "#0090C5")}
            }
        }
    }
`;