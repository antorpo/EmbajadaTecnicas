import React from 'react'
import './styles/Badge.css'
import { FaInfoCircle } from 'react-icons/fa'

export const Badge = (props) => {
  const { nombre, flag, email, telefono, direccion, atencion } = props
  const ImgFlag = require(`../assets/img/${flag}`)

  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <h3><FaInfoCircle /> Informacion:</h3>
      </div>

      <div className='Badge__section-name'>
        <img className='Badge__avatar' src={ImgFlag} alt='Avatar' />
        <h3>
          Embajada de Colombia <br /> en {nombre}
        </h3>
      </div>

      <div className='Badge__section-info'>
        <span className='titulos__content'>Telefono:</span> {telefono}
        <span className='titulos__content'>Direccion:</span> {direccion}
        <span className='titulos__content'>Atencion:</span> {atencion}
      </div>

      <div className='Badge__footer titulos__content'>Email: {email}</div>
    </div>
  )
}
