import styled, { css } from "styled-components";

interface FormDataProps {
    hasErrorInicio: boolean;
    hasErrorFim: boolean;
    hasErrorAprovacao: boolean;
}

export const BoxDatas = styled.div<FormDataProps>`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .spanDatas {
        width: 100%;
        height: 10vh;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .divDatas {
        width: 70%;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        label {
            width: 13vw;
            color: #00579D;
            font-size: 2.6vh;
            font-weight: bold;

            margin-bottom: 0.5vh;
            text-align: left;

            &:last-child {
                margin-right: 0vw;
            }
        }

        input {
            width: 13vw;
            height: 5vh;
            margin-bottom: 0.5vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }

        #data_de_inicio {
            ${props => props.hasErrorInicio && css`
                border: 2px solid #c53030;
            `}
        }

        #data_de_termino {
            ${props => props.hasErrorFim && css`
                border: 2px solid #c53030;
            `}
        }

        #data_de_aprovacao {
            ${props => props.hasErrorAprovacao && css`
                border: 2px solid #c53030;
            `}
        }
    }

    .calendario {
        margin-left: 18.5vw;
        margin-top: 3vh;

        .react-calendar__navigation {
            height: 20px;
            margin-bottom: 0.2em;
            margin-top: 0.2em;
        }

        .react-calendar__month-view__weekdays {
            font-size: 0.7em;
        }
    }
`;