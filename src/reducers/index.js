export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return {
        ...state,
        seleccionado: action.payload,
        isOpen: false
      }
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
    default:
      return state
  }
}
