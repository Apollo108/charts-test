import React, { Component } from 'react';
import { Chart } from 'chart.js';

import { getColorsArray } from '../helpers';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartNode = React.createRef();
  }

  componentDidMount() {
    const { backgroundColor, borderColor } = getColorsArray();
    this.chart = new Chart(this.chartNode.current, {
      type: 'bar',
      data: {
          labels: ['-100', '-90', '-80', '-70', '-60', '-50', '-40', '-30', '-20', '-10', '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
          datasets: [{
              label: 'Bar chart',
              data: this.props.barChartData,
              backgroundColor,
              borderColor,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    suggestedMax: 5,
                    stepSize: 1,
                  }
              }],
              xAxes: [{
                ticks: {
                  min: -100,
                  max: 100,
                  stepSize: 10,
                  callback: value => value +  '          '
                }
            }],
          }
      }
    });
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart = () => {
    this.chart.data.datasets[0].data = this.props.barChartData;
    this.chart.update();
  }

  render() {
    return (
      <canvas ref={this.chartNode}></canvas>
    )
  }
}
