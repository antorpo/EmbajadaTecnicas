const firebase = require('firebase')

export const openModal = (payload) => ({
  type: 'OPEN_MODAL',
  payload
})

export const closeModal = (payload) => ({
  type: 'CLOSE_MODAL',
  payload
})

export const traerEstado = () => async (dispatch) => {
  dispatch({
    type: 'LOADING'
  })

  try {
    const db = firebase.firestore()
    const countriesFs = db.collection('countries').get()
    const seleccionado = db.collection('seleccionado').doc('SC').get()

    const response = await Promise.all([countriesFs, seleccionado])

    const countries = response[0].docs.map((_doc) => {
      const country = _doc.data()
      country.idfs = _doc.id

      return country
    })

    const data = {
      countries: [...countries],
      seleccionado: response[1].data().id
    }

    dispatch({
      type: 'TRAER_ESTADO',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'ERROR',
      payload: error
    })
  }
}

export const seleccionarPais = (id) => async (dispatch) => {
  try {
    const db = firebase.firestore()
    await db.collection('seleccionado').doc('SC').update({
      id
    })

    dispatch({
      type: 'SELECCIONAR_PAIS',
      payload: id
    })
  } catch (error) {
    dispatch({
      type: 'ERROR',
      payload: error
    })
  }
}