import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
`