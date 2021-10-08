import styled, { css } from 'styled-components';

interface subtittleProps {
    tipo?: string;
}

export const Subtittles = styled.h1<subtittleProps>`
    width: 100%;
    height: 7vh;
    position: absolute;

    font-size: 3.4vh;
    color: #00579D;
    font-weight: bold;

    &::after {
        content: '';
        width: 40vw;
        height: 0.2vh;
        color: #d3d3d3;
        position: absolute;
    }

    ${props => props.tipo === "ProjectData" && css`
       width: 40vw;
    `}
`;