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
        width: 34vw;
        height: 0.2vh;
        background-color: #d3d3d3;
        position: absolute;
        margin: 5vh 0 0 -15vw;
    }

    ${props => props.tipo === "ProjectData" && css`
       width: 34vw;
    `}
`;