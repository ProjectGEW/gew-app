import styled, { css } from "styled-components";

import { shade } from "polished";
import Popup from 'reactjs-popup';

import Complete from "../../assets/complete.svg";
import Up from "../../assets/up.svg";
import Down from "../../assets/down.svg";

interface ValorGraphBar {
    valor: number;
}

export const ContainerHome = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 62vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const ContainerHomeTitle = styled.div`
    width: 95%;
    border-bottom: 0.3vh solid #00579D;
    align-items: center;

    display: flex;
    justify-content: space-between;

    h1 {
        margin-left: 0.8vw;
        margin-bottom: 1.2vh;
        color: #00579D;
        font-weight: 400;
        font-size: 2.5vw;

        strong {
            color: #00579D;
        }
    }

    span {
        width: 12vw;
        height: 3vh;
        margin-right: 1.5vw;
        background-image: linear-gradient(to left, 
            #64C3D5 15%, #fff 10%, #fff 19.3%,
            #0091BD 19.3%, #0091BD 33%, #fff 30%, #fff 37%,
            #005DA5 36%, #005DA5 50%, #fff 49%, #fff 54%,
            #00579D 54%, #00579D 67%, #fff 65.1%, #fff 71%,
            #0075B1 71%, #0075B1 84%, #fff 80%, #fff 88%,
            #6AACDA 10%, #6AACDA 100%);
    }
`;

export const ContainerHomeCards = styled.div`
    width: 95%;
    height: 30vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const GraphContainer = styled.div`
`;

export const Card = styled.div`
    width: 33%;
    height: 22vh;

    padding: 0.15vw;
    margin-left: 1vw;
    margin-right: 1vw;

    border: 0.2vh solid #00579D;
    border-radius: 0.8vh;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #FirstTitleCard, #SecondTitleCard, #ThirdTitleCard, #FirstVerbCard, #SecondVerbCard, #ThirdVerbCard {
        margin: 1.2vh 0 0vh 1vh;
    }

    div {
        width: 100%;

        h2 {
            font-size: 2.5vh;
            color: #00579D;

            text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.09);
        }

        p {
            margin-top: -3vh;

            font-size: 1.6vh;
            color: #2382BA;
            text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.09);
            
            display: flex;
            align-items: center;

            strong {
                color: #00579D;
                margin-right: 0.5vw;
            }

            #icon-eye {
                width: 2.2vh;
                height: 2.3vh;
                margin-left: 0.5vw;

                color: #00579D;

                &:hover {
                    cursor: pointer;
                }
            
                &:active {
                    color: rgb(0, 87, 157, 0.8);
                }
                
            }
        }
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.2vh 0 0vh 1vh;

    h1 {
        margin-top: -1vh;
        font-size: 7vh;
        color: #00579D;
        text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.09);

        & + div {
            position: absolute;
            width: 6vw;

            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: -2vh;
            margin-left: 9.8vw;
        }
    }

    #complete::after {
        content: '';
        width: 3vw;
        height: 4vh;
        position: absolute;
        margin-top: 3vh;
        background-size: cover;
        background-position: center;
        background-image: url(${Complete});
    }

    #up::after {
        content: '';
        width: 3vw;
        height: 4vh;
        position: absolute;
        margin-top: 3vh;
        margin-left: 0.1vw;
        background-size: cover;
        background-position: center;
        background-image: url(${Up});
    }

    #down::after {
        content: '';
        width: 3vw;
        height: 4vh;
        position: absolute;
        margin-top: 3vh;
        margin-left: 0.1vw;
        background-size: cover;
        background-position: center;
        background-image: url(${Down});
    }

    span {
        width: 1.6vh;
        height: 12vh;
        margin-top: -3vh;
        margin-right: 1.5vw;
        background-image: linear-gradient(to bottom, 
            #64C3D5 15%, #fff 10%, #fff 19.3%,
            #0091BD 19.3%, #0091BD 33%, #fff 30%, #fff 37%,
            #005DA5 36%, #005DA5 50%, #fff 49%, #fff 54%,
            #00579D 54%, #00579D 67%, #fff 65.1%, #fff 71%,
            #0075B1 71%, #0075B1 84%, #fff 80%, #fff 88%,
            #6AACDA 10%, #6AACDA 100%);
    }

    div {        
        height: 12vh;
    }

`;

export const ContainerHomeGraph = styled.div`
    width: 92.5%;
    height: 35vh;
    border-radius: 0.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GraphTitle = styled.div`
    width: 100%;
    background-color: #00579D;
    border-radius: 0.8vh 0.8vh 0 0;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 2.5vh;
        padding: 5px;
    }
`;

export const Graph = styled.div`
    width: 100%;
    height: 45vh;   
    border: 0.2vh solid #00579D;
    border-radius: 0 0 0.8vh 0.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const GraphCont = styled.div`
    width: 5vw;
    height: 28vh;
    margin-top: -2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const GraphContNum = styled.div`
    width: 5vw;
    height: 28vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    color: #555555;
    font-size: 2.8vh;

    &::after {
        content: "";
        width: 42vw;
        height: 0.1vh;
        margin-left: 45vw;
        background-color: rgb(167, 167, 167);
        display: flex;
        position: absolute;
        z-index: 1;
    }
`;

export const GraphBars = styled.div`
    width: 41vw;
    height: 23vh;
    margin-top: -2vh;
    background-color: rgba(226, 226, 226, 0.6);
    border: 0.1vh solid rgb(167, 167, 167);
    border-top: 0;
    border-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #bar1 {
        margin-left: 1.2vw;
    }

    #bar7 {
        margin-right: 0.7vw;
    }
`;

export const Bar = styled.div<ValorGraphBar>`
    width: 4vw;
    background-color: #00579D;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;

    &:hover {
        background-color: ${shade(0.03, 'rgb(0, 79, 139)')}
    }

    ${props => props.valor === 1 && css`
        height: 4.7vh;
        margin-top: 18.5vh;
    `}

    ${props => props.valor === 2 && css`
        height: 9.5vh;
        margin-top: 14vh;
    `}

    ${props => props.valor === 3 && css`
        height: 14.5vh;
        margin-top: 9.5vh;
    `}

    ${props => props.valor === 4 && css`
        height: 19.5vh;
        margin-top: 5vh;
    `}

    ${props => props.valor >= 5 && css`
        height: 23.5vh;
        margin-top: 0vh;
    `}
`;

export const GraphData = styled.div`
    width: 37vw;
    margin-top: -4vh;
    margin-left: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Data = styled.div`
    font-size: 2vh;
    font-weight: bold;
    color: #555555;
    display: flex;
    justify-content: center;

    &::after {
        content: "";
        width: 0.15vw;
        height: 3vh;
        margin-top: -3.5vh;
        background-color: rgb(167, 167, 167);;
        display: flex;
        position: absolute;
        z-index: 2;
    }
`;

export const PopupTooltip = styled(Popup)`
    &-content {
        background: transparent;
        animation: anvil 0.2s;
    }

    .popup-arrow {
        color: #c2e4ff;
        stroke-width: 1px;
        stroke: rgba(0, 0, 0, 0.16);
        stroke-dasharray: 30px;
        stroke-dashoffset: -54px;
    }

    @keyframes anvil {
        0% {
            opacity: 0;
            box-shadow: 0 0 0 rgba(241, 241, 241, 0);
        }
        100% {
            opacity: 1;
            box-shadow: 0 0 500px rgba(241, 241, 241, 0);
        }
    }
`;

export const PopupGraphBar = styled.div`
    background-color: #c2e4ff;
    padding: 1vh;
    border-radius: 0.8vh;
    font-size: 2vh;
    font-weight: bold;
    color: #00579D;
`;