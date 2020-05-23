import React from 'react'
import { connect } from 'react-redux'
import { FaProjectDiagram } from 'react-icons/fa'
import './styles/Badge.css'

const EmbajadaBadge = (props) => {
  const { pais } = props

  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <h3>
          <FaProjectDiagram /> Datos:
        </h3>
      </div>

      <div className='Badge__section-name'>
        <h3>
          Embajada de Colombia <br /> en {pais.nombre}
        </h3>
      </div>

      <div className='Badge__section-info'>
        <span className='titulos__content'>Telefono:</span> {pais.telefono}
        <span className='titulos__content'>Direccion:</span> {pais.direccion}
        <span className='titulos__content'>Atencion:</span> {pais.atencion}
      </div>

      <div className='Badge__footer titulos__content'>Email: {pais.email}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

export default connect(mapStateToProps)(EmbajadaBadge)
