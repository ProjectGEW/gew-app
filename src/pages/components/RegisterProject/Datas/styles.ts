import styled from "styled-components";

export const Box = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: red;

    div {
        width: 80%;

        background: blue;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        label {
            color: #00579D;
            font-size: 2.6vh;
            font-weight: bold;

            margin-bottom: 1vh;

            &:last-child {
                margin-right: 0vw;
            }
        }

        input {
            width: 13vw;
            height: 5vh;
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