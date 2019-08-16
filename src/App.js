import React from 'react';
import { Provider }  from 'react-redux';

import { ChartsPageContainer } from "./pages/charts/ChartsContainer";
import store from "./redux/configureStore";
import './services';

export default () => (
      <Provider store={store}>
        <ChartsPageContainer />
      </Provider>
    );
