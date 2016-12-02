import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

import Wall from './containers/wall'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunkMiddleware, promiseMiddleware()))

const content = document.getElementById('content')

ReactDOM.render(
  <Provider store={store}>
    <Wall/>
  </Provider>,
  content
)
