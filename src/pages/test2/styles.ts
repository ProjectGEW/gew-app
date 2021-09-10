import styled from 'styled-components';

export const Container = styled.div`
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

    h1 {
        color: white;
        margin-left: 1vw;
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

    &:nth-child(2) {
        margin-right: 1%;
        margin-left: 1.5%
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

export const Table = styled.div`

`;