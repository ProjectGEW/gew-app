import React from 'react';

import { Container, Skill, Outer, Inner, Number } from './styles';

const GraphCircular: React.FC = () => {
    return (
        <>
        <Container>
            <Skill>
                <Outer>
                    <Inner>
                        <Number>57%</Number>
                    </Inner>
                </Outer>
            </Skill>   

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                <linearGradient id="GradientColor">
                    <stop offset="25%" stop-color="#00579D" />
                    <stop offset="50%" stop-color="#006FC8" />
                    <stop offset="75%" stop-color="#0090C5" />
                    <stop offset="100%" stop-color="#28B9DA" />
                </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
        </Container>
        </>
    );
}

export default GraphCircular;