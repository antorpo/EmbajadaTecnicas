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
        citas: [...action.payload.citas],
        loading: false,
        error: null
      }
    case 'SELECCIONAR_PAIS':
      return { ...state, seleccionado: action.payload, isOpen: false }

    case 'NUEVA_CITA':
      return { ...state, citas: [...state.citas, action.payload] }

    case 'CONSULTAR_CITA':
      return {
        ...state,
        cita: state.citas.filter(
          (_cita) => _cita.documento === action.payload
        )[0]
      }
    case 'LOADING':
      return { ...state, loading: true }
    case 'ERROR':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
