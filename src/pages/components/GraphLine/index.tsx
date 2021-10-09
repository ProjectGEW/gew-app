import React from 'react';

import { Line } from 'react-chartjs-2';

//import api from '../../../service/api';

import { Container } from './styles';

/*interface Count {
  contagem: {
      concluidos: number;
      emAndamento: number;
      atrasados: number;
      total: number;
  };
  verba: {
      verbaConcluidos: number;
      verbaEmAndamento: number;
      verbaAtrasados: number;
  }
}

interface CountPerData {
  data: string;
  projetosConcluidos: number;
}*/

const GraphLine: React.FC = () => {
    /*const [counts, setCounts] = useState<Count>();
    const [countsPerData, setCountsPerData] = useState<CountPerData[]>([]);
    const today = new Date();

    const today_string = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    window.onload = async function handleData(): Promise<void> {
        try {
            const response = await api.get<Count>(`projetos/count`);
            const contagem = response.data;

            setCounts(contagem);

            const response_perData = await api.get<CountPerData[]>(`projetos/count/${today_string}`);
            const contagem_perData = response_perData.data;

            setCountsPerData(contagem_perData);
            
        } catch (err) {
           console.log("Não foi possivel realizar a leitura de dados");
        }
    }*/

    const data = {
        labels: ['01/10', '02/10', '03/10', '04/10', '05/10', '06/10', '07/10', '08/10', '09/10', '10/10', '11/10', '12/10', '13/10', '14/10'],
        datasets: [
          {
            label: 'VERBA',
            data: [],
            fill: true,
            backgroundColor: 'rgba(0, 186, 255, 0.19)',
            borderColor: '#0090C5',
          },
        ],
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
        <Container>
            <Line width={50} height={50} data={data} options={{ maintainAspectRatio: false }} />
        </Container>
        </>
    );
}

export default GraphLine;