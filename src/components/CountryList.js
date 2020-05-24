import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import CountryItem from './CountryItem'

const CountryList = (props) => {
  const { countries, pais } = props

  return (
    <Dropdown className='text-center'>
      <Dropdown.Toggle split variant='danger' id='dropdown-custom-components'>
        Selecciona un país {' '}
      </Dropdown.Toggle>
      <Dropdown.Menu title={pais.nombre}>
        {countries.map((_country) => {
          return (
            <CountryItem key={_country.id} {..._country} />
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    pais: state.countries.filter(
      (_country) => _country.id === state.seleccionado
    )[0]
  }
}

// MapDispatchToProps con el action para cambiar seleccionado.

export default connect(mapStateToProps)(CountryList)
