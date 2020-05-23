import React from 'react'
import { Modal } from './Modal'
import CountryList from './CountryList'

const CountryModal = (props) => {
  const { isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h3>Seleccione pais:</h3>
        <CountryList />
      </div>
    </Modal>
  )
}

export default CountryModal
