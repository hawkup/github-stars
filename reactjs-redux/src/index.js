import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers';
import Root from './Root'

const store = createStore(counter);

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
