import React, { useState, useEffect } from 'react'
import { Badge } from '../components/Badge'
import { CitaForm } from '../components/CitaForm'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

const Home = (props) => {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    documento: '',
    email: '',
    fecha: ''
  })

  const { pais } = props

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    limpiarFormulario()
  }

  const limpiarFormulario = () => {
    setForm({
      nombre: '',
      apellidos: '',
      documento: '',
      email: '',
      fecha: ''
    })
  }

  useEffect(() => {
    limpiarFormulario()
  }, [pais])

  return (
    <div className='container'>
      <Row>
        <Col xs={12} sm={12} lg={6} md={12}><Badge {...pais} /></Col>
        <Col xs={12} sm={12} lg={6} md={12}>
          <CitaForm
            formValues={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

export default connect(mapStateToProps)(Home)
