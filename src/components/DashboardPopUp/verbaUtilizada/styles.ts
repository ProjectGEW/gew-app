import styled, { css } from "styled-components";

import Popup from 'reactjs-popup';

import Close from '../../../assets/close.svg';

interface GraphBarProps {
    valor: number;
}

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
    height: 40vh;
    background: #fff;
    border-radius: 0.8vh;
    //overflow: hidden;

    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 

    .projeto {       
        width: 95%;

        margin-top: 0vh;         
        margin-left: 1vw;
        margin-right: 1vw;

        font-size: 2.5vh;
        color: #00579D;

        border-bottom: 0.1vh solid #ccc;

        &:hover {
            background-color: rgba(220, 220, 220, 0.25);
        }

        p {
            &:nth-child(1) {
                width: 17.5vw;
                border-right: 0.1vh solid #c4c4c4;
                color: #484848;
            }
        }

        font-weight: bold;
        padding: 1.4vh;
        padding-top: 2vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Texto = styled.p`
    background-color: #c2e4ff;
    padding: 1vh;
    border-radius: 0.8vh;
    font-size: 2.5vh;
    font-weight: bold;
    color: #00579D;
`;

export const P = styled(Popup)`
    p {
        width: auto;    
    }

    &-content {
        background: transparent;
        animation: anvil 0.2s;
    }

    .popup-arrow {
        color: #c2e4ff;
        stroke-width: 1px;
        stroke: rgba(0, 0, 0, 0.16);
        stroke-dasharray: 30px;
        stroke-dashoffset: -54px;
    }

    @keyframes anvil {
        0% {
            opacity: 0;
            box-shadow: 0 0 0 rgba(241, 241, 241, 0);
        }
        100% {
            opacity: 1;
            box-shadow: 0 0 500px rgba(241, 241, 241, 0);
        }
    }
`;

export const Scroll = styled.div`
    width: 35vw;
    height: 25vh;

    display: flex;
    flex-direction: column;
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

    #info {
        font-size: 2.6vh;
        color: #575757;
        margin: 2vh;
    }
`;

export const Title = styled.div`
    width: 35vw;
    padding: 1vh;
    background: #00579D;

    display: flex;
    flex-direction: row;

    h1 {
        color: #fff;
        font-size: 3vh;
        margin-left: 0.5vw;
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

export const Graph = styled.div`
    width: 35vw;
    height: 10vh;
 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Bar = styled.div`
    width: 32vw;
    height: 6vh;
    background: white;
    box-shadow: 0 0 0.1vh 0.1vh #aaa;

    display: flex;
    flex-direction: row;
`;

export const Value = styled.div<GraphBarProps>`
    width: calc(${props => props.valor}vw * 0.3195);
    height: 6vh;
    background: linear-gradient(to right, #006FC8, #0090C5, #28B9DA);

    display: flex;
    
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 3vh;
        margin-left: 0.8vw;
    }

    ${props => props.valor <= 10 && css`
        h1 {
            color: #00579D;
        }
    `}


    &::after {
        //content: '${props => props.valor}%';
        width: 2vw;
        height: 2vh;
        margin-top: 0.8vh;
        margin-left: calc(${props => props.valor}vw * 0.4);
        position: absolute;
        color: #00579D;
        font-weight: bold;
        font-size: 4vh;
    }
`;