import React from 'react'
import { FaCog } from 'react-icons/fa'
import CountryModal from './CountryModal'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../actions'
import { Button } from 'react-bootstrap'

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
      <Button variant='link' size='sm' className='text-dark' onClick={onOpen}>
        {pais.nombre} <FaCog />
      </Button>

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
