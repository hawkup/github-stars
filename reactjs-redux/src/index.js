import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import Root from './Root';

const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer
    component={Root}
    props={{ store, history }}
  />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    ReactDOM.render(
      <AppContainer
        component={require('./Root').default}
        props={{ store, history }}
      />,
      rootEl
    );
  });
}
