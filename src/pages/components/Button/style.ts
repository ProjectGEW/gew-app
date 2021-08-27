import styled, {css} from 'styled-components';
import { shade } from 'polished';

import Search from '../../../assets/search.svg';

interface buttonProps {
    tipo?: string;
}
export const Container = styled.div<buttonProps>`
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

    ${props => props.tipo === "PopUp" && css`
        button {
            margin-left: 12vw;
            margin-top: 2.8vh;
        }
    `}

    ${props => props.tipo === "Lupa" && css`
        button {
            padding: 2.5vh;

            margin-top: -8vh;
            margin-left: 22vw;

            &::after {
                content: '';
                width: 1.8vw;
                height: 3vh;

                position: absolute;
                margin-top: -1.5vh;
                margin-left: -0.9vw;

                background-image: url(${Search});
                background-position: center;
                background-size: cover;
            }
        }
    `}

    ${props => props.tipo === "Projeto" && css`
        button {
            position: absolute;
            margin-top: 32vh;
            margin-left: 26vw;
        }
    `}

    ${props => props.tipo === "Responsavel" && css`
        button {
            position: absolute;
            margin-top: 22.6vh;
            margin-left: 26vw;
        }
    `}
`;
