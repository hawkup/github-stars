import React from 'react';
import { Provider } from 'nuclear-js-react-addons';
import reactor from './reactor';
import CounterList from './containers/CounterList';

const App = () => (
  <Provider reactor={reactor}>
    <CounterList />
  </Provider>
);

export default App;
