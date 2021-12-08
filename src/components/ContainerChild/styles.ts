import styled, { css } from 'styled-components';

interface containerProps {
    tipo?: string;
}
export const Container = styled.div<containerProps>`
    width: 70vw;
    height: 68vh;

    ${props => props.tipo === "EditLeft" && css`
        width: 47.5vw;
        height: 107.5vh;
        margin: 10vh 0 0 5vh;
    `}

    ${props => props.tipo === "EditRight" && css`
        width: 23.5vw;
        height: 107.5vh;
        margin: 10vh 0 0 5vh;
    `}
`;