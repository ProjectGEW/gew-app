import styled from "styled-components";

export const ContainerMenuRight = styled.div`
    width: 30vw;
    height: 76vh;
    margin: 16.5vh 0 0 80vw;
    display: flex;
    flex-direction: column;
    position: fixed;

    #first { 
        background-color: #00579D;
    }

    #second { 
        background: linear-gradient(to bottom, #00579D, #0075B1); 
    }

    #three { 
        background-color: #0075B1;
    }

    #four { 
        background: linear-gradient(to bottom, #0075B1, #0091BD); 
    }

    #first { border-radius: 0.5vh 0 0 0; }

    #six { 
        border-radius: 0 0 0 0.5vh; 
        background: linear-gradient(to bottom, #0091BD, #009ecf); 
    }

    a:hover {
        transform: translateX(-5vh);
        opacity: 0.9;
    }

    a {
        transition: all 0.2s;
    }
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

    p {
        color: #fff;
        font-size: 2.5vh;
        font-weight: 600;
        margin-left: 3vw;
        font-family: Arial, Helvetica, sans-serif;
    }
`;