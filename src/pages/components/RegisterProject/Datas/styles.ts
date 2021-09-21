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
                border: 0.2vh solid #c53030;
                box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(255, 0, 0, 0.25);
            `}
        }

        #data_de_termino {
            ${props => props.hasErrorFim && css`
                border: 0.2vh solid #c53030;
                box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(255, 0, 0, 0.25);
            `}
        }

        #data_de_aprovacao {
            ${props => props.hasErrorAprovacao && css`
                border: 0.2vh solid #c53030;
                box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(255, 0, 0, 0.25);
            `}
        }
    }

    .calendario {
        width: 40vw;
        margin-left: 11.2vw;
        margin-top: 4vh;

        border: 0;
        border-radius: 0.8vh;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

        .react-calendar__navigation {
            height: 30px;
            border-bottom: 0.1vh solid rgba(60, 64, 67, 0.15);            
            margin-bottom: 0.1vh;
            margin-top: 0vh;
        }

        .react-calendar__month-view__weekdays {
            font-size: 1.8vh;
        }

        .react-calendar__navigation button {
            font-size: 2.4vh;
            text-transform: uppercase;
            font-weight: bold;
            color: #00579D;

            &:nth-child(1), &:nth-child(2), &:nth-child(4), &:nth-child(5) {
                font-size: 3vh;
            }
        }

        .react-calendar__tile {
            padding: 1vh;
            padding-top: 1.5vh;
            font-weight: bold;
        }

        .react-calendar__month-view__days__day--weekend {
            color: #54b4ff;
            font-weight: 400;
        }

        .react-calendar__month-view__days__day--neighboringMonth {
            color: #757575;
            font-weight: 400;
        }

        .react-calendar__tile--now {
            background: #85ff89;
        }

        .react-calendar__tile--now:enabled:hover,
        .react-calendar__tile--now:enabled:focus {
            background: #adffb0;
        }

        .react-calendar__tile--active {
            background: #00579D;
            color: white;
        }

        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
            background: #006abf;
        }
    }
`;