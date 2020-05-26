import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'

import { firebaseConfig } from './config'

// Conexion con firebase usando firestore:
const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const holiwis = {
  countries: [],
  citas: [],
  seleccionado: null,
  isOpen: false
}

const fetchDataFirestore = async () => {
  const countriesFs = db.collection('countries').get()
  const seleccionado = db.collection('seleccionado').doc('SC').get()

  const test = await Promise.all([countriesFs, seleccionado])

  const countries = test[0].docs.map((_doc) => {
    const country = _doc.data()
    country.idfs = _doc.id

    return country
  })

  const response = {
    countries: [...countries],
    seleccionado: test[1].data().id
  }

  return response
}

fetchDataFirestore().then((x) => {
  console.log(x)
})

const INITIAL_STATE = {
  countries: [
    {
      id: 1,
      nombre: 'Perú',
      flag: 'peru.svg',
      telefono: '(511) – 2019830',
      direccion:
        'Av Víctor Andrés Belaúnde, 340 Of. 602 San Isidro Lima 27, Perú',
      email: 'elima@cancilleria.gov.co',
      atencion: 'Horario al público: lunes a viernes 7:00 a.m. a 1:00 p.m.',
      consulados: [
        {
          ciudad: 'Lima',
          nombre: 'Consulado General de Colombia en Lima',
          direccion:
            'Avenida José Pardo 432/434, Edificio Lit One, Miraflores.',
          email: 'lima@consulado.gov.co',
          atencion:
            'Lunes a viernes de 8:00 a.m. a 1:00 p.m. de manera directa y de 1:00 p.m. a 2:00 p.m. con cita previa'
        },
        {
          ciudad: 'Iquitos',
          nombre: 'Consulado General de Colombia en Iquitos',
          direccion: 'Calle Moore No. 249 de la Calvo esquina',
          email: 'iquitos@consulado.gov.co',
          atencion: 'Horario al público: lunes a viernes 7:00 a.m. a 1:00 p.m.'
        }
      ],
      embajada: {
        funcionarios: [
          {
            cargo: 'Embajadora - Jefe de Misión',
            nombre: 'María Claudia Mosquera Jaramillo'
          },
          {
            cargo: 'Ministro Plenipotenciario',
            nombre: 'Juan Fernando Londoño Osorio'
          },
          { cargo: 'Tercer Secretario', nombre: 'David Renato Díaz Bejarano' },
          { cargo: 'Auxiliar De Misión', nombre: 'Yeiny Vargas Ocampo' },
          { cargo: 'Auxiliar De Misión', nombre: 'Patricia Rosas López' },
          { cargo: 'Auxiliar de Misión', nombre: 'Denise Aljure Sfeir' }
        ]
      }
    },
    {
      id: 2,
      nombre: 'Alemania',
      flag: 'alemania.png',
      telefono: '+49 (0) 30-26 39 611 0',
      direccion: 'Taubenstr. 23, D-10117 Berlín',
      email: 'ealemania@cancilleria.gov.co',
      atencion: 'Horario al público: lunes a viernes 7:00 a.m. a 1:00 p.m.',
      consulados: [
        {
          ciudad: 'Berlín',
          nombre: 'Consulado General de Colombia en Berlín',
          direccion: 'Taubenstraße 23, 10117 Berlín',
          email: 'berlin@consulado.gov.co',
          atencion:
            'Lunes a viernes con cita previa de 9:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m.'
        },
        {
          ciudad: 'Frankfurt',
          nombre: 'Consulado General de Colombia en Frankfurt',
          direccion: 'Fürstenbergerstrasse 223 60323 Frankfurt am',
          email: 'frankfurt@consulado.gov.co',
          atencion:
            'Lunes a viernes de 8:00 a.m. a 1:00 p.m. de manera directa y de 1:00 p.m. a 2:00 p.m. con cita previa'
        }
      ],
      embajada: {
        funcionarios: [
          { cargo: 'Embajador', nombre: 'Hans-Peter Knudsen Quevedo' },
          {
            cargo: 'Ministra Consejera',
            nombre: 'Martha Patricia Medina González'
          },
          { cargo: 'Segundo Secretario', nombre: 'Paula Sanmiguel' },
          { cargo: 'Tercer Secretario', nombre: 'Estefanía González' },
          {
            cargo: 'Auxiliar de Misión Diplomática',
            nombre: 'Nataly Soleny Moreno'
          },
          { cargo: 'Auxiliar de Misión', nombre: 'Heydi Leonor Bohorquez' }
        ]
      }
    }
  ],
  seleccionado: 1,
  citas: [],
  isOpen: false
}

const store = createStore(reducer, INITIAL_STATE)

const container = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)
