import styled from "styled-components";
import { shade } from "polished";

import Upload from "../../assets/upload.svg";

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
    border-radius: 0.8vh;
`;

export const ContainerRegister = styled.div`
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const Info = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #00579D;

    box-shadow: 0.25vh 0.25vh 0.5vh rgb(0, 0, 0, 0.25);
    border-radius: 0.8vh 0.8vh 0 0;

    display: flex;
    align-items: center;

    h1 {
        color: white;
        margin-left: 1vw;
        font-size: 3.6vh;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 73vh;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 0vh 0vh 0.8vh 0.8vh;
`;

export const Line = styled.div`
    width: 80%;
    height: 16vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &::after {
        content: '';
        width: 80%;
        height: 0.1vh;
        position: absolute;
        margin-top: 15vh;
        background-color: rgb(93, 93, 93, 0.2);
        display: none;
    }

    div {
        padding: 2vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            font-size: 2.6vh;
        }

        svg {
            width: 5vw;
            height: 6vh;

            color: #5D5D5D;

            &:hover {
                cursor: pointer;
            }
        }

        &:first-child {
            margin-left: 6vw;
        }

        &:last-child {
            margin-right: 6vw;

            &::after {
                display: none;
            }
        }

        &::after {
            content: '';
            height: 0.8vh;
            background: #5D5D5D;
            position: absolute;       

            margin-top: 3vh;
            margin-left: 14vw;
        }

        &:nth-child(1) {
            p {
                color #00579D;
            }

            svg {
                width: 5vw;
                height: 6vh;

                color: #00579D;
            }

            &::after {
                width: 12vw;
                margin-left: 15vw;

                background: #5D5D5D;
            }
        }

        &:nth-child(2) {
            p {
                color #5D5D5D;
            }

            svg {
                color: #5D5D5D;
            }

            &::after {
                width: 12vw;
                margin-left: 15vw;

                background: #5D5D5D;
            }
        }

        &:nth-child(3) {
            p {
                color #5D5D5D;
            }

            svg {
                color: #5D5D5D;
            }

            &::after {
                width: 10.5vw;
                margin-left: 13.5vw;

                background: #5D5D5D;
            }
        }

        &:nth-child(4) {
            p {
                color #5D5D5D;
            }

            svg {
                color: #5D5D5D;
            }
        }
    }

`;

export const Box = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: start;
    justify-content: center;

    div {
        width: 40%;
        margin-top: 2vh;

        display: flex;
        flex-direction: column;


        label, p {
            color: #00579D;
            font-size: 3vh;

            margin-left: 6vw;
            margin-bottom: 1vh;
        }

        input, textarea {
            width: 20vw;
            height: 5vh;
            margin-left: 6vw;
            margin-bottom: 3vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }

        textarea {
            width: 60vh;
            height: 16vh;
        }

        &:last-child {
            input[type='file'] {
                display: block
            }
              
            label {
                width: 12.5vw;

                background-color: #C2E4FF;
                border-radius: 1vh;
                color: #343434;

                padding: 2vh;
                padding-left: 1vh;
                
                font-size: 1.8vh;
                cursor: pointer;    

                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

                &:hover {
                    background-color: ${shade(0.02, "#C2E4FF")}
                }

                &::after {
                    content: '';
                    width: 1.2vw;
                    height: 2.2vh;
                    position: absolute;

                    margin-top: 0.2vh;
                    margin-left: 0.5vw;

                    background-image: url(${Upload});
                    background-size: cover;
                    background-position: center;
                }
            }

            button {
                width: 10vw;
                height: 5vh;

                margin-top: 35vh;
                margin-left: 27vw;

                border: 0;
                border-radius: 0.5vh;

                font-size: 2.6vh;
                color: white;
                font-weight: bold;
                background-color: #00579D;

                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

                &:hover {
                    background-color: ${shade(0.09, "#00579D")}
                }
            }
        }
        

    }
`;