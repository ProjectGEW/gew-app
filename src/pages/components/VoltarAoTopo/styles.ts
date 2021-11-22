import styled from "styled-components";

export const Box = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #fff;
    overflow: hidden;
    bottom: 30px;
    right: 14vw;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 100%;
    text-decoration: none;

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