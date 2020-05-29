import React, { useState, useEffect } from 'react'
import { Badge } from '../components/Badge'
import { CitaForm } from '../components/CitaForm'
import { CarouselBadge } from '../components/CarouselBadge'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import { ConsultaCita } from '../components/ConsultaCita'
import { crearCita, consultarCita } from '../actions/index'
import Alert from 'react-bootstrap/Alert'

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    marginBottom: 40
  },
  rootBotton: {
    marginBottom: 120
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

  const [consulta, setConsulta] = useState({
    documento: ''
  })

  const [show, setShow] = useState(false)

  const { pais, crearCita, consultarCita, cita } = props

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeConsulta = (e) => {
    setConsulta({
      ...consulta,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    crearCita(form)
    limpiarFormulario()
  }

  const handleSubmitConsulta = (e) => {
    e.preventDefault()
    consultarCita(consulta.documento)

    setShow(true)
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
        <Col lg={12}>
          <Badge {...pais} />
        </Col>
        <Col lg={12}>
          <CarouselBadge />
        </Col>
        <Col xs={12} sm={12} lg={6} md={12} className={classes.root}>
          <img className='d-block w-100' src={Img4} alt='Noticia' />
        </Col>
        <Col xs={12} sm={12} lg={6} md={12}>
          <CitaForm
            formValues={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Col>
        <Col xs={6} sm={6} lg={6} md={6} className={classes.rootBotton}>
          <ConsultaCita
            formValues={consulta}
            onChange={handleChangeConsulta}
            onSubmit={handleSubmitConsulta}
          />
        </Col>

        {show ? (
          <Col xs={6} sm={6} lg={6} md={6} className={classes.rootBotton}>
            {cita ? (
              <Alert
                variant='success'
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>Informacion:</Alert.Heading>
                <p>{`Señor/a ${cita.nombre}, su cita esta asignada para la fecha ${cita.fecha}.`}</p>
              </Alert>
            ) : (
              <Alert
                variant='danger'
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>Error:</Alert.Heading>
                <p>{`No hay cita asignada al documento ${consulta.documento}`}</p>
              </Alert>
            )}
          </Col>
        ) : null}
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state,
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

const mapDispatchToProps = {
  crearCita,
  consultarCita
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
