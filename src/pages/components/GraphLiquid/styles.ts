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
                
            }
        }

        &:nth-child(2) {
            &::before {
                background-color: #0075b1;
                
            }
        }

        &:nth-child(3) {
            &::before {
                background-color: #0091BD;
                
            }
        }

        &:nth-child(4) {
            &::before {
                background-color: #009ecf;
                
            }
        }

        @keyframes wave-right {
            from {
                transform: translateX(-50%) rotate(0deg);
            }
            to {
                transform: translateX(-50%) rotate(360deg);
            }
        }

        @keyframes wave-left {
            from {
                transform: translateX(-50%) rotate(360deg);
            }
            to {
                transform: translateX(-50%) rotate(0deg);
            }
        }

        @keyframes wave-height-0 {
            from {
                top: 0px;
            }
            to {
                top: 0px;
            }
        }
        @keyframes wave-height-1 {
            from {
                top: 10px;
            }
            to {
                top: 10px;
            }
        }
        @keyframes wave-height-2 {
            from {
                top: 20px;
            }
            to {
                top: 20px;
            }
        }
        @keyframes wave-height-3 {
            from {
                top: 30px;
            }
            to {
                top: 30px;
            }
        }
        @keyframes wave-height-4 {
            from {
                top: 40px;
            }
            to {
                top: 40px;
            }
        }
        @keyframes wave-height-5 {
            from {
                top: 50px;
            }
            to {
                top: 50px;
            }
        }  
        @keyframes wave-height-6 {
            from {
                top: 60px;
            }
            to {
                top: 60px;
            }
        }
        @keyframes wave-height-7 {
            from {
                top: 70px;
            }
            to {
                top: 70px;
            }
        }
        @keyframes wave-height-8 {
            from {
                top: 80px;
            }
            to {
                top: 80px;
            }
        }
        @keyframes wave-height-9 {
            from {
                top: 90px;
            }
            to {
                top: 90px;
            }
        }
        @keyframes wave-height-10 {
            from {
                top: 100px;
            }
            to {
                top: 100px;
            }
        }      
    }

    ${props => props.valor <= 10 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(2) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-7 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-7 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 10 && props.valor <= 20 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(2) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 20 && props.valor <= 30 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 30 && props.valor <= 40 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 40 && props.valor <= 50 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    display: none;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-3 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-4 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 50 && props.valor <= 60 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-2 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-3 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-4 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 60 && props.valor <= 70 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-2 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-3 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-4 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 70 && props.valor <= 80 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-3 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-2 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-4 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 80 && props.valor <= 90 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-2 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-2 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-4 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 90 && css`
        &::after {
            content: '${props.valor}%';
        }

        circle {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-0 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-2 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-4 12s linear infinite, wave-right 12s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-6 12s linear infinite, wave-left 12s linear infinite;;
                }
            }
        }
    `}

    
`;

export const Waves = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;        
`;