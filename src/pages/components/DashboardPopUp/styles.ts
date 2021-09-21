import styled from "styled-components";

import Arrow from '../../../assets/arrow_grey.svg';
import Close from '../../../assets/close.svg';

interface GraphBarProps {
    valor: number;
}

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PopUp = styled.div`
    width: 35vw;
    height: 40vh;
    background: #fff;
    border-radius: 0.8vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    .projeto {       
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
                width: 14.5vw;
                color: #484848;
                border-right: 0.1vh solid #ccc;

                &::after {
                    content: '';
                    width: 0.2vh;
                    height: 3vh;
                    margin-left: 3vw;
                    position: absolute;
                    //background-color: #ccc;
                }
            }

            &:nth-child(2) {
                &::after {
                    content: '';
                    width: 2vw;
                    height: 2vh;
                    margin-top: 0.4vh;
                    margin-left: 2vw;
                    position: absolute;
                    //background-image: url(${Arrow});
                    background-position: center;
                    background-size: cover;
                }
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

export const Scroll = styled.div`
    width: 35vw;
    height: 25vh;

    display: flex;
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
    
    justify-content: center;

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
