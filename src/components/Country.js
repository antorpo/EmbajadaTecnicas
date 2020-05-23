import React from 'react'
import { FaCog } from 'react-icons/fa'
import CountryModal from './CountryModal'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../actions'

const Country = (props) => {
  const { pais, openModal, closeModal, isOpen } = props

  const onClose = () => {
    closeModal(false)
  }

  const onOpen = () => {
    openModal(true)
  }

  return (
    <>
      <button className='btn btn-light' onClick={onOpen}>
        {pais.nombre} <FaCog />
      </button>

      <CountryModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pais: state.countries.filter(
      (_country) => _country.id === state.seleccionado
    )[0],
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = {
  openModal, closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Country)
