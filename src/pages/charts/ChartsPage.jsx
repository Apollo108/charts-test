import React from 'react';

import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';

import styles from './ChartsPage.module.css';

export const ChartsPage = ({ barChartData, lineChartData }) => (
  <div className={styles.chartsWrapper}>
    <BarChart barChartData={barChartData}/>
    <LineChart lineChartData={lineChartData}/>
  </div>
);
