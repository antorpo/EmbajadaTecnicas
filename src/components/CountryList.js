import React from 'react'
import { connect } from 'react-redux'
import { DropdownButton } from 'react-bootstrap'
import CountryItem from './CountryItem'

const CountryList = (props) => {
  const { countries, pais } = props

  return (
    <DropdownButton id='dropdown-basic-button' title={pais.nombre}>
      {countries.map((_country) => {
        return (
          <CountryItem key={_country.id} {..._country} />
        )
      })}
    </DropdownButton>
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
