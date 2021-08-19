import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-top: 5vh;

    label {
        width: 0vh;
        margin-top: -5vh;
        margin-left: -40vh;
        cursor: text;
        font-size: 2.5vh;
        padding: 1vh;
        color: #00579D;
        font-weight: bold;
        z-index: 0;
        transition: all 0.2s;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
`;

export const Line = styled.div`  
    width: 70vh;
    border-radius: 1vh 1vh 0 0;
    background: #00579D;
    height: 0.75vw;
`;

export const LoginCont = styled.div`
    width: 70vh;
    height: 70vh;
    margin-top: 15vh;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    flex-direction: column;
    border-radius: 1vh;
    border-left: 0.1vh solid rgba(0, 0, 0, 0.15);
    box-shadow: 0.4vh 0.4vh 0.4vh rgba(0, 0, 0, 0.4);

    img {
        width: 8.5vw;
        height: 12vh;
        position: absolute;
        margin-top: 10vh;
    }
`;

export const ContainerBottom = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

export const ContainerBtn = styled.div`
    width: 100%;
    height: 22vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    
    button {
        width: 7vw;
        height: 5vh;
        border-radius: 1vh;
        border: 0;
        margin-right: 7vh;
        text-transform: uppercase;
        font-weight: 600;
        background-color: #005DA5;
        color: white;
        font-size: 2.2vh;
        box-shadow: 0vh 1vh 1vh rgba(0, 0, 0, 0.25);

        &:hover {
            cursor: pointer;
            background-color: ${shade(0.1, 'rgb(0, 79, 139)')}
        }
    }

    a {
        color: #005DA5;
        font-size: 2.2vh;
        font-weight: bold;
        text-decoration: none;
    }
`;