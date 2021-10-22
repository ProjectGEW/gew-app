import styled from "styled-components";

export const Card = styled.div`
    width: 36vw;
    height: 20vh;

    margin-top: 3vh;
    
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const CardStatus = styled.div`
    width: 1vw;
    height: 100%;

    border-radius: 5px 0px 0px 5px;
    display: flex;
    flex-direction: row;

    background-color: #e2e2e2;
`;

export const CardBox = styled.div`
    width: 35vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.5vh;

    border-left: 0;
    border-radius: 0px 5px 5px 0px;

    background-color: #f4f4f4;
`;