import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/index'
import MemoryApp from './containers/MemoryApp'

require('!style!css!sass!./styles/style.sass')
require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require('spin');

const loggerMiddleware = createLogger()

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

let store = createStore(
  reducers,
  enhancer
)

render(
  <Provider store={store}>
    <MemoryApp />
  </Provider>,
  document.getElementById('root')
)
