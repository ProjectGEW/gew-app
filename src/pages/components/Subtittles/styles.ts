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

    ${props => props.tipo === "RegisterProjectData" && css`
        margin-top: -7vh;
        font-size: 3vh;
        text-shadow: 0.2vh 0.2vh rgba(94, 94, 94, 0.1);

        &::after {
            margin: 4.4vh 0 0 -13vw;
        }
    `}

    ${props => props.tipo === "Encharged" && css`
        margin-top: -3vh;
        font-size: 3vh;
        text-shadow: 0.2vh 0.2vh rgba(94, 94, 94, 0.1);

        &::after {
            margin: 4.4vh 0 0 -11vw;
        }
    `}

    ${props => props.tipo === "Costs" && css`
        margin-top: -7vh;
        font-size: 3vh;
        text-shadow: 0.2vh 0.2vh rgba(94, 94, 94, 0.1);

        &::after {
            margin: 4.4vh 0 0 -7vw;
        }
    `}

    ${props => props.tipo === "Dates" && css`
        margin-top: -7vh;
        font-size: 3vh;
        text-shadow: 0.2vh 0.2vh rgba(94, 94, 94, 0.1);

        &::after {
            margin: 4.4vh 0 0 -7vw;
        }
    `}

    ${props => props.tipo === "DatesEdit" && css`
        margin-top: -7vh;
        font-size: 3vh;
        text-shadow: 0.2vh 0.2vh rgba(94, 94, 94, 0.1);

        &::after {
            margin: 4.4vh 0 0 -7vw;
        }
    `}
`;