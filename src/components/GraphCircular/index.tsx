import React from 'react';

import { Container, Skill, Outer, Inner, Number } from './styles';

import analisaValor from '../../utils/analisaValor';

interface GraphCircularProps {
  valor: number;
  total: number;
  tipo?: string;
}

function calculaPorcentagem(valor: number, total: number) {   
  return (valor / total) * 100;
}

const GraphCircular: React.FC<GraphCircularProps> = ({valor, total, tipo}) => {
  return (
    <>
    <Container valor={calculaPorcentagem(valor, total)} tipo={tipo}>
      <Skill>
        <Outer>
          <Inner>
            <Number>
              {
                tipo === "valor" ? analisaValor(valor) :
                tipo === "hora" ? valor + " horas" :
                tipo === "%" ? Math.trunc(calculaPorcentagem(valor, total)) + "%" : 0 
              }
            </Number>
          </Inner>
        </Outer>
      </Skill>   
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="25%" stopColor="#00579D" />
            <stop offset="50%" stopColor="#006FC8" />
            <stop offset="75%" stopColor="#0090C5" />
            <stop offset="100%" stopColor="#28B9DA" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </Container>
    </>
  );
}

export default GraphCircular;