import styled from "styled-components";

import Popup from 'reactjs-popup';

import Lupa from '../../assets/lupa-graph.svg';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
`;

export const ContainerDashboard = styled.div`
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Liquid = styled.div`
    width: 24vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;


export const Lines = styled.div`
    width: 54vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const Card = styled.div`
    width: 20vw;
    height: 38vh;

    border-radius: 0.8vh;
    overflow: hidden;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const Money = styled.div`
    width: 12vw;
    height: 14vh;

    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    overflow: hidden;
    border-radius: 0.8vh;

    background-color: white;

    h1 {
        color: #00579D;
        font-size: 2.6vh;
        
        display: flex;
        justify-content: center;

        margin-top: 3vh;
    }
`;

export const Title = styled.div`
    width: 100%;
    padding: 1vh;

    border-radius: 0.8vh 0.8vh 0 0;
    background-color: #00579D;

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    h1 {
        margin-top: 0;
        color: white;
        font-size: 2.6vh;
    }

    span {
        width: 1.8vw;
        height: 2.6vh;

        position: absolute;
        margin-left: 17vw;
        border-radius: 0.6vh;

        background-size: cover;
        background-position: center;
        background-image: url(${Lupa});

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
    }
`;

export const PopupModal = styled(Popup)`
    &-content {
        background: rgba(0, 0, 0, 0.5);
        animation: anvil 0.2s;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PopupTooltip = styled(Popup)`
    &-content {
        background: transparent;
        animation: anvil 0.2s;
        margin-left: 0.2vw;
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

export const Graph = styled.div`
    position: absolute;
    width: 12vw;

    div {
        height: 25vh;
    }
    
    margin-top: 4vh;
    margin-left: 4vw;
`;

export const GraphLine = styled.div`
    width: 100%;
    height: 62vh;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    overflow: hidden;
    border-radius: 0.8vh;
`;

export const Line = styled.div`
    width: 100%;
    height: 41vh;

    background: white;
`;

export const Filtros = styled.div`
    width: 100%;
    height: 8vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        &:first-child {
            margin-left: 3vw;
        }

        &:last-child {
            margin-right: 3vw;
        }

        form {
            button {
                border: 0;
                padding: 0.8vh;
                font-size: 2vh;
                margin-left: 0.3vw;
                border-radius: 0.8vh;
                background-color: rgba(212, 212, 212, 0.3);
                color: #575757;

                &:nth-child(1) {
                    background-color: rgba(212, 212, 212, 0.7);
                }

                &:hover {
                    cursor: pointer;
                    background-color: rgba(212, 212, 212, 0.5);
                }
            }
        }

        input {
            width: 12vw;
            padding: 0.5vh;
            padding-left: 1vh;

            border: 0.2vh solid #ccc;

            color: #00579D;

            ::placeholder {
                font-size: 1.8vh;
                color: rgb(0, 0, 0, 0.4);
            }
        }

        label {
            color: #00579D;
            font-size: 2.2vh;
            margin-right: 1vw;
        }

        select {
            width: 9vw;

            font-size: 1.8vh;
            padding: 0.5vh;

            color: #575757;
            border: 0.2vh solid #c4c4c4;
        }
    }

    #filtro-periodo {
        margin-left: 42.5vw;
    }
`;

export const CardsMoney = styled.div`
    width: 100%;
    height: 14vh;

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    div {
        form {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                width: 3vw;
                height: 4vh;

                display: flex;
                justify-content: center;

                border: 0;
                background: transparent;
                color: #00579d;
                opacity: 0.6;
                font-size: 2.6vh;
                font-weight: bold;
                margin-top: 2.6vh;    
                
                &:nth-child(1) {
                    opacity: 1;
                    margin-left: 1vw;
                    margin-right: 0.5vw;
                }

                &:nth-child(3) {
                    margin-left: 0.5vw;
                    margin-right: 1vw;
                }
                            
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    #icon-eye {
        width: 4vh;
        height: 5vh;
        margin-top: 2vh;
        margin-left: 8vw;

        color: #00579D;

        &:hover {
            cursor: pointer;
            color: rgb(0, 87, 157, 0.95)
        }
    
        &:active {
            color: rgb(0, 87, 157, 0.85);
        }        
    }

    #money {
        div {
            &:last-child {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
            }            
        }
    }
`;
