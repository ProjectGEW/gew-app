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
        margin-top: 2vh;

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
            font-size: 2.8vh;

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

            font-size: 2.2vh;
            text-align: center;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }

        #data_de_inicio {
            ${props => props.hasErrorInicio && css`
                border: 0.25vh solid rgb(255, 0, 0, 0.8);
            `}
        }

        #data_de_termino {
            ${props => props.hasErrorFim && css`
                border: 0.25vh solid rgb(255, 0, 0, 0.8);
            `}
        }

        #data_de_aprovacao {
            ${props => props.hasErrorAprovacao && css`
                border: 0.25vh solid rgb(255, 0, 0, 0.8);
            `}
        }
    }

    .calendario {
        width: 40vw;
        margin-left: 11.2vw;
        margin-top: 2vh;

        border: 0;
        border-radius: 0.8vh;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

        .react-calendar__navigation {
            height: 4vh;
            background: #00579D;
            border-bottom: 0vh solid rgba(60, 64, 67, 0.15);            
            margin-bottom: 0vh;
            margin-top: 0vh;
            border-radius: 0.8vh 0.8vh 0 0;
        }

        .react-calendar__month-view__weekdays {
            font-size: 1.8vh;
            background: #00579D;
            color: #fff;
        }

        .react-calendar__navigation button {
            font-size: 2.4vh;
            text-transform: uppercase;
            font-weight: bold;
            color: #fff;

            &:nth-child(1), &:nth-child(2), &:nth-child(4), &:nth-child(5) {
                font-size: 3vh;
            }
        }

        .react-calendar__tile {
            padding: 1vh;
            padding-top: 1.5vh;
            font-weight: bold;
            border-radius: 0.4vh;
            box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
            color: #222;
        }

        .react-calendar__month-view__days__day--weekend {
            color: #36a6ff;
        }

        .react-calendar__month-view__days__day--neighboringMonth {
            color: #999;
        }

        .react-calendar__tile--now {
            background: #78ff7c;
        }

        .react-calendar__tile--now:enabled:hover,
        .react-calendar__tile--now:enabled:focus {
            background: #96ff9a;
        }

        .react-calendar__tile--active {
            background: #00579D;
            color: white;
        }

        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
            background: #006abf;
        }

        .react-calendar__tile:hover {
            background-color: #c2e4ff;
        }

        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
            border-radius: 0.8vh 0.8vh 0 0;
            background-color: #004f8f;
        }
    }
`;