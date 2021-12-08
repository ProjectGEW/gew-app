import styled from "styled-components";

export const Box = styled.div`
    width: 4vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    overflow: hidden;
    bottom: 45px;
    right: 13vw;
    background-color: transparent;
    display: none;
    
    svg {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 100%;
        background-color: #fff;
        color: #00579D;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
            opacity: 0.97;
        }

        &:active {
            opacity: 0.93;
        }
    }    
`;