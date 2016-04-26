import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers';
import App from './App'

const store = createStore(counter);

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <AppContainer
      component={App}
      props={{ store }}
    />,
    rootEl
  );
}
render();
store.subscribe(render);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <AppContainer
        component={require('./App').default}
        props={{ store }}
      />,
      rootEl
    );
  });
}
