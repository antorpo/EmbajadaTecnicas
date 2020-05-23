import React, { useState, useEffect } from 'react'
import { Badge } from '../components/Badge'
import { CitaForm } from '../components/CitaForm'
import { connect } from 'react-redux'

const Home = (props) => {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    documento: '',
    email: ''
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
      email: ''
    })
  }

  useEffect(() => {
    limpiarFormulario()
  }, [pais])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <Badge {...pais} />
        </div>

        <div className='col-6'>
          <CitaForm
            formValues={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

export default connect(mapStateToProps)(Home)
