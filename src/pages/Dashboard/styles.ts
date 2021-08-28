import styled from "styled-components";

import Lupa from '../../assets/lupa-graph.svg';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
`;

export const ContainerDashboard = styled.div`
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Liquid = styled.div`
    width: 24vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;


export const Lines = styled.div`
    width: 54vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const Card = styled.div`
    width: 20vw;
    height: 38vh;

    border-radius: 0.8vh;
    overflow: hidden;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const Money = styled.div`
    width: 12vw;
    height: 14vh;

    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    overflow: hidden;
    border-radius: 0.8vh;

    background-color: white;

    h1 {
        color: #00579D;
        font-size: 2.6vh;
        
        display: flex;
        justify-content: center;

        margin-top: 3vh;
    }
`;

export const Title = styled.div`
    width: 100%;
    padding: 1vh;

    border-radius: 0.8vh 0.8vh 0 0;
    background-color: #00579D;

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    h1 {
        margin-top: 0;
        color: white;
        font-size: 2.6vh;
    }

    span {
        width: 1.8vw;
        height: 2.6vh;

        position: absolute;
        margin-left: 17vw;
        border-radius: 0.6vh;

        background-size: cover;
        background-position: center;
        background-image: url(${Lupa});

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
    }
`;

export const Graph = styled.div`
    position: absolute;
    width: 12vw;

    div {
        height: 25vh;
    }
    
    margin-top: 4vh;
    margin-left: 4vw;
`;

export const GraphLine = styled.div`
    width: 100%;
    height: 62vh;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    overflow: hidden;
    border-radius: 0.8vh;
`;

export const CardsMoney = styled.div`
    width: 100%;
    height: 14vh;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;
