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
    background-color: red;


    &:nth-child(2) {
        margin-right: 1%;
        margin-left: 1.5%
    }
`;

export const ContentContainer = styled.div`
    width:98%;
    height: 8vh;
    background-color: #00579D;
    margin: 1%;
`;

export const Box = styled.div`
    width:98%;
    height: 8vh;
    background-color: #00579D;
    margin: 1%;

    &:nth-child(3) {
        height: 19vh;
    }

`;

export const Table = styled.div`

`;