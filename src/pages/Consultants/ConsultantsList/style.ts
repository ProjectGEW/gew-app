import { shade } from "polished";
import styled, { css } from "styled-components";

interface ListRoute {
    tipo?: string;
}

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

export const ContainerInfo = styled.div`
    width: 100%;
    height: 12vh;

    padding-top: 1vh;

    display: flex;
    flex-direction: column;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #00579D;
        font-size: 3vh;
        margin-left: 1.2vw;

        display: flex;
        align-items: center;
    }

    span {
        width: 10vw;
        height: 2.5vh;
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

export const ContainerFiltro = styled.div`
    width: 100%;
    height: 16vh;

    border-bottom: 0.2vh solid #ccc;

    display: flex;
    place-content: flex-start space-between;
    align-items: center;

    h1 {
        color: #00579D;
        font-size: 3vh;
        margin-left: 1.2vw;
    }

    div {
        display: flex;
        align-items: center;

        &:nth-child(3) {
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
        }
        
        label {
            font-size: 2.6vh;
            color: #00579D;

            margin-right: 0.5vw;
        }

        select {
            width: 12vw;
            padding: 0.5vh;

            color: #575757;
            border: 0.2vh solid #c4c4c4;
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

        &:last-child {
            margin-right: 1.4vw;
        }
    }
`;

export const Table = styled.table<ListRoute>`
    width: 70vw;
    margin-top: 2vh;
    border-spacing: 0;

    tr {
        height: 8vh;

        &:hover {
            background-color: #f8f8f8;
        }
    }

    td {
        padding: 0.7vh 0 0 1vw;
        border-bottom: 0.1vh solid #e9e9e9;
        font-size: 2.1vh;

        select {
            width: auto;
            padding: 0.5vh;
            margin-left: -0.25vw;

            background-color: #fff;

            font-size: 2vh;
            color: #575757;
            border: 0.1vh solid #c4c4c4;
            cursor: pointer;
        }

        button {
            padding: 0.8vh;
            border: 0;
            border-radius: 0.5vh;
            margin-left: 0.8vw;
            font-size: 2vh;
            color: white;
            font-weight: bold;
            background-color: #00579D;

            &:hover {
                background-color: ${shade(0.09, "#00579D")}
            }
        }
    
        &:first-child {
            &:before {
                content: '|';
                color: limegreen;
                font-size: 3.4vh;
                padding-top: -1vh;
                padding-bottom: 1vh;
                margin: 0 1vw 0 -1vw;
                background: limegreen;
                border-radius: 0 0.4vh 0.4vh 0;
            }
        }

        &:nth-child(2) {
            color: limegreen;
            font-weight: bold;
        }
    }

    #header {
        width: 70vw;
        height: 5.4vh;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #005DA5;
        font-weight: bold;
        font-size: 2.4vh;
        border-radius: 0.8vh 0.8vh 0 0;

        color: #fff;
    }

    #column {
        margin-top: 8vh;
        height: 6vh;
    }

    .cadastro {
        width: 10vw;
    }

    .status {
        width: 10vw;
    }

    .nome {
        width: 30vw;
    }

    .projetos {
        width: 10vw;

        select {
            border: 0;
        }
    }

    .atribuicao {
        width: 8vw;
    }

    ${props => props.tipo === 'Perfil' && css`
        .cadastro {
            margin-left: 0.4vw;
        }

        .status {
            margin-left: -1.4vw;
        }
        .projetos {
            width: 8vw;
        }

        .nome {
            width: 24vw;
        }

        div.atribuicao {
            padding-left: 0.6vw;
        }
    `}
`;

export const TableDimensions = styled.div<ListRoute>`
    width: 90%;
    margin: 1vh 0 0 5%;
    height: 64vh;
    overflow: hidden ;

    ${props => props.tipo === "Perfil" && css`
        height: 30vh;
        margin-top: 4vh;
    `}
`;

export const TableScroll = styled.div`
    width: 70vw;
    height: 60vh;
    margin-top: 5vh;

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
`;