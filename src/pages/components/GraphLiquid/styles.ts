import styled, { css } from 'styled-components';

interface WavesProps {
    valor: number;
}

export const Waves = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;        
`;

export const Circle = styled.div<WavesProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;

    position: relative;
    overflow: hidden;

    box-shadow: 0px 0px 0px 0.3vh white, 0px 0px 0px 0.9vh #00579D;
    background-color: rgb(226, 226, 226);

    &::after {
        content: '0%';
        font-weight: bold;
        font-size: 3vh;
        color: #00579D;
        text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
        position: absolute;
    }

    div {
         &:before {
            content: '';
            position: absolute;
            width: 8vw;
            height: 18vh;
            left: 50%;
            transform: translateX(100%);
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

        @keyframes wave-height-5 {
            from {
                top: 100px;
            }
            to {
                top: 100px;
            }
        }
        @keyframes wave-height-10 {
            from {
                top: 90px;
            }
            to {
                top: 90px;
            }
        }
        @keyframes wave-height-15 {
            from {
                top: 85px;
            }
            to {
                top: 85px;
            }
        }
        @keyframes wave-height-20 {
            from {
                top: 80px;
            }
            to {
                top: 80px;
            }
        }
        @keyframes wave-height-25 {
            from {
                top: 75px;
            }
            to {
                top: 75px;
            }
        }
        @keyframes wave-height-30 {
            from {
                top: 70px;
            }
            to {
                top: 70px;
            }
        }  
        @keyframes wave-height-35 {
            from {
                top: 65px;
            }
            to {
                top: 65px;
            }
        }
        @keyframes wave-height-40 {
            from {
                top: 60px;
            }
            to {
                top: 60px;
            }
        }
        @keyframes wave-height-45 {
            from {
                top: 55px;
            }
            to {
                top: 55px;
            }
        }
        @keyframes wave-height-50 {
            from {
                top: 50px;
            }
            to {
                top: 50px;
            }
        }
        @keyframes wave-height-55 {
            from {
                top: 45px;
            }
            to {
                top: 45px;
            }
        } 
        @keyframes wave-height-60 {
            from {
                top: 40px;
            }
            to {
                top: 40px;
            }
        }
        @keyframes wave-height-65 {
            from {
                top: 35px;
            }
            to {
                top: 35px;
            }
        }
        @keyframes wave-height-70 {
            from {
                top: 30px;
            }
            to {
                top: 30px;
            }
        }
        @keyframes wave-height-75 {
            from {
                top: 25px;
            }
            to {
                top: 25px;
            }
        }
        @keyframes wave-height-80 {
            from {
                top: 20px;
            }
            to {
                top: 20px;
            }
        }
        @keyframes wave-height-85 {
            from {
                top: 15px;
            }
            to {
                top: 15px;
            }
        }  
        @keyframes wave-height-90 {
            from {
                top: 10px;
            }
            to {
                top: 10px;
            }
        }
        @keyframes wave-height-95 {
            from {
                top: 5px;
            }
            to {
                top: 5px;
            }
        }
        @keyframes wave-height-100 {
            from {
                top: 0px;
            }
            to {
                top: 0px;
            }
        }     
    }     

    ${props => props.valor <= 5 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-20 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-10 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-10 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 5 && props.valor <= 10 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-25 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-15 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-10 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 10 && props.valor <= 15 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-25 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-20 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-10 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 15 && props.valor <= 20 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-30 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-25 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-15 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 20 && props.valor <= 25 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-35 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-30 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-20 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 25 && props.valor <= 30 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-40 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-30 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-20 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 30 && props.valor <= 35 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-45 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-35 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-25 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-5 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 35 && props.valor <= 40 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-50 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-40 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-30 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-10 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 40 && props.valor <= 45 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-55 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-45 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-35 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-10 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 45 && props.valor <= 50 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-60 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-50 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-40 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-15 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 50 && props.valor <= 55 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-65 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-55 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-45 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-20 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 55 && props.valor <= 60 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-70 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-60 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-50 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-25 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 60 && props.valor <= 65 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-75 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-65 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-55 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-30 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 65 && props.valor <= 70 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-80 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-70 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-60 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-35 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 75 && props.valor <= 80 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-85 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-75 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-65 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-35 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 80 && props.valor <= 85 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-90 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-80 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-65 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-40 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 85 && props.valor <= 90 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-95 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-85 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-75 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-40 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 90 && props.valor <= 95 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-95 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-80 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-60 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-30 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}

    ${props => props.valor > 95 && props.valor <= 100 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    animation: wave-height-100 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(2) {
                &::before {
                    animation: wave-height-85 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
            &:nth-child(3) {
                &::before {
                    animation: wave-height-65 12s linear infinite, wave-right 10s linear infinite;;
                }
            }
            &:nth-child(4) {
                &::before {
                    animation: wave-height-35 12s linear infinite, wave-left 10s linear infinite;;
                }
            }
        }
    `}
`;