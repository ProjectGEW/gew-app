import React from 'react';

import { Circle, Waves } from './styles';

interface ValorCircle {
    valor: number;
    dashboard?: boolean;
}

const GraphLiquid: React.FC<ValorCircle> = ({valor, dashboard}) => {
    return (
        <Circle valor={valor} dashboard={dashboard}>
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