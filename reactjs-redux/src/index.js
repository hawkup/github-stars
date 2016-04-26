import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import counter from './reducers';
import Root from './Root';

const middleware = process.env.NODE_ENV === 'production' ?
  [] :
  [logger()];

const store = createStore(
  counter,
  applyMiddleware(...middleware)
);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer
    component={Root}
    props={{ store }}
  />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    ReactDOM.render(
      <AppContainer
        component={require('./Root').default}
        props={{ store }}
      />,
      rootEl
    );
  });
}
