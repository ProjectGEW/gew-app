import React from 'react';

import { Circle, Waves } from './styles';

interface ValorCircle {
    valor: number;
}

const GraphLiquid: React.FC<ValorCircle> = ({valor}) => {
    return (
        <Circle valor={valor}>
            <Waves>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Waves>
        </Circle>        
    );
}

export default GraphLiquid;