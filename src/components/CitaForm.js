import React from 'react'
import './styles/Badge.css'
import { FaCalendarCheck } from 'react-icons/fa'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'
import { Card, Button } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 460,
    marginTop: 40,
    marginBottom: 40,
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    '& .MuiTextField-root': {
      width: '100%'
    }
  },
  media: {
    objectFit: 'cover',
    objectPosition: 'center center'
  }
}))

export const CitaForm = (props) => {
  const { onChange, formValues, onSubmit } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Card.Header className='text-center h4'><FaCalendarCheck /> Agendar Cita:</Card.Header>
      <Card.Body>
        <ValidatorForm onSubmit={onSubmit} className='text-center'>
          <div className='form-group'>
            <TextValidator
              name='nombre'
              onChange={onChange}
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={formValues.nombre}
              label='Nombre'
            />
          </div>
          <div className='form-group'>
            <TextValidator
              name='apellidos'
              onChange={onChange}
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={formValues.apellidos}
              label='Apellidos'
            />
          </div>
          <div className='form-group'>
            <TextValidator
              label='Documento'
              onChange={onChange}
              name='documento'
              value={formValues.documento}
              validators={['required', 'minNumber:10000000', 'maxNumber:9999999999']}
              errorMessages={['Este campo es requerido',
                'El número de Documento debe tener como minimo 8 dígitos',
                'El número de Documento debe tener como máximo 11 dígitos']}
            />
          </div>

          <div className='form-group'>
            <TextValidator
              label='Correo Electrónico'
              onChange={onChange}
              name='email'
              value={formValues.email}
              validators={['required', 'isEmail']}
              errorMessages={['Este campo es requerido', 'Este correo electrónico no es valido']}
            />
          </div>
          <div className='form-group'>
            <TextValidator
              type='datetime-local'
              name='fecha'
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={formValues.fecha}
              className='ValidatorForm-control'
              onChange={onChange}
              placeholder='fecha'
            />
          </div>
          <div className='form-group text-center'>
            <Button
              variant='danger'
              size='sm'
              className={classes.button}
              type='submit'
            >
              Enviar <Send fontSize='small' />
            </Button>
          </div>
        </ValidatorForm>
      </Card.Body>
    </Card>
  )
}
