import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const BoxDados = styled.div`
    display: flex;
    background-color: red;
    flex-direction: row;

    div {
        width: 100%;
        display: flex;
        background-color: orange;
    }
`;

export const Info = styled.div`
    background-color: red;
`;

export const Content = styled.div`
    background-color: red;
`;