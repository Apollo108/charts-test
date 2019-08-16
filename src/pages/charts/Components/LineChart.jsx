import React, { Component } from 'react';
import Chart from 'chart.js';
import { format } from 'date-fns';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.chartNode = React.createRef();
  }

  componentDidMount() {
    this.chart = new Chart(this.chartNode.current, {
      type: 'line',
      data: {
          labels: [],
          datasets: [{
              label: 'Line chart',
              data: this.props.lineChartData,
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                  }
              }],
          }
      }
    });
  }

  componentDidUpdate() {
    this.updateChart()
  }

  updateChart = () => {
    const { lineChartData } = this.props;
    const time = format(
      new Date(lineChartData[lineChartData.length - 1].x),
      'HH:mm:ss',
      );
    this.chart.data.datasets[0].data = lineChartData;
    this.chart.data.labels.push(time);
    this.chart.update();
  }

  render() {
    return (
      <canvas ref={this.chartNode}></canvas>
    )
  }
}
