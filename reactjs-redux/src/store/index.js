import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const middleware = process.env.NODE_ENV === 'production' ?
  [] :
  [logger()]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

export default store
