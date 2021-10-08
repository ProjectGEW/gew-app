import styled from "styled-components";
import { shade } from "polished";

import Upload from "../../../assets/upload.svg";

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 130vh;
    margin-bottom: 5vh;

    display: flex;
    flex-direction: row;

    overflow: hidden;

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

export const PageContainer = styled.div`
    width: 100vw;
    height: 155vh;
`;

