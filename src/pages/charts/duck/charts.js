import { createAction, handleActions } from 'redux-actions';

import { groupByRange } from '../normalizeData';

export const setThreshold = createAction('charts/SET_THRESHOLD');
export const addChartDataItem = createAction('charts/ADD_CHART_DATA_ITEM');

const initialState = {
  chartData: [],
  lineChartData: [],
  thresholdValue: null,
};

export const charts = handleActions(
  {
    [addChartDataItem]: (state, { payload: chartDataItem }) => ({
      ...state,
      chartData: [...state.chartData, chartDataItem],
      lineChartData: [...state.lineChartData, { x: chartDataItem.timestamp, y: chartDataItem.value }],
    }),
    [setThreshold]: (state, { payload: { thresholdValue } }) => ({
      ...state,
      thresholdValue,
    }),
  },
  initialState,
);

export const getChartData = store => store.charts.chartData;
export const getBarChartData = store => groupByRange(store.charts.chartData);
export const getLineChartData = store => store.charts.lineChartData;
export const getThresholdValue = store => store.charts.thresholdValue;
