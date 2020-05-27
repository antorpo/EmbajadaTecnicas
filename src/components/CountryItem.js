import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { seleccionarPais } from '../actions'

const CountryItem = (props) => {
  const { id, nombre, seleccionarPais } = props

  const handleClick = () => {
    seleccionarPais(id)
  }

  return <Dropdown.Item onClick={handleClick}>{nombre}</Dropdown.Item>
}

const mapDispatchToProps = {
  seleccionarPais
}

export default connect(null, mapDispatchToProps)(CountryItem)
