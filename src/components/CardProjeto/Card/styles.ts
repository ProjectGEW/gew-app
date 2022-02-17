import styled, { css } from "styled-components";

interface StatusProps {
    statusColor: string;
}

interface ProgressValue {
    value: number;
}

export const Card = styled.div`
    width: 36vw;
    height: 20vh;

    margin-top: 3vh;
    
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const CardStatus = styled.div<StatusProps>`
    width: 1vw;
    height: 100%;

    border-radius: 5px 0px 0px 5px;
    display: flex;
    flex-direction: row;

    ${props => props.statusColor === "ATRASADO" && css`background-color: red;`}

    ${props => props.statusColor === "NAO_INICIADO" && css`background-color: grey;`}

    ${props => props.statusColor === "EM_ANDAMENTO" && css`background-color: #00579D`}

    ${props => props.statusColor === "CONCLUIDO" && css`background-color: #1FB712`}
`;

export const CardBox = styled.div`
    width: 35vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.5vh;

    border: 0.1vh solid rgb(0, 0, 0, 0.15);
    border-left: 0;
    border-radius: 0px 5px 5px 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    transition: all 0.2s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
    }
`;

export const BoxLeft = styled.div`
    width: 24vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        padding: 2px;

        strong { 
            color: #222;
            margin-right: 1vw;
        }

        p {
            font-size: 2vh;
            padding: 2px;
            padding-left: 10px;
            color: #5B5B5B;

            strong {
                font-weight: 500;
                color: #000
            }
        }

        h1 {
            font-size: 2.1vh;
            font-weight: bold;
            padding-top: 2px;
            padding-left: 10px;
        }

        &:first-child p:first-child {
            color: #229FC6;
        }

        &:last-child {
            flex-direction: row;
        }
        
        &:last-child p:last-child {
            margin-left: 4vw;
        }
        
        &:last-child p {
            color: #787676;
        } 
    }
`;

export const BoxRight = styled.div` 
    width: 13vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div {
        display: flex;
        flex-direction: column;
        padding: 5px;

        strong { 
            color: #000;
            font-weight: 500;
            margin-right: 0.2vw;
        }

        p {
            font-size: 2vh;
            padding: 2px;
            padding-left: 0.6vw;
            text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.05);
            color: #5B5B5B;

            display: flex;
            align-items: center;
        }

        h1 {
            font-size: 2.2vh;
            font-weight: bold;
            padding-top: 2px;
            padding-left: 12px;
        }

        &:first-child strong {
            margin-left: 0.4vw;
        }

        &:last-child p:last-child {
            text-align: left;
        }
        
        &:last-child p {
            color: #5B5B5B;
        }
        
        &:last-child strong {
            font-weight: 500;
        }

        &:last-child {
            padding: 0;
            margin-bottom: 0.8vh;

            svg {
                color: #229FC6;
                margin-right: 0.2vw;
            }
        }
    }
`;

export const Progress = styled.span`
    width: 10vw;
    height: 1.5vh;

    border-radius: 0.1vh;

    background: #d4d4d4;
    margin-top: 1vh;
    margin-left: 0.655vw;

    display: flex;
    flex-direction: row;
    justify-content: left;
`;

export const Value = styled.div<ProgressValue>`
    width: ${props => props.value}%;
    height: 1.5vh;

    border-radius: 0.1vh 0vh 0vh 0.1vh;

    display: flex;
    background: #47cf25;
`;