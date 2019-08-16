import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { charts } from '../pages/charts/duck/charts';

const rootReducer = combineReducers({
  charts,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
