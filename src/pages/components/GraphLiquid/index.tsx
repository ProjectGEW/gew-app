import React from 'react';

import { Circle, Waves } from './styles';

interface Circle {
    valor: number;
}

const GraphLiquid: React.FC<Circle> = ({valor}) => {
    return (
        <Circle valor={valor}>
            <Waves>
                <circle></circle>
                <circle></circle>
                <circle></circle>
                <circle></circle>
            </Waves>
        </Circle>        
    );
}

export default GraphLiquid;