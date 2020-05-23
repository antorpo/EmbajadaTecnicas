import React from 'react'
import './styles/Badge.css'
import { FaCalendarCheck } from 'react-icons/fa'

export const CitaForm = (props) => {
  const { onChange, formValues, onSubmit } = props

  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <h3><FaCalendarCheck /> Agendar Cita:</h3>
      </div>

      <div className='Badge__section-name'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Nombre</label>
            <input
              onChange={onChange}
              className='form-control'
              type='text'
              name='nombre'
              value={formValues.nombre}
            />
          </div>

          <div className='form-group'>
            <label>Apellidos</label>
            <input
              onChange={onChange}
              className='form-control'
              type='text'
              name='apellidos'
              value={formValues.apellidos}
            />
          </div>

          <div className='form-group'>
            <label>Documento</label>
            <input
              onChange={onChange}
              className='form-control'
              type='text'
              name='documento'
              value={formValues.documento}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              onChange={onChange}
              className='form-control'
              type='email'
              name='email'
              value={formValues.email}
            />
          </div>

          <button className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </div>
  )
}
