import React from 'react'
import { connect } from 'react-redux'
import './styles/Badge.css'
import { Badge } from './Badge'
import { Col, Row } from 'react-bootstrap'

const ConsuladoBadge = (props) => {
  const { pais } = props

  return (
    <Col>
      <Row>
        <Col>
          {pais.consulados.map((_consulado) => {
            return <Badge key={_consulado.email} {..._consulado} />
          })}
        </Col>
      </Row>
    </Col>
  )
}

const mapStateToProps = (state) => ({
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

export default connect(mapStateToProps)(ConsuladoBadge)
