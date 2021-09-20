import styled from 'styled-components';

export const BoxConfirm = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
    display: flex;

    flex-direction: row;

    overflow: hidden;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

    #voltar {
        position: absolute;
        width: 4vw;
        height: 4vh;
        z-index: 2;
        margin-top: 1.5vh;
        color: #fff;

        &:hover {
            cursor: pointer;
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }

    #grid {
        position: absolute;
        z-index: 2;
        width: 12.6vw;
        height: 3.4vh;

        margin-top: 71.5vh;
        margin-left: 4vw;
        background-image: linear-gradient(to left, 
            #64C3D5 15%, #fff 10%, #fff 19.3%,
            #0091BD 19.3%, #0091BD 33%, #fff 30%, #fff 37%,
            #005DA5 36%, #005DA5 50%, #fff 49%, #fff 54%,
            #00579D 54%, #00579D 67%, #fff 65.1%, #fff 71%,
            #0075B1 71%, #0075B1 84%, #fff 80%, #fff 88%,
            #6AACDA 10%, #6AACDA 100%);

        &::before {
            content: '';
            width: 46vw;
            height: 0.1vh;
            background-color: #00579D;
            position: absolute;
            margin: 3vh 0 0 14vw;    
            opacity: 0.4;
        }
    }

    h1 {
        color: white;
        margin-left: 3.5vw;
        font-size: 3.6vh;
        position: absolute;
        top: 1.7vh;

        z-index: 1;
    }

    &::after {
        content: '';
        width: 100%;
        height: 7vh;
        background-color: #00579D;
        position: absolute;
    }
`;

export const SideContainer = styled.div`
    width: 48%;
    height: 80%;
    margin-top: 8vh;
    padding-left: 4vw;

    &:last-child {
        margin-right: 1%;
        margin-left: 1.5%;
        background: red;
    }
`;

export const ContentContainer = styled.div`
    width:98%;
    height: 6vh;
    margin-bottom: 4%;
    display: flex;
    justify-content: space-between;

    &:nth-child(1) {
        margin-top: 4vh;
        margin-bottom: 1.4vh;
    }

    div {
        width: 50%;
        height: 8vh;
        display: flex;
        flex-direction: COLUMN;

        &:nth-child(2) {
            h3, h2 {
                margin-left: 3vw;
            }
        }
    

        h3, h2 {
            font-size: 2.1vh;
            margin: 0;
            font-weight: bold;
            color: #00579D;
        }

        h2 {
            color: #5E5E5E;
            font-weight: normal;
            margin-top: 1vh;
        }

    }
`;

export const Box = styled.div`
    width: 98%;
    height: 6vh;
    margin-bottom: 2%;

    &:nth-child(3) {
        height: 19vh;
        margin-bottom: -2vh;
    }

    div {
        width: 100%;
        height: 8vh;
        display: flex;
        flex-direction: column;

        h3, h2 {
            font-size: 2.1vh;
            margin: 0;
            font-weight: bold;
            color: #00579D;
        }

        h2 {
            color: #5E5E5E;
            font-weight: normal;
            margin-top: 1vh;
            width: 90%;
            word-wrap: break-word;
        }

    }

`;

export const TableConfirm = styled.div`
    width: 90%;
    height: 28vh;
    border-radius: 1vh 1vh 0 0;
    border: 0.01vh solid #A5A5A5;
    overflow: hidden;
    border-style: solid none solid none;
    
    div {
        height: 4.5vh;
        background-color: #00579D;
        border-radius: 0.4vh 0.4vh 0 0;
        padding-top: 0.8vh;

        p {
            color: #fff;
            font-weight: bold;
            font-size: 2.6vh;
            margin: 0 0 0 2vh;
        }

        svg {
            width: 3.8vh;
            height: 3.8vh;
            color: #fff;
            float: right;
            margin: -3.4vh 1.6vh 0 0;
            cursor: pointer;
        }
    }

    ul {
        height: 28vh;
        border: 0.01vh solid #A5A5A5;
        overflow: hidden;
        overflow: hidden;
        overflow: scroll;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            background-color: rgb(194, 194, 194, 0.5);
            width: 0.4vw;    
        }

        li {
            width: 100%;
            height: 4vh;
            list-style-type: none;
            border: 0.01vh solid #A5A5A5;
            border-style: none none solid none;

            &:last-child {
                border-style: solid none solid none;
            }

            p {
                font-size: 2.05vh; 
                margin: 0.75vh 0 0 2vh;
                color: #787676;
                font-weight: bold;
            }

            svg {
                width: 2.4vh;
                height: 2.4vh;
                color: #00579d;
                float: right;
                margin: -2.4vh 1.6vh 0 0;
                cursor: pointer;
            }
        }
    }
`;