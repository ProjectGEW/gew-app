import styled, { css } from 'styled-components';

interface WavesProps {
    valor: number;
}

export const Circle = styled.div<WavesProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;

    //background-image: linear-gradient(to bottom, #00579d 25%, #0075B1 50%, #0091BD 75%, #009ecf 100% );
    
    box-shadow: 0px 0px 0px 0.3vh white, 0px 0px 0px 0.9vh #00579D;

    overflow: hidden;

    &::after {
        content: '0%';
        color: white;
        font-weight: bold;
        font-size: 3vh;
        text-shadow: 0vh 0vh 1vh rgba(0, 0, 0, 1);
        position: absolute;
    }

    ${props => props.valor <= 30 && css`
    background-image: linear-gradient(to bottom, white 86%, #0075B1 30%, #0075B1 50%, #0091BD 75%, #009ecf 100%);

        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 30 && props.valor <= 60 && css`
        background-image: linear-gradient(to bottom, white 65%, #0075B1 30%, #0075B1 50%, #0091BD 75%, #009ecf 100%);

        &::after {
            content: '${props.valor}%';
        }
    `}

    ${props => props.valor > 60 && props.valor <= 100 && css`
        background-image: linear-gradient(to bottom, white 30%, #0075B1 30%, #0075B1 50%, #0091BD 75%, #009ecf 100%);

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

    circle {
        width: 200%;
        height: 8vh;
        display: none;
        
        &:nth-child(1) {
            background: #00579D;            
        }

        &:nth-child(2) {
            background: #0075B1;
            
        }

        &:nth-child(3) {
            background: #0091BD;            
        }

        &:nth-child(4) {
            background: #009ecf;
            
        }
    }
`;