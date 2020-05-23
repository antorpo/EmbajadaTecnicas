import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

export const Modal = (props) => {
  const { isOpen, onClose, children } = props

  if (!isOpen) {
    return null
  }

  const jsx = (
    <div className='Modal'>
      <div className='Modal__container'>
        <button onClick={onClose} className='Modal__close-button'>
          X
        </button>
        {children}
      </div>
    </div>
  )

  return ReactDOM.createPortal(jsx, document.getElementById('modal'))
}
