import styled from "styled-components";

export const BoxResponsavel = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    justify-content: center;
    margin-left: 4vw;
    /* Estilização dos erros */

    .msgErro {
        position: absolute;
        font-size: 2vh;
    }

    #responsavelResponse {
        margin-top: 9.5vh;
        margin-left: 1vw;
    }

    #solicitanteResponse {
        margin-top: 21.8vh;
        margin-left: 1vw;
    }

    /* Fim */

    span {
        display: flex;
        margin-top: 2vh;
    }

    p {
        margin-top: -2.6vh;
        margin-bottom: 1vh;
        margin-left: 2vh;
        font-size: 2.3vh;
        color: rgb(255, 0, 0, 0.8);
      }

    div {
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

            font-size: 2.6vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }
    }
`;