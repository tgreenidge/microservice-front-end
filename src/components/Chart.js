import React, { Component } from 'react';
import { Bar } from 'react-chartjs';

class Chart extends Component {
  render() {
    const chartOptions = {
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    };

    //dummy data  need to wire up the chart
    let data = {
      datasets: [
        {
          label: 'Jan',
          fillColor: ['#3e95cd'],
          data: [100]
        },
        {
          label: 'Feb',
          fillColor: ['#3e95cd'],
          data: [200]
        }
      ],
      labels: ['Claims filed in 2018']
    };

    return <Bar data={data} options={chartOptions} width="600" height="250" />;
  }
}

export default Chart;
