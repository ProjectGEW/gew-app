import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

import api from '../../../service/api';

import { Container } from './styles';

interface LineProps {
  counts: any;
}

interface CardContent {
  infoprojetoDTO : {
      id: number;
      numeroDoProjeto: number;
      titulo: string;
      descricao: string;
      data_de_inicio: string;
      data_de_termino: string;
      status: string;
      horas_apontadas: number;
  };
  ccPagantes : [{
      secao: {
          id: number;
          responsavel: {
            numero_cracha: number;
            nome: string;
            cpf: string;
            valor_hora: number;
          };
          nome: string;
      },
      percentual: number;
      valor: number;
  }];
  valoresTotaisDTO : {
      valorTotalCcPagantes: number;
      valorTotalDespesas: number;
      valorTotalEsforco: number;
  };      
}

interface ISecoes {
  nome: string;
}

interface CountPerData {
  data: string;
  verbaUtilizada: number;
}

const GraphLine: React.FC<LineProps> = ({ counts }) => {
  const [countsPerData, setCountsPerData] = useState<CountPerData[]>([]);

  useEffect(() => {
    window.onload = async function handleProjetos() {
      const response_perData = await api.get<CountPerData[]>(`projetos/count/14`);
      const contagem_perData = response_perData.data;
      setCountsPerData(contagem_perData);        
    }
  },[]);


  const data = {
    labels: ['01/10', '02/10', '03/10', '04/10', '05/10', '06/10', '07/10', '08/10', '09/10', '10/10', '11/10', '12/10', '13/10', '14/10'],
    datasets: [{
      label: 'VERBA',
      data: [],
      fill: true,
      backgroundColor: 'rgba(0, 186, 255, 0.19)',
      borderColor: '#0090C5',
    }],
  };

  //console.log(counts);
      
      /*const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      console.log(options);*/

    //console.log(countsPerData);

  return (
    <>
    <Container> 
      <Line width={50} height={50} data={data} options={{ maintainAspectRatio: false }} />
    </Container>
    </>
  );
}

export default GraphLine;