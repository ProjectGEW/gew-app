import { shade } from 'polished';
import styled from 'styled-components';
import Close  from '../../../assets/close.svg';
import Ata from '../../../assets/ata.svg';
import Dashboard from '../../../assets/dashboardIcon.svg';

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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
    }
    h1 {
        font-size: 0.5em;
    }

    h2 {
        font-size: 0.48em;
        color: #737373;
        margin-left: 1vh;
        margin-top: 0.2vh;
    }

    input[type='file'] {
        display: none;
    }
          
    label {
        width: 10vw;
        background-color: #0075B1;
        border-radius: 0.5vh;
        color: #fff;
        margin-right: 3vw;
        padding: 1vh;
        padding-left: 4vh;
        font-size: 1.5vh;
        font-weight: bold;
        cursor: pointer;  
        box-shadow: 0.3vh 0.3vh 0.4vh rgb(0, 0, 0, 0.3);

        &:hover {
            background-color: ${shade(0.3, "#0075B1")}
        }

        &::before {
            content: '';
            width: 1.2vw;
            height: 2.2vh;
            position: absolute;
            margin-top: -0.2vh;
            margin-left: -3.2vh;

            background-image: url(${Ata});
            background-size: cover;
            background-position: center;
        }
    }

    &:nth-child(4) {
        label {
            &::before{
                background-image: url(${Dashboard});
            }
        }
    }

    &:nth-child(2) {
        margin-top: 4vh;
        margin-bottom: 2vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: 0.7em;
            color: #229FC6;
        }

        h3 {
            font-size: 0.5em;
            margin-right: 3.4vw;
        }
    }
`;

export const ContainerObjectives = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4vh;
    margin-right: 3vw;
    text-align: justify;

    h1 {
        font-size: 2.4vh;
        font-weight: bold;
    }

    h2 {
        font-size: 2.1vh;
        font-weight: normal;
        margin-top: 1.4vh;
    }
`;

export const ContainerValues = styled.div`
    margin-top: 18vh;
    align-text: center;

    &:nth-child(1) {
        margin-top: 0vh;
    
        div {
            margin-bottom: 2vh;
        }
    }
    div {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.4vh;

        h1 {
            font-size: 0.55em;
            font-weight: bold;
        }
    
        h2 {
            font-size: 0.57em;
            color: #737373;
            font-weight: normal;
            margin-left: 1vh;
            margin-top: 0.2vh;
        }   
    }
`;

export const ModalContainerGraphs = styled.div`
    display: flex;
    flex-direction: column;   
    width: 36.5%;
    height: 100%;
`;

export const HourGraphics = styled.div`

`;