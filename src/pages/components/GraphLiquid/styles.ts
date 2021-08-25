import styled, { css } from 'styled-components';

interface WavesProps {
    valor: number;
}

export const Circle = styled.div<WavesProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;

    position: relative;
    overflow: hidden;

    box-shadow: 0px 0px 0px 0.3vh white, 0px 0px 0px 0.9vh #00579D;

    &::after {
        content: '0%';
        color: white;
        font-weight: bold;
        font-size: 3vh;
        text-shadow: 0vh 0vh 0.5vh rgba(0, 0, 0, 1);
        position: absolute;
    }

    circle {
         &:before {
            content: '';
            position: absolute;
            width: 8vw;
            height: 18vh;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 40% 41% 42% 43%;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 10px -12px, rgba(0, 0, 0, 0.3) 0px 10px 10px -10px;
        }

        &:nth-child(1) {
            &::before {
                background-color: #00579D;
                animation: fill-right 12s linear infinite;
            }
        }

        &:nth-child(2) {
            &::before {
                background-color: #0075b1;
                animation: fill-left 12s linear infinite;
            }
        }

        &:nth-child(3) {
            &::before {
                background-color: #0091BD;
                animation: fill-right 12s linear infinite;
            }
        }

        &:nth-child(4) {
            &::before {
                background-color: #009ecf;
                animation: fill-left 12s linear infinite;
            }
        }

        @keyframes fill-left {
            from {
                top: 70px;
                transform: translateX(-50%) rotate(360deg);
            }
    
            to {
                top: 70px;
                transform: translateX(-50%) rotate(0deg);
            }
        }

        @keyframes fill-right {
            from {
                top: 70px;
                transform: translateX(-50%) rotate(0deg);
            }
    
            to {
                top: 70px;
                transform: translateX(-50%) rotate(360deg);
            }
        }

    }

    ${props => props.valor <= 10 && css`
        &::after {
            content: '${props.valor}%';
        }

        
    `}

    ${props => props.valor > 10 && props.valor <= 20 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 20 && props.valor <= 30 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 30 && props.valor <= 40 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 40 && props.valor <= 50 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 50 && props.valor <= 60 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 60 && props.valor <= 70 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 70 && props.valor <= 80 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 80 && props.valor <= 90 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 90 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    
`;

export const Waves = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;        
`;