import styled from "styled-components";

export const Box = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: start;
    justify-content: center;

    div {
        width: 40%;

        display: flex;
        flex-direction: column;

        label {
            color: #00579D;
            font-size: 3vh;

            margin-left: 1vw;
            margin-bottom: 1vh;
        }

        input {
            width: 20vw;
            height: 5vh;
            margin-left: 1vw;
            margin-bottom: 3vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }
    }
`;