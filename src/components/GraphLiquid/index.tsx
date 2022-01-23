import React from 'react';

import { Circle, Waves } from './styles';

interface ValorCircle {
    valor: number;
    dashboard?: boolean;
    animacao?: boolean;
}

const GraphLiquid: React.FC<ValorCircle> = ({ valor, dashboard, animacao }) => {
    console.log(animacao);
    return (
        <Circle valor={valor} dashboard={dashboard} animacao={animacao}>
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