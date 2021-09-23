import styled from "styled-components";
import { TableDimensions } from "../ConsultantsList/style";

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const MainProfileGrid = styled.div`
    width: 74vw;
    height: 34vh;
    margin-left: 2vw;
    display: grid;
    grid-auto-flow: row;
    grid-template-areas: 'photo desc';

    #photo {
        width: 14vw;
        grid-area: photo;

        #user {
            width: 80%;
            height: 22vh;
            margin: 2vh 5%;
            background: grey;
        }

        #text {
            width: 80%;
            height: 5vh;
            margin: 2vh 5%;
            display: flex;
            flex-direction: row;
            justify-content: center;

            h2 {
                color: #5B5B5B;
                font-size: 2.2vh;
                font-weight: 600;
            }

            h3 {
                margin-left: 0.4vw;
                font-size: 2.2vh;
                color: limegreen;
            }
        }
    }

    #desc {
        width: 60vw;
        grid-area: desc;
        padding: 1vh;

        h1, h2, h3 {
            color: #5B5B5B;
        }

        h2 {
            font-size: 2.2vh;
            font-weight: normal;
        }

        h3 {
            width: 14vw;
            font-size: 2.2vh;
            font-weight: bold;

            &:last-child {
                margin-left: 1vw;
            }
        }

        #dataone {
            width: 100%;
            height: 5vh;
            margin: 1vh;

            h1 {
                font-size: 3vh;
                font-weight: bold;
                padding-top: 0.6vh;
            }

            &:nth-child(4) {
                height: 10vh;
            }
        }

        #datatwo {
            width: 100%;
            height: 5vh;
            margin: 1vh;
            display: flex;
            flex-direction: row;
            padding-top: 1vh;

            h2 {
                &:first-child {
                    width: 7vw;
                }
            }
        }
    }
`;

export const Email = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding-bottom: 1vh;

    &:first-child {
        padding-top: 1.5vh;
    }
`;

export const Tittle = styled.h1`
    width: 74vw;
    height: 5vh;
    padding-bottom: 1vh;
    margin-left: 2vw;
    font-size: 3.4vh;
    color: #00579D;
    font-weight: normal;

    &::after {
        content: '';
        width: 74vw;
        height: 0.1vh;
        margin: 5vh 0 0 -14vw;
        background-color: #5b5b5b;
        opacity: 0.3;
        position: absolute;
    }
`;
 