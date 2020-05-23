import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setCountry } from '../actions'

const CountryItem = (props) => {
  const { id, nombre, setCountry } = props

  const handleClick = () => {
    setCountry(id)
  }

  return <Dropdown.Item onClick={handleClick}>{nombre}</Dropdown.Item>
}

const mapDispatchToProps = {
  setCountry
}

export default connect(null, mapDispatchToProps)(CountryItem)
