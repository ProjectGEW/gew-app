import styled from 'styled-components';
import Close  from '../../../assets/close.svg';

const ModalContainer = styled.div`
    background-image: linear-gradient(to bottom, #00579d, #00579d 5%,
        rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.2) 5%, #fff 5.4%, #fff 100%);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`
    border-radius: 1vh;
    box-shadow: 0 0 32px rgba(0,0,0,0.5);
    padding: 5vh;
    padding-top: 10vh;
    width: 70vw;
    height: 86.5vh;
    font-size: 26px;

    button {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        position: absolute;
        background-size: cover;
        top: 0.2vh;
        right: 1vw;
    }
`;

export const ModalContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    margin-right: 3.5%;

    span {
        font-size: 0.9em;
        font-weight: bold;
    }
`;

export const ContainerBox = styled.div`
    width: 100%;
    height: 5vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    margin-top: 1vh;
`;

export const ModalContainerGraphs = styled.div`
    display: flex;
    flex-direction: column;   
    background-color: #c4c4c4; 
    width: 36.5%;
    height: 100%;
`;
