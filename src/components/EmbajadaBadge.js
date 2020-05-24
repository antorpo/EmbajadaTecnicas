import React from 'react'
import { connect } from 'react-redux'
import './styles/Badge.css'
import { Badge } from './Badge'
import { Funciones } from './Funciones'
import { Col, Row } from 'react-bootstrap'

const EmbajadaBadge = (props) => {
  const { pais } = props

  return (
    <Col>
      <Row>
        <Col>
          <Badge {...pais} />
        </Col>
      </Row>
      <Funciones />
    </Col>

  )
}

const mapStateToProps = (state) => ({
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

export default connect(mapStateToProps)(EmbajadaBadge)
