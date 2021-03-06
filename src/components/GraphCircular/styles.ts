import styled, { css } from 'styled-components';

interface GraphCircularProps {
    valor: number;
    total?: number;
    tipo?: string;
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
            stroke-dashoffset: 500;
        `}

        ${props => props.valor > 1 && props.valor <= 5 && css`
            stroke-dashoffset: 470;
        `}

        ${props => props.valor > 5 && props.valor <= 10 && css`
            stroke-dashoffset: 450;
        `}

        ${props => props.valor > 10 && props.valor <= 15 && css`
            stroke-dashoffset: 430;
        `}

        ${props => props.valor > 15 && props.valor <= 20 && css`
            stroke-dashoffset: 410;
        `}

        ${props => props.valor > 20 && props.valor <= 25 && css`
            stroke-dashoffset: 390;
        `}

        ${props => props.valor > 25 && props.valor <= 30 && css`
            stroke-dashoffset: 370;
        `}

        ${props => props.valor > 30 && props.valor <= 35 && css`
            stroke-dashoffset: 350;
        `}  

        ${props => props.valor > 35 && props.valor <= 40 && css`
            stroke-dashoffset: 330;
        `}  

        ${props => props.valor > 40 && props.valor <= 45 && css`
            stroke-dashoffset: 310;
        `}  

        ${props => props.valor > 45 && props.valor <= 50 && css`
            stroke-dashoffset: 290;
        `}  

        ${props => props.valor > 50 && props.valor <= 55 && css`
            stroke-dashoffset: 270;
        `}  

        ${props => props.valor > 55 && props.valor <= 60 && css`
            stroke-dashoffset: 250;
        `}

        ${props => props.valor > 60 && props.valor <= 65 && css`
            stroke-dashoffset: 230;
        `}

        ${props => props.valor > 65 && props.valor <= 70 && css`
            stroke-dashoffset: 210;
        `}

        ${props => props.valor > 70 && props.valor <= 75 && css`
            stroke-dashoffset: 190;
        `}

        ${props => props.valor > 75 && props.valor <= 80 && css`
            stroke-dashoffset: 170;
        `}

        ${props => props.valor > 80 && props.valor <= 85 && css`
            stroke-dashoffset: 150;
        `}

        ${props => props.valor > 85 && props.valor <= 90 && css`
            stroke-dashoffset: 130;
        `}

        ${props => props.valor > 90 && props.valor <= 95 && css`
            stroke-dashoffset: 110;
        `}

        ${props => props.valor > 95 && props.valor <= 99 && css`
            stroke-dashoffset: 90;
        `}

        ${props => props.valor === 100 && css`
            stroke-dashoffset: 0;
        `}

        // =========================================================================
/*
        ${props => props.tipo === "hora" && props.valor > 1 && props.valor <= 10 && css`
            stroke-dashoffset: 450;
        `}

        ${props => props.tipo === "hora" && props.valor > 10 && props.valor <= 20 && css`
            stroke-dashoffset: 420;
        `}

        ${props => props.tipo === "hora" && props.valor > 20 && props.valor <= 30 && css`
            stroke-dashoffset: 380;
        `}

        ${props => props.tipo === "hora" && props.valor > 30 && props.valor <= 40 && css`
            stroke-dashoffset: 340;
        `}

        ${props => props.tipo === "hora" && props.valor > 40 && props.valor <= 50 && css`
            stroke-dashoffset: 280;
        `}

        ${props => props.tipo === "hora" && props.valor > 50 && props.valor <= 60 && css`
            stroke-dashoffset: 250;
        `}  

        ${props => props.tipo === "hora" && props.valor > 60 && props.valor <= 70 && css`
            stroke-dashoffset: 210;
        `}  

        ${props => props.tipo === "hora" && props.valor > 70 && props.valor <= 80 && css`
            stroke-dashoffset: 180;
        `}  

        ${props => props.tipo === "hora" && props.valor > 80 && props.valor <= 90 && css`
            stroke-dashoffset: 120;
        `}  

        ${props => props.tipo === "hora" && props.valor > 90 && props.valor <= 100 && css`
            stroke-dashoffset: 0;
        `}  

        // =========================================================================

        ${props => props.tipo === "valor" && props.valor > 1 && props.valor <= 10 && css`
            stroke-dashoffset: 450;
        `}

        ${props => props.tipo === "valor" && props.valor > 10 && props.valor <= 20 && css`
            stroke-dashoffset: 420;
        `}

        ${props => props.tipo === "valor" && props.valor > 20 && props.valor <= 30 && css`
            stroke-dashoffset: 380;
        `}

        ${props => props.tipo === "valor" && props.valor > 30 && props.valor <= 40 && css`
            stroke-dashoffset: 340;
        `}

        ${props => props.tipo === "valor" && props.valor > 40 && props.valor <= 50 && css`
            stroke-dashoffset: 280;
        `}

        ${props => props.tipo === "valor" && props.valor > 50 && props.valor <= 60 && css`
            stroke-dashoffset: 250;
        `}  

        ${props => props.tipo === "valor" && props.valor > 60 && props.valor <= 70 && css`
            stroke-dashoffset: 210;
        `}  

        ${props => props.tipo === "valor" && props.valor > 70 && props.valor <= 80 && css`
            stroke-dashoffset: 180;
        `}  

        ${props => props.tipo === "valor" && props.valor > 80 && props.valor <= 90 && css`
            stroke-dashoffset: 120;
        `}  

        ${props => props.tipo === "valor" && props.valor > 90 && props.valor <= 100 && css`
            stroke-dashoffset: 0;
        `}  */
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
    font-size: 2.4vh;     
    color: #555;
`;