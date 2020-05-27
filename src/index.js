import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import reduxThunk from 'redux-thunk'

import { firebaseConfig } from './config'

// Conexion con firebase usando firestore:
const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp(firebaseConfig)

const INITIAL_STATE = {
  countries: [],
  seleccionado: null,
  citas: [],
  isOpen: false,
  loading: true,
  error: null
}

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(reduxThunk))

const container = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)
