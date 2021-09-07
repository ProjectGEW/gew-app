import styled, {css} from 'styled-components';
import { shade } from 'polished';

import Search from '../../../assets/search.svg';
import Data from '../../../assets/data.svg';

interface buttonProps {
    tipo?: string;
}
export const Container = styled.div<buttonProps>`
    button {
        height: 5vh;

        padding: 0 3vh;
        border: 0;
        border-radius: 0.5vh;

        font-size: 2.4vh;
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

    ${props => props.tipo === "PopUpDashBoard" && css`
        button {
            height: 5vh;
            background-color: #0090C5;
            font-size: 2vh;

            &:hover {
                background-color: ${shade(0.09, "#0090C5")}
            }
        }
    `}

    ${props => props.tipo === "DashboardDetails" && css`
        button {
            width: 10vw;
            background-color: #0090C5;
            margin-right: 3vw;
            margin-bottom: 0.5vw;
            padding: 0vh 2vh;
            font-size: 2vh;
            font-weight: bold;
            cursor: pointer;  
            box-shadow: 0.3vh 0.3vh 0.4vh rgb(0, 0, 0, 0.3);

            &:hover {
                background-color: ${shade(0.09, "#0090C5")}
            }
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

    ${props => props.tipo === "Data" && css`
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

                background-image: url(${Data});
                background-position: center;
                background-size: cover;
            }
        }
    `}

    ${props => props.tipo === "Projeto" && css`
        button {
            position: absolute;
            margin-top: 32.4vh;
            margin-left: 28vw;
        }
    `}

    ${props => props.tipo === "Responsavel" && css`
        button {
            position: absolute;
            margin-top: 23vh;
            margin-left: 28vw;
        }
    `}

    ${props => props.tipo === "Dinheiro" && css`
        button {
            position: absolute;
            margin-top: -9vh;
            margin-left: 52.5vw;
        }
    `}
`;
