export const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: action.payload
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: action.payload
      }

    case 'TRAER_ESTADO':
      return {
        ...state,
        countries: [...action.payload.countries],
        seleccionado: action.payload.seleccionado,
        loading: false,
        error: null
      }
    case 'SELECCIONAR_PAIS':
      return { ...state, seleccionado: action.payload, isOpen: false }
    case 'LOADING':
      return { ...state, loading: true }
    case 'ERROR':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
