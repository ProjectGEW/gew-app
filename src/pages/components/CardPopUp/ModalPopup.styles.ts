import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import Close  from '../../../assets/close.svg';
import Ata from '../../../assets/ata.svg';
import Dashboard from '../../../assets/dashboardIcon.svg';

const ModalContainer = styled.div`
    background-image: linear-gradient(to bottom, #00579d, #00579d 6%,
        rgba(0,0,0,0.2) 6%, rgba(0,0,0,0.2) 6%, #fff 6.4%, #fff 100%);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

/*const appearFrom = keyframes`
    from {
        opacity: 0.7;
        transform: translateY(100vh);
    } to {
        opacity: 1;
        transform: translateY(0vh);
    }
`;*/

export const DesktopModalContainer = styled(ModalContainer)`
    border-radius: 1vh;
    box-shadow: 0 0 32px rgba(0,0,0,0.5);
    padding: 10vh 0 6vh 10vh;
    width: 70vw;
    height: 86.5vh;
    font-size: 26px;
    z-index: 10;

    span {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        position: absolute;
        background-size: cover;
        top: 0.6vh;
        right: 0.8vw;
        cursor: pointer;
    }
`;

export const ModalContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    margin-right: 1.5%;

    h1 {
        height: 6vh;
        font-size: 1em;
        font-weight: bold;
        padding-right: 1vw;
        color: #222;
    }
`;

export const ContainerBox = styled.div`
    width: 100%;
    height: 5vh;
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
    }

    h1 { font-size: 0.58em; }

    h2 {
        font-size: 0.54em;
        font-weight: 200;
        color: #737373;
        margin-left: 1vh;
        margin-top: 0.2vh;

        &:nth-child(2) {
            margin-right: 6.8vh;
        }
    }

    input[type='file'] { display: none; }
          
    label {
        width: 10vw;
        height: 5vh;
        background-color: #0090C5;
        display: flex;
        align-items: center;
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
            background-color: ${shade(0.09, "#0090C5")}
        }

        &:nth-child(3) {
            &::before {
                background-image: url(${Dashboard});
            }
        }

        &::before {
            content: '';
            width: 1.1vw;
            height: 2.3vh;
            position: absolute;
            margin-top: -0.2vh;
            margin-left: -3.2vh;

            background-image: url(${Ata});
            background-size: cover;
            background-position: center;
        }
    }

    &:nth-child(2) {
        margin-top: 3vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: 0.68em;
            color: #229FC6;
        }

        h3 {
            font-size: 0.48em;
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
    width: 100%;
    height: 15vh;

    h1 {
        font-size: 2.3vh;
        font-weight: bold;
        color: #222;
    }

    h2 {
        font-size: 2vh;
        font-weight: normal;
        padding-right: 3vw;
        margin-top: -1.4vh;
        color: #222;
    }
`;

export const ContainerValues = styled.div`
    margin-top: 3.6vh;
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
        margin-bottom: 2vh;

        width: 19vw;
        justify-content: space-between;

        &:nth-child(4) {

            h1 {
                font-size: 0.64em;
            }

            margin-top: 3vh;

            &::before {
                content: '';
                width: 19vw;
                height: 0.1vh;
                background-color: #ccc;
                position: absolute;
                margin-top: -1.5vh;
            }
        }

        h1 {
            font-size: 0.58em;
            font-weight: bold;
            color: #222;
        }
    
        h2 {
            font-size: 0.57em;
            color: #444;
            font-weight: normal;
            margin-left: 1vh;
            margin-top: 0.2vh;
            text-align: right;
        }   
    }
`;

export const ModalContainerGraphs = styled.div`
    display: flex;
    flex-direction: column;   
    width: 38.5%;
    height: 100%;
`;

export const HourGraphics = styled.div`
    width: 18vw;
    height: 30vh;
`;

export const CostCenters = styled.div`
    width: 36vw;
    height: 22vh;
    margin-top: 3vh;
    border-radius: 2vh 2vh 0 0;
    background-color: rgba(196, 196, 196, 0.3);
    overflow: hidden;
    border: 0.01vh solid #ccc;
    border-top: 0;

    .tableHeader {
        top: 0;
        left: 0;
        width: 100%;
        height: 5vh;
        background-color: #00579d;
        border-radius: 1vh 1vh 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1.4vh;
        padding-right: 4vh;

        h2 {
            color: #fff;
            font-size: 1.8vh;
            font-weight: bold;

            &:first-child {
                margin-left: 1.8vw;
            }

            &:last-child {
                margin-right: 1vw;
            }
        }
    }

    .scroller {
        width: 100%;
        height: 17vh;
        overflow-y: auto;
    }

    .sc1::-webkit-scrollbar {
        width: 1vh;
        height: 1vh;
    }
    .sc1::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .sc1::-webkit-scrollbar-thumb {
        background-color: #c4c4c4;
        border-radius: 10px;
    }

    ul {
        width: 100%;
        height: auto;

        li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 1.4vh;
            padding-right: 4vh;
            border-bottom: 0.1vh solid #c4c4c4;

            h2 {
                font-size: 1.8vh;
                width: 12vw;
                font-weight: 100;
                color: #023A67;
                margin-left: 1.2vw;

                &:first-child {
                    margin-right: 6vh;
                    font-weight: bold;
                }
            }

            h3 {
                font-size: 1.9vh;
                color: #023A67;
                margin-right: 1.3vw;
            }
        }

        .row {
                width: 34.6vw;
                height: 0.2vh;
                margin-left: 1vh;
                background-color: #c4c4c4;
                position: relative;
        }
    }
`;

