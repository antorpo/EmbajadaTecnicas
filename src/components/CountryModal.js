import React from 'react'
import { Modal } from 'react-bootstrap'
import CountryList from './CountryList'

const CountryModal = (props) => {
  const { isOpen, onClose } = props

  return (
    <Modal
      size='sm'
      show={isOpen}
      onHide={onClose}
      aria-labelledby='example-modal-sizes-title-sm'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Selecciona un País
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <CountryList />
        </p>
      </Modal.Body>
    </Modal>
  )
}

export default CountryModal
