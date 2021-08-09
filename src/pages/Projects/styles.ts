import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
`;

export const ContainerProject = styled.div`
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #fff;
    box-shadow: 0.25vh 0.25vh 0.5vh rgb(0, 0, 0, 0.25);
    border-radius: 0.4vh;
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

        svg {
            
        }
    }

    span {
        width: 10vw;
        height: 2.5vh;
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
        
        label {
            font-size: 2.6vh;
            color: #00579D;

            margin-right: 0.5vw;
        }

        select {
            width: 12vw;
            padding: 0.5vh;

            border-color: #ccc;

            color: #00579D;
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

export const Projects = styled.div`
    width: 100%;
    height: 80vh;
    padding: 0px 20px;
    align-items: center;    
    
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

export const Center = styled.div`
    width: 100%;

    &:last-child {
        margin-bottom: 4vh;
    }

    display: flex;
    place-content: space-between;
    flex: wrap;
    flex-direction: row;
    align-items: center;
`;
