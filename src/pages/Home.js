import React, { useState, useEffect } from 'react'
import { Badge } from '../components/Badge'
import { CitaForm } from '../components/CitaForm'
import { CarouselBadge } from '../components/CarouselBadge'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    marginBottom: 40
  },
  rootBotton: {
    marginBottom: 40
  },
  media: {
    objectFit: 'cover',
    objectPosition: 'center center'
  }
})

const Home = (props) => {
  const classes = useStyles()
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

  const Img4 = require('../assets/notices/notice4.png')

  return (
    <div className='container'>
      <Row>
        <Col lg={12}><Badge {...pais} /></Col>
        <Col lg={12}><CarouselBadge /></Col>
        <Col xs={12} sm={12} lg={6} md={12} className={classes.root}>
          <img
            className='d-block w-100'
            src={Img4}
            alt='Noticia'
          />
        </Col>
        <Col xs={12} sm={12} lg={6} md={12} className={classes.rootBotton}>
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
