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
        text-shadow: 0vh 0vh 1vh rgba(0, 0, 0, 1);
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
            border-radius: 50%;
        }

        &:nth-child(1) {
            &::before {
                background-color: #00579D;
                animation: fill 7s ease-in-out infinite;
            }
        
            @keyframes fill {
                from {
                    top: 0px;
                    transform: translateX(-50%) rotate(0deg);
                }
        
                to {
                    top: 0px;
                    transform: translateX(-50%) rotate(360deg);
                }
            }
        }

        &:nth-child(2) {
            &::before {
                background-color: #0075b1;
                animation: fill2 7s ease-in-out infinite;
            }
        
            @keyframes fill2 {
                from {
                    top: 20px;
                    transform: translateX(-50%) rotate(0deg);
                }
        
                to {
                    top: 20px;
                    transform: translateX(-50%) rotate(360deg);
                }
            }
        }

        &:nth-child(3) {
            &::before {
                background-color: #0091BD;
                animation: fill3 7s ease-in-out infinite;
            }
        
            @keyframes fill3 {
                from {
                    top: 40px;
                    transform: translateX(-50%) rotate(0deg);
                }
        
                to {
                    top: 40px;
                    transform: translateX(-50%) rotate(360deg);
                }
            }
        }

        &:nth-child(4) {
            &::before {
                background-color: #009ecf;
                animation: fill4 7s ease-in-out infinite;
            }
        
            @keyframes fill4 {
                from {
                    top: 60px;
                    transform: translateX(-50%) rotate(0deg);
                }
        
                to {
                    top: 60px;
                    transform: translateX(-50%) rotate(360deg);
                }
            }
        }

    }

    ${props => props.valor <= 30 && css`

        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 30 && props.valor <= 60 && css`
     
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 60 && props.valor <= 90 && css`
       
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