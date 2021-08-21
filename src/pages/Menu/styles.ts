import styled from "styled-components";
import { shade } from "polished";

import Complete from "../../assets/complete.svg";
import Up from "../../assets/up.svg";
import Down from "../../assets/down.svg";

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
    box-shadow: 0.25vh 0.25vh rgb(0, 0, 0, 0.25);
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
        background-image: linear-gradient( to left, 
            #64C3D5 15%, #fff 10%, #fff 18%,
            #0091BD 19.3%, #0091BD 32%, #fff 30.6%, #fff 34.6%,
            #005DA5 35.6%, #005DA5 49%, #fff 40%, #fff 53%,
            #00579D 53%, #00579D 65.1%, #fff 65.1%, #fff 69.1%,
            #0075B1 70%, #0075B1 83%, #fff 80%, #fff 88%,
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


export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        font-size: 8vh;
        color: #00579D;
        text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.25);
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
        width: 1.8vh;
        height: 8.4vh;
        margin-right: 2vw;
        background-image: linear-gradient( to bottom, 
            #64C3D5 12.3%, #fff 15%, #fff 18%,
            #0091BD 19.3%, #0091BD 30.6%, #fff 30.6%, #fff 34.6%,
            #005DA5 36.6%, #005DA5 47.9%, #fff 47.9%, #fff 51.9%,
            #00579D 54.9%, #00579D 65.1%, #fff 65.1%, #fff 69.1%,
            #0075B1 72.1%, #0075B1 82.4%, #fff 82.4%, #fff 86.4%,
            #6AACDA 89.4%, #6AACDA 100%);
    }
    `;

export const Card = styled.div`
    width: 33%;
    height: 22vh;

    padding: 0.15vw;
    margin-left: 1vw;
    margin-right: 1vw;

    border: 0.2vh solid #00579D;
    border-radius: 0.8vh;

    box-shadow: 0vh 0.4vh 0.4vh rgb(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        width: 100%;
        margin: 1.2vh 0 1.2vh 1vh;
        
        h2 {
            font-size: 2.5vh;
            color: #00579D;

            text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.25);
        }

        p {
            font-size: 1.6vh;
            color: #2382BA;
            text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.25);
            
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
    background-color: rgb(226, 226, 226);
    border: 0.1vh solid rgb(167, 167, 167);
    border-top: 0;
    border-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #bar1 {
        height: 23.5vh;
        margin-top: 0vh;
        margin-left: 1vw;
    }

    #bar2 {height: 18.7vh; margin-top: 4.8vh;}
    #bar3 {height: 5vh; margin-top: 18.5vh;}
    #bar4 {height: 9.5vh; margin-top: 14vh;}
    #bar5 {height: 19vh; margin-top: 4.5vh;}
    #bar6 {height: 23.5vh; margin-top: 0vh;}
    
    #bar7 {
        height: 18.7vh;
        margin-top: 4.8vh;
        margin-right: 1vw;
    }
`;

export const Bar = styled.div`
    width: 4vw;
    background-color: #00579D;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;

    &:hover {
        background-color: ${shade(0.1, 'rgb(0, 79, 139)')}
    }
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
        width: 0.1vw;
        height: 3vh;
        margin-top: -3.5vh;
        background-color: rgb(167, 167, 167);;
        display: flex;
        position: absolute;
        z-index: 2;
    }
`;