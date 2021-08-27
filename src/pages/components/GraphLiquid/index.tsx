import React from 'react';

import { Circle, Waves } from './styles';

interface ValorCircle {
    valor: number;
}

const GraphLiquid: React.FC<ValorCircle> = ({valor}) => {
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