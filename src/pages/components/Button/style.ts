import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface buttonProps {
    tipo: string;
}

export const Container = styled.div<buttonProps>`
    button {
        height: 5vh;

        padding: 0 3vh;

        margin-top: 35vh;
        margin-left: 27vw;

        border: 0;
        border-radius: 0.5vh;

        font-size: 2.6vh;
        color: white;
        font-weight: bold;
        background-color: #00579D;

        &:hover {
            background-color: ${shade(0.09, "#00579D")}
        }
    }

    ${props => props.tipo === "PopUp" && css`
        button {
            position: absolute;
            margin-top: 75vh;
            margin-right: 10vh;
            width: 12vw;
            height: 5vh;
        }
    
    `}
`