import styled, { css } from 'styled-components';

interface GraphCircularProps {
    tipo?: string;
    valor: number;
    porcentagem?: number;
}

export const Container = styled.div<GraphCircularProps>`
    display: flex;
    align-items: center;
    justify-content: center;     
    margin-top: 4vh;

    ${props => props.tipo === "%" && css`
        div {
            div {
                div {
                    div {
                        font-size: 3.8vh;  
                    }
                }
            }
        }
    `}

    circle {
        fill: none;
        stroke: url(#GradientColor);
        stroke-width: 20px;
        stroke-dasharray: 500;
        stroke-dashoffset: 500;              
        stroke-Linecap: round;

        ${props => props.valor === 0 && css`
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
        `}

        ${props => props.porcentagem === 0 && css`
            stroke-dasharray: 0;
            stroke-dashoffset: 0;
        `}

        ${props => props.valor > 1 && props.valor <= 999 && css`
            stroke-dashoffset: calc(500 - ${props.porcentagem});
        `}        

        ${props => props.valor >= 1000 && css`
            stroke-dashoffset: calc((${props.porcentagem} / 100) - 25);
        `}
        
    }

    svg {
        position: absolute;
        top: 5;
        left: 5;
    }
`;

export const Skill = styled.div`
    width: 160px;
    height: 160px;
    position: relative;  
          
`;

export const Outer = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    padding: 20px;
    background: rgba(226, 226, 226, 0.4);
    box-shadow: 6px 6px 10px -1px rgb(0, 0, 0, 0.15), -6px -6px 10px -1px rgb(255, 255, 255, 0.7);
`;

export const Inner = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: center;
    box-shadow: inset 4px 4px 6px -1px rgb(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgb(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgb(255, 255, 255, 1), 0.5px 0.5px 0px rgb(0, 0, 0, 0.15),
    0px 12px 10px -10px rgb(0, 0, 0, 0.5);
`;

export const Number = styled.div`
    font-weight: bold;  
    font-size: 2vh;     
    color: #555;
`;

