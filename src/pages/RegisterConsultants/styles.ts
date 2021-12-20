import styled from 'styled-components';
import { shade } from 'polished';

import Close from '../../assets/close.svg';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: row;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

    header {
        width: 100%;
        height: 7vh;
        background-color: #00579D;
        border-radius: 0.8vh 0.8vh 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3vh 0 3vh;
        position: absolute;

        h1 {
            font-size: 3.6vh;
            margin-top: -0.2vh;
            margin-left: -0.45vw;
            font-weight: bold;
            color: #fff;
        }

        svg {
            width: 3.6vh;
            height: auto;
            color: #fff;
            margin-top: 0.4vh;
        }
    }
`;

export const SideContainer = styled.div`
    width: 48%;
    height: 68vh;
    margin: 10vh 0 0 2%;

    &:nth-child(2) {
        &::before {
            content: '';
            width: 0.1vh;
            height: 65vh;
            position: absolute;
            margin-left: 37vw;
            opacity: 0.6;
            background-color: #c4c4c4;
        }
    }

    .box1, .box2, .box3, .box4, .box5 {
        height: 8vh;
        display: flex;
        flex-direction: column;
        margin-left: 2vw;
        
        label {
            width: 80%;
            font-weight: normal;
            color: #00579D;
            font-size: 2.4vh;
            margin-bottom: 1vh; 
        }

        input {
            width: 10vw;
            
            border-radius: 0.4vh;
            border: 0px;
            padding: 1.2vh;
            font-size: 2vh;
            background-color: rgb(181, 181, 181, 0.3);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        
            &::placeholder {
                font-size: 2vh;
                height: 4vh;
            }
        }  

        svg {
            color: #00579D;
            position: absolute;
            margin: 4.4vh 0 0 14vw;
            cursor: pointer;
        }
    }

    .box1, .box2 {
        input { width: 28vw }
    }

    .box1 {
        svg {
            width: 2.8vh;
            height: auto;
            color: #00579D;
            position: absolute;
            margin: 4.5vh 0 0 26vw;
            cursor: pointer;
        }
    }

    .box2 {
        svg {
            width: 2.8vh;
            height: auto;
            color: #00579D;
            position: absolute;
            margin: 4.5vh 0 0 26vw;
            cursor: pointer;
        }
    }

    .box3 {
        svg {
            width: 3vh;
            height: auto;
            color: #00579D;
            position: absolute;
            margin: 4.5vh 0 0 8vw;
            cursor: pointer;
        }
    }

    .box4 {
        svg {
            width: 3.2vh;
            height: auto;
            color: #00579D;
            position: absolute;
            margin: 4.4vh 0 0 8vw;
            cursor: pointer;
        }
    }

    .box5 {
        input { width: 16vw }

        svg {
            color: #00579D;
            position: absolute;
            margin: 4.4vh 0 0 14vw;
            cursor: pointer;
        }
    }
    
    h1 {
        height: 6vh;
        color: #00579D;
        font-size: 3vh;
        padding: 1vh 0 0 2vw;
        grid-area: header;

        &:before {
            content: '';
            width: 30vw;
            height: 0.1vh;
            background: #c4c4c4;
            opacity: 0.6;
            margin: 4vh 0 0 0;
            position: absolute;
        }
    }

    #enviarDados {
        height: 5vh;

        padding: 0 3vh;
        border: 0;
        border-radius: 0.5vh;
        margin-left: 25vw;

        font-size: 2.4vh;
        color: white;
        font-weight: bold;
        background-color: #00579D;

        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        &:hover {
            background-color: ${shade(0.09, "#00579D")}
        }
    }
`;

export const ConsultantData = styled.div`
    width: 98%;
    height: 38vh;
    margin: 1%;

    display: grid;
    grid-template-areas: 'header header'
                         'one one'
                         'three four';
    padding: 1%;

    .box1 { grid-area: one }

    .box3 { 
        grid-area: three;
        margin-top: 1vh;

        &:last-child {
            margin-top: 11.5vh;
        }
     }

    .box4 { grid-area: four; margin-top: 1vh; }
`;

export const UserData = styled.div`
    width: 98%;
    height: 30vh;
    margin: 1%;
    display: grid;
    grid-template-areas: 'header header'
                         'one one'
                         'one one';
    padding: 1%;

    .box1 { 
        grid-area: one;
        margin-top: -0.5vh;

        &:last-child {
            margin-top: 10vh;
        }
    }
`;

export const PricePerHour = styled.div`
    h1 {
        margin: 2vh 0 0 0.75vw;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            width: 100%;
            height: 8vh;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 2vh 0 0 3vw;

            button {
                height: 5vh;

                padding: 0 2vh;
                border: 0;
                border-radius: 0.5vh;

                font-size: 2.4vh;
                color: white;
                font-weight: bold;
                background-color: #00579D;

                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

                &:hover {
                    background-color: ${shade(0.09, "#00579D")}
                }
            }

            label {
                width: 80%;
                font-weight: normal;
                color: #00579D;
                font-size: 2.4vh;
                margin-bottom: 1vh; 
            }

            input {
                width: 10vw;
                border-radius: 0.4vh;
                border: 0px;
                font-size: 2vh;
                padding: 1vh;
        
                background-color: rgb(181, 181, 181, 0.3);
                box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
                color: #5E5E5E;
            } 
        }
    }
`;

export const SupplierData = styled.div`
    width: 98%;
    height: 29vh;
    margin: 1%;
    display: grid;
    grid-template-areas: 'header'
                        'one';
    padding: 1%;

    label {
        margin-top: -4vh;
    }

    select {
        width: 20vw;
        height: 5vh;
        border-radius: 0.4vh;
        border: 0px;
        font-size: 2vh;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.3);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;
    }  
`;

export const ContainerPopup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
    border-radius: 0.8vh;
    overflow: hidden;
`;

export const PopUp = styled.div`
    width: 35vw;
    height: 40vh;
    background: #fff;
    border-radius: 0.8vh;
    //overflow: hidden;

    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 

    .projeto {       
        margin-top: 0vh;         
        margin-left: 1vw;
        margin-right: 1vw;

        font-size: 2.5vh;
        color: #00579D;

        border-bottom: 0.1vh solid #ccc;

        &:hover {
            background-color: rgba(220, 220, 220, 0.25);
        }

        p {
            &:nth-child(1) {
                width: 17.5vw;
                border-right: 0.1vh solid #c4c4c4;
                color: #484848;
            }
        }

        font-weight: bold;
        padding: 1.4vh;
        padding-top: 2vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Scroll = styled.div`
    width: 35vw;
    height: 32vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        background-color: rgb(196, 196, 196, 0.5);
        width: 0.5vw;
    }
       
    ::-webkit-scrollbar-thumb {
        background-color: rgb(196, 196, 196); 
        border-radius: 1vh;
    }

    .linha {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 2vh;

        button {
            padding: 0.6vh;
            border: 0;
            border-radius: 0.5vh;
            margin-right: 1vw;
            font-size: 1.8vh;
            color: white;
            font-weight: bold;
            background-color: #e21d1d;

            &:hover {
                background-color: ${shade(0.09, "#e21d1d")}
            }
        }

        input {
            width: 23.5vw;
            height: 5vh;

            font-size: 2.4vh;
            margin-left: 1vw;
            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: #e9e9e9;
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }
    }

    #final {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button {
            padding: 1vh;
            border: 0;
            border-radius: 0.5vh;
            margin-left: 2vw;
            margin-right: 2vw;
            font-size: 2vh;
            color: white;
            font-weight: bold;
            background-color: #00579D;

            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

            &:hover {
                background-color: ${shade(0.09, "#00579D")}
            }
        }
    }
`;

export const Title = styled.div`
    width: 35vw;
    padding: 1vh;
    background: #00579D;

    display: flex;
    flex-direction: row;

    h1 {
        color: #fff;
        font-size: 3vh;
        margin-left: 0.5vw;
    }

    span {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        margin-top: -0.4vh;
        margin-left: 32vw;
        position: absolute;
        background-size: cover;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;