import React from 'react';
import {Provider} from 'react-redux';
// import {ConnectedRouter} from 'connected-react-router';
import App from './App';
import {store} from './src/store/store';
// import {history} from './src/history/history';

export const ConnectedApp = () => {
  return (
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
    </Provider>
  );
};
