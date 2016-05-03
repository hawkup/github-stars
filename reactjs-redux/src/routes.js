import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import VisibleCounterList from './containers/VisibleCounterList';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="counter" component={VisibleCounterList} />
  </Route>
);

export default routes;
