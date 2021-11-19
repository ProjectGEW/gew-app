import styled, { css } from 'styled-components';

import Tooltip from "../Tooltip";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-top: 5vh;
`;

export const User = styled.div<ContainerProps>`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 6px;
    border: 0vh;
    border-bottom: 0.4vh solid #afafaf;
    border-radius: 0;

    ${props => props.isFocused && css`
        color: #228B22;
        border-color: #00579D;
        transition: all 0.2s;        
    `}

    ${props => props.isFilled && css`
        color: #228B22;
    `}

    ${props => props.isErrored && css`
        border-color: #c53030;

        & + label {
            transition: 0;
            color: #c53030;
        }
    `}
   
    input {
        background-color: transparent;
        border: 0vh;
        outline: 0;
        font-size: 3vh;
        font-weight: bold;
        color: #333;
        flex: 1;
        z-index: 2;     

        ::placeholder {
            margin-top: 0vh;
            margin-left: 0vh;
            position: absolute;
            cursor: text;
            font-size: 2.5vh;
            padding: 1vh;
            color: #00579D;
            font-weight: bold;
            z-index: 0;
            transition: all 0.2s;
        }

        &:focus ~ label {
            transform: scale(0.9) translateY(-100%) translateX(-3vh);
        }

        &:valid ~ label {
            transform: scale(0.9) translateY(-100%) translateX(-3vh);
        }
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
 
    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;
        text-align: center;
        
        &::before {
            border-color: #c53030 transparent;
        }
    }
`;