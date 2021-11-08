import styled, { css } from 'styled-components';

interface WavesProps {
    valor: number;
    dashboard?: boolean;
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

    box-shadow: 0px 0px 0px 0.5vh white, 0px 0px 0px 1vh #00579D;
    background-color: rgba(226, 226, 226, 0.5);

    &::after {
        content: '0%';
        font-weight: bold;
        font-size: 3vh;
        color: #00579D;
        text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
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
                top: 20vh;
            }
        }

        &:nth-child(2) {
            &::before {
                background-color: #0075b1;   
                top: 20vh;  
            }
        }

        &:nth-child(3) {
            &::before {
                background-color: #0091BD; 
                top: 20vh;         
            }
        }

        &:nth-child(4) {
            &::before {
                background-color: #009ecf; 
                top: 20vh;            
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
    }     

    ${props => props.valor <= 40 && css`
        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 40 && css`
        &::after {
            content: '${props.valor}%';
            color: #fff;
        }
    `}

    div {
        &:nth-child(1) {
            &::before {
                animation: wave-right 10s linear infinite;
            }
        }
        &:nth-child(2) {
            &::before {
                animation: wave-left 10s linear infinite;
            }
        }
        &:nth-child(3) {
            &::before {
                animation: wave-right 10s linear infinite;
            }
        }
        &:nth-child(4) {
            &::before {
                animation: wave-left 10s linear infinite;
            }
        }
    }

    ${props => props.dashboard === true && css`
        box-shadow: 0 0 0 1vh white, 0 0 0 2vh #00579D;

        &::after {
            font-size: 5vh;
        }

        div {
            &:before {
                width: 16vw;
                height: 30vh;
            }   
        }            
    `}

    ${props => props.dashboard === true && props.valor === 0 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 100vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 100vh;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor >= 1 && props.valor <= 5 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 23vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 5 && props.valor <= 10 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 21vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 10 && props.valor <= 15 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 20vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 15 && props.valor <= 20 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 20vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 19vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 20 && props.valor <= 25 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 18vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 19vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 25 && props.valor <= 30 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 17vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 18vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 30 && props.valor <= 35 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 100vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 16vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 18vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 35 && props.valor <= 40 && css`
        &::after {
            content: '${props.valor}%';
            color: #00579D;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 15vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 15vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 40 && props.valor <= 45 && css`
        &::after {
            content: '${props.valor}%';
            color: #00579D;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 13vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 14vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 45 && props.valor <= 50 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 10vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 12vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 50 && props.valor <= 55 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 9vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 11vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 55 && props.valor <= 60 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 100vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 8vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 11vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 60 && props.valor <= 65 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 7vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 8vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 11vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 65 && props.valor <= 70 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 7vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 7vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 11vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 70 && props.valor <= 75 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 6vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 7vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 11vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 18vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 75 && props.valor <= 80 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 5vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 6vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 11vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 18vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 80 && props.valor <= 85 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 4.8vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 6vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 10vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 85 && props.valor <= 90 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 4.2vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 6vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 10vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}

    ${props => props.dashboard === true && props.valor > 90 && props.valor <= 95 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 3.8vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 5.8vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 10vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}    

    ${props => props.dashboard === true && props.valor > 95 && props.valor >= 100 && css`
        &::after {
            content: '${props.valor}%';
            color: white;
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 2vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 5.8vh;
                    animation: wave-left 10s linear infinite;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 10vh;
                    animation: wave-right 10s linear infinite;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 17vh;
                    animation: wave-left 10s linear infinite;
                }
            }
        }
    `}  
    
    ${props => props.dashboard !== true && props.valor === 0 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 13vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor >= 1 && props.valor <= 5 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 10vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 5 && props.valor <= 10 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 10vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 10vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 10 && props.valor <= 15 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 10vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 9vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 15 && props.valor <= 20 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 8vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 9vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 20 && props.valor <= 25 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 7.5vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 25 && props.valor <= 30 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 7vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 30 && props.valor <= 35 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 6vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 7.8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 35 && props.valor <= 40 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5.8vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 7.4vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 40 && props.valor <= 45 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 6vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5.6vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 7.2vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 45 && props.valor <= 50 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 4vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5.4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 7vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 50 && props.valor <= 55 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 20vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 3.8vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5.4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 55 && props.valor <= 60 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 10vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 3.6vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5.4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 60 && props.valor <= 65 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 10vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 3.4vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5.2vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 65 && props.valor <= 70 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 8vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 3.2vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 70 && props.valor <= 75 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 4vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 3vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 5vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 75 && props.valor <= 80 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 4vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 2.8vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 4.6vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 80 && props.valor <= 85 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 3.2vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 2.6vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 4.4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 85 && props.valor <= 90 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 3vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 2vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 90 && props.valor <= 95 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 1.4vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 2vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 8vh;
                }
            }
        }
    `}

    ${props => props.dashboard !== true && props.valor > 95 && props.valor >= 100 && css`
        &::after {
            content: '${props.valor}%';
        }

        div {
            &:nth-child(1) {
                &::before {
                    top: 0vh;
                }
            }
            &:nth-child(2) {
                &::before {
                    top: 2vh;
                }
            }
            &:nth-child(3) {
                &::before {
                    top: 4.4vh;
                }
            }
            &:nth-child(4) {
                &::before {
                    top: 7.4vh;
                }
            }
        }
    `}
`;