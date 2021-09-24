import styled, { css } from "styled-components";
import { TranspileOptions } from "typescript";

interface ListRoute {
    tipo?: string;
}

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const Arrow = styled.div`
    width: 100%;
    height: 4vh;
    padding: 0.4vh 0 0 1.2vw;

    svg {
        width: 4vh;
        height: auto;
        color: #787676;
        cursor: pointer;
    }

`;

export const Tittle = styled.h1`
    width: 100%;
    height: 6vh;
    padding-left: 3.8vw;

    color: #005DA5;
    font-weight: bold;
    font-size: 3.8vh;

`;

export const Table = styled.table`
    width: 70vw;
    border-spacing: 0;

    tr {
        height: 8vh;
    }

    td {
        padding: 0.7vh 0 0 1vw;
        border-bottom: 0.1vh solid #c4c4c4;
        font-size: 2.1vh;

        button {
            width: 6vw; 
            height: 3.6vh;
            background: #005DA5;
            border: none;
            border-radius: 1vh;
            color: #fff;
            font-size: 1.8vh;
            font-weight: bold;
        }
    
        &:first-child {
            &:before {
                content: '|';
                color: limegreen;
                font-size: 3.4vh;
                padding-top: -1vh;
                padding-bottom: 1vh;
                margin: 0 1vw 0 -0.8vw;
                background: limegreen;
                border-radius: 0 0.4vh 0.4vh 0;
            }
        }

        &:nth-child(2) {
            color: limegreen;
            font-weight: bold;
        }
    }

    #header {
        width: 70vw;
        height: 5.4vh;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #005DA5;
        font-weight: bold;
        font-size: 2.4vh;
        border: 0.1vh solid #c4c4c4;
        border-radius: 1vh 1vh 0 0;

        color: #fff;
    }

    #column {
        margin-top: 8vh;
        height: 6vh;
    }

    .cadastro {
        width: 10vw;
    }

    .status {
        width: 10vw;
    }

    .nome {
        width: 30vw;
    }

    .projetos {
        width: 10vw;

        select {
            border: 0;
        }
    }

    .atribuicao {
        width: 8vw;
    }
`;

export const TableDimensions = styled.div<ListRoute>`
    width: 90%;
    margin: 1vh 0 0 5%;
    height: 64vh;
    overflow: hidden ;

    ${props => props.tipo === "Perfil" && css`
        height: 30vh;
        margin-top: 4vh;
    `}
`;

export const TableScroll = styled.div`
    width: 70vw;
    height: 60vh;
    margin-top: 5vh;

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