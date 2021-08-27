import styled from "styled-components";
import { shade } from 'polished';
import Ata from '../../assets/ata.svg';
import Dashboard from '../../assets/dashboardIcon.svg';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
    overflow: hidden;
    
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        background-color: rgb(196, 196, 196, 0.5);
        width: 0.5vw;
        margin-left: -3vh;
    }
       
    ::-webkit-scrollbar-thumb {
        background-color: rgb(196, 196, 196); 
        border-radius: 1vh;
    }
`;

export const ContainerDetails = styled.div`
    width: 100%;
    height: auto;
    padding: 6vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const Inputs = styled.div`
    width: 21%;
    margin-top: -2vh;
    display: flex;
    flex-direction: column;

    input[type='file'] { display: none; }
            
    label {
        width: 10vw;
        height: 4vh;
        background-color: #0075B1;
        border-radius: 0.5vh;
        color: #fff;
        margin-right: 3vw;
        margin-bottom: 3vh;
        padding: 1vh;
        padding-left: 4vh;
        font-size: 1.5vh;
        font-weight: bold;
        cursor: pointer;  
        box-shadow: 0.3vh 0.3vh 0.4vh rgb(0, 0, 0, 0.3);

        &:hover {
            background-color: ${shade(0.3, "#0075B1")}
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
`;

export const ContainerDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4vh 3vh 0vh 0;

    text-align: justify;

    h1 {
        font-size: 2.5vh;
        font-weight: bold;
        color: #000050;
    }

    h2 {
        font-size: 2.3vh;
        font-weight: normal;
        margin-top: 1.4vh;
    }
`;

export const ContainerInfos = styled.div`
    width: 70vw;
    margin-bottom: 3vh;
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    ul {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
    }

    li {
        display: flex;
        flex-direction: row;
        list-decoration: none;

         h1 { font-size: 0.76em; margin-right: 1vh; font-weight: bold; }

         h2 { font-size: 0.74em; color: #023A67; font-weight: 100; }
    }
`;

export const ContainerSection = styled.div`
    width: 100%;
    float: left;
    margin: 4vh 0 -1vh 0;
    h1 {
        font-size: 0.74em;
        color: #229FC6;
    }
`;

export const ContainerTittles = styled.div`
    display: flex;
    flex-direction: row;
    width: 76vw;
    margin-top: 2vh;
    justify-content: space-between;
`;

export const Tittle = styled.div`
    width: 50%;
    font-size: 4vh;
    font-weight: bold;
`;

export const Box = styled.div`
    width: 32%;
    height: 14vh;
    text-align: center;
    padding-top: 4vh;

    h1 {
        font-size: 2.1vh;
        margin-bottom: 1.4vh;
    }

    h2 {
        font-size: 2.2vh;
        color: #023A67;
    }
`;

