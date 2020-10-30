import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../../reducers';
import TradeEntry from '../TradeEntry/TradeEntry';

export default () => (
  <Provider store={createStore(reducers)}>
    <div>
      <h1>App</h1>
      <TradeEntry />
    </div>
  </Provider>
);
