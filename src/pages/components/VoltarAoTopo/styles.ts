import styled from "styled-components";

export const Box = styled.a`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    overflow: hidden;
    bottom: 35px;
    right: 13vw;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 100vw;
    text-decoration: none;
    background-color: #fff;

    svg {
        color: #00579D;

        &:hover {
            cursor: pointer;
            opacity: 0.97;
        }

        &:active {
            opacity: 0.93;
        }
    }    
`;