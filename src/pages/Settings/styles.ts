import styled from "styled-components";
import { shade } from "polished";

export const ContainerHome = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh;
    padding-top: 2vh;

    background-color: #fff;
    box-shadow: 0.25vh 0.25vh rgb(0, 0, 0, 0.25);
    border-radius: 0.8vh;
`;

export const Container = styled.div`
    width: 100%;
    height: 20vh;

    border-bottom: 0.2vh solid #CCCCCC;

    &:last-child {
        border: 0;
    }

    &:first-child {
        justify-content: space-between;

        h1 {
            color: #00579D;
            font-weight: 500;
        }
        
        span {
            width: 12vw;
            height: 3vh;

            margin-top: 1vh;
            margin-right: 1.5vw;

            background-image: linear-gradient(
                to left, #64C3D5 15%, 
                #fff 10%, #fff 18%,
                #0091BD 19.3%, #0091BD 32%, 
                #fff 30.6%, #fff 34.6%,
                #005DA5 35.6%, #005DA5 49%, 
                #fff 40%, #fff 53%,
                #00579D 53%, #00579D 65.1%, 
                #fff 65.1%, #fff 69.1%,
                #0075B1 70%, #0075B1 83%, 
                #fff 80%, #fff 88%,
                #6AACDA 10%, #6AACDA 100%
            );
        }

        border-bottom: 0.2vh solid #00579D;
    }

    display: flex;
    justify-content: center;

    &:nth-child(1) {
        height: 8vh;
    }

    &:nth-child(2) {
        height: 16vh;
        margin-top: 0vh;
    }

    &:nth-child(3) {
        height: 16vh;
    }

    &:nth-child(4) {
        height: 30vh;
    }
`;

export const Left = styled.div`
    width: 50%;
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    strong {
        font-size: 3vh;
        color: #00579D;
        padding-left: 4vw;     
    }

    p {
        font-size: 2.4vh;
        color: #00579D;
        padding: 0.2vh;
        padding-left: 7vw;
        margin-top: 2vh;

        display: flex;
        align-items: center;
        
        &::before {
            content: '';
            position: absolute;
            width: 1.2vw;
            height: 2.6vh;
            margin-left: -5vw;

            background-color: #023A67;
            border-radius: 100%;
        }

        &::after {
            content: '';
            position: absolute;
            width: 0.15vw;
            height: 6vh;
            margin-top: 0vh;
            margin-left: -4.5vw;

            background-color: #023A67;                     
        }   
    }    
`;

export const Right = styled.div`
    width: 50%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;

    div, button {
        z-index: 99;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-right: 5vw;

        p {
            svg {
                color: #00579D;
                margin-left: -2vw;

                &:hover {
                    cursor: pointer;
                }

                &:active {
                    color: ${shade(0.2, '#00579D')}
                }
            }
        }

        &:first-child {
            margin-top: 8vh;
        }

        &:last-child {
            align-items: flex-end;
            margin-top: 6vh;

            button {
                margin-right: -4vw;
                width: 10vw;
                height: 4.5vh;
                background-color: #00579D;
                border: 0;
                color: white;
                font-weight: bold;
            }
        }

        input {
            width: 20vw;
            
            background: transparent;
            border: 0;
            border-bottom: 0.4vh solid #00579D;
            
            margin-bottom: 2vh;
        }

        select {
            border: 0.2vh solid #c4c4c4;
            padding: 0.4vh;
            color: #00579D;
            font-weight: bold;
            font-size: 2.5vh;

            &:hover {
                cursor: pointer;
            }
        }

        span {
            width: 4vw;
            height: 3vh;
            background: #6B6B6B;
            border: 0;
            border-radius: 50vw;

            display: flex;
            align-items: center;

            &:before {
                content: '';
                position: absolute;
                width: 1vw;
                height: 2vh;
                background: white;
                margin-left: 0.3vw;

                border-radius: 50vw;
            }
        }     
    }
`;