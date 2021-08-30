import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;     
    margin-top: 10vh;  

    circle {
        fill: none;
        stroke: url(#GradientColor);
        stroke-width: 20px;
        stroke-dasharray: 472;
        stroke-dashoffset: 472;
        animation: ani 2s linear forwards;
    }

    svg {
        position: absolute;
        top: 5;
        left: 5;
    }

    @keyframes ani {
        100% {
            stroke-dashoffset: 0;
        }
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
    box-shadow: 6px 6px 10px -1px rgb(0, 0, 0, 0.15), -6px -6px 10px -1px rgb(255, 255, 255, 0.7);
`;

export const Inner = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 4px 4px 6px -1px rgb(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgb(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgb(255, 255, 255, 1), 0.5px 0.5px 0px rgb(0, 0, 0, 0.15),
    0px 12px 10px -10px rgb(0, 0, 0, 0.5);
`;

export const Number = styled.div`
    font-weight: bold;  
    font-size: 4vh;     
    color: #555;
`;

