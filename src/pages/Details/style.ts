import styled from "styled-components";
import { shade } from 'polished';
import Ata from '../../assets/ata.svg';
import Dashboard from '../../assets/dashboardIcon.svg';

export const Container = styled.div`
    position: absolute;
    top: 20vh;
    left: 12vw;
    width: 78vw;
    height: 217vh;
`;

export const ContainerDetails = styled.div`
    width: 100%;
    height: 217vh;
    margin-bottom: 8vh;
    margin-top: -6vh;
    padding: 6vh;
    display: flex;
    flex-direction: column;

    overflow: hidden;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        background-color: rgb(194, 194, 194, 0.5);
        width: 0.4vw;    
    }
       
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

    span {
        font-weight: bold;
        font-size: 2.2vh;
    }
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
    margin: 1.2vh 3vh 0vh 0;

    text-align: justify;

    h1 {
        font-size: 2vh;
        font-weight: bold;
        color: #111;
    }

    h2 {
        font-size: 2vh;
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

         h1 { font-size: 1em; color: #111; margin-right: 1vh; font-weight: bold; }

         h2 { font-size: 1em; color: #00579D; font-weight: 100; }
    }
`;

export const ContainerSection = styled.div`
    width: 100%;
    float: left;
    margin: 4vh 0 -1vh 0;

    h1 {
        font-size: 1em;
        color: #229FC6;
    }
`;

export const ContainerTittles = styled.div`
    display: flex;
    flex-direction: row;
    width: 76vw;
    margin-top: 2vh;
    justify-content: space-between;
    color: #111;
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
    margin-bottom: 3vh;

    h1 {
        font-size: 2.2vh;
        margin-bottom: 1.4vh;
    }

    h2 {
        font-size: 2.2vh;
        color: #023A67;
    }
`;

export const ContainerAppointments = styled.div`
width: 72vw;
height: 22vh;
margin-top: 3vh;
border-radius: 0.8vh 0.8vh 0 0;
border-left: 0.1vh solid #00579d;
border-bottom: 0.1vh solid #00579d;
background-color: rgba(226, 226, 226, 0.2);
overflow: hidden;

.tableHeader {
    top: 0;
    left: 0;
    width: 100%;
    height: 5vh;
    background-color: #00579d;
    border-radius: 0.8vh 0.8vh 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.4vh;
    padding-right: 4vh;

    h2 {
        width: 25%;
        display: flex;
        justify-content: center;
        color: #fff;
        font-size: 2vh;
        font-weight: bold;
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
    background-color: rgb(196, 196, 196, 0.5);
    border-radius: 10px;
}

.sc1::-webkit-scrollbar-thumb {
    background-color: rgb(196, 196, 196);
    border-radius: 10px;
}

ul {
    width: 100%;
    height: 17vh;

    li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1.4vh;
        padding-right: 4vh;
        border-bottom: 0.1vh solid #c4c4c4;

        &:hover {
            background-color: rgba(226, 226, 226, 0.4);
        }

        h2 {
            width: 25%;
            font-size: 1.8vh;
            font-weight: 100;
            color: #023A67;
            display: flex;
            justify-content: center;

            &:first-child {
                margin-right: 6vh;
                font-weight: bold;
            }
        }

        h3 {
            width: 25%;
            font-size: 1.9vh;
            color: #023A67;
            display: flex;
            justify-content: center;
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

export const ContainerGraphs = styled.div`
    width: 72vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Graphic = styled.div`
    width: 49%;
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;

    h1 {
        width: 15vw;
        font-size: 2.2vh;
        text-align: center;
        color: #111;
    }
`;

export const Graphic2 = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.3vh;
    padding: 1vh;
    margin-top: 40vh;

    div {
        height: 10vh;
        background-color: grey;

        &:last-child {
            width: 200%;
            margin-left: 0.1vh;
            height: 40vh;
        }
    }
`;
