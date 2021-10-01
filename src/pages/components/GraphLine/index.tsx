import React from 'react';

import { Line } from 'react-chartjs-2';

import { Container } from './styles';

const GraphLine: React.FC = () => {
    const data = {
        labels: ['01/10', '02/10', '03/10', '04/10', '05/10', '06/10', '07/10', '08/10', '09/10', '10/10', '11/10', '12/10'],
        datasets: [
          {
            label: 'VERBA',
            data: [12, 14, 8, 6, 7, 1, 8, 12, 16, 12, 10, 11],
            fill: true,
            backgroundColor: 'rgba(0, 186, 255, 0.19)',
            borderColor: '#0090C5',
          },
        ],
      };
      
      const options = {
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

      console.log(options);

    return (
        <>
        <Container>
            <Line width={50} height={50} data={data} options={{ maintainAspectRatio: false }} />
        </Container>
        </>
    );
}

export default GraphLine;