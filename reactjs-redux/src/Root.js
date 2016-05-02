import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

let hmrKey = Math.random()

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router key={hmrKey} history={history}>
      {routes}
    </Router>
  </Provider>
)

if (module.hot) {
  hmrKey = Math.random()
}

export default Root
