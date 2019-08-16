import io from 'socket.io-client';

import CONFIG from '../configs';
import { addChartDataItem } from '../pages/charts/duck/charts';
import store from "../redux/configureStore";

const socket = io(`${CONFIG.HOST}:${CONFIG.PORT}`);

socket.on('data', chartData => {
  store.dispatch(addChartDataItem(chartData));
});
