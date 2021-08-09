import styled from "styled-components";

export const ContainerMenuRight = styled.div`
    width: 30vw;
    height: 76vh;
    margin: 9.5vh 0 0 80vw;
    display: flex;
    flex-direction: column;
    position: fixed;
`;

export const ContIcons = styled.div`
    width: 100%;
    height: 12.3vh;
    margin-bottom: 0.3vh;
    background-color: #0091BD;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    &:nth-child(1), &:nth-child(2) { background-color: #00579D; }
    &:nth-child(3), &:nth-child(4) { background-color: #0075B1; }
    &:nth-child(1) { border-radius: 0.5vh 0 0 0; }
    &:nth-child(6) { border-radius: 0 0 0 0.5vh; }

    &:hover {
        transform: translateX(-5vh);
        opacity: 0.9;
    }

`;

export const Icon = styled.div`
    width: 5.5vh;
    heigth: 6vh;
    margin-left: 3vh;
`;

export const TextMenuRight = styled.div`
    width: 8vw;
    margin-left: 1.5vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    a {
        color: #fff;
        font-size: 2.5vh;
        font-weight: 600;
        margin-left: 3vw;
        font-family: Arial, Helvetica, sans-serif;
    }
`;