import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './Root';

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
