import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

import api from '../../service/api';

import { ContainerLine } from './styles';

interface LineProps {
  counts: number;
}

interface CountPerData {
  data: string;
  verbaUtilizada: number;
}

const GraphLine: React.FC<LineProps> = ({ counts }) => {
  const [countsPerData, setCountsPerData] = useState<CountPerData[]>([]);
  
  const datas = countsPerData.map(datas => datas.data);
  const verbas = countsPerData.map(verbas => verbas.verbaUtilizada);

  useEffect(() => {
    api.get<CountPerData[]>(`projetos/count/${counts}`).then((response => {
      setCountsPerData(response.data)
    })); 
  },[counts]);

  const data = {
    labels: datas.reverse(),
    datasets: [{
      label: 'VERBA',
      data: verbas.reverse(),
      fill: true,
      backgroundColor: 'rgba(0, 186, 255, 0.19)',
      borderColor: '#0090C5',
    }],
  };
      
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

  return (
    <>
      <ContainerLine> 
        <Line width={50} height={50} data={data} options={{ maintainAspectRatio: false }} />
      </ContainerLine>
    </>
  );
}

export default GraphLine;