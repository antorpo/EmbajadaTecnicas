import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Card, Button } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import { FaSearchengin } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
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

export const ConsultaCita = (props) => {
  const { onChange, formValues, onSubmit } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Card.Header className='text-center h4'>
        <FaSearchengin /> Consulta Cita:
      </Card.Header>
      <Card.Body>
        <ValidatorForm onSubmit={onSubmit} className='text-center'>
          <div className='form-group'>
            <TextValidator
              label='Documento'
              onChange={onChange}
              name='documento'
              value={formValues.documento}
              validators={[
                'required',
                'minNumber:10000000',
                'maxNumber:9999999999'
              ]}
              errorMessages={[
                'Este campo es requerido',
                'El número de Documento debe tener como minimo 8 dígitos',
                'El número de Documento debe tener como máximo 11 dígitos'
              ]}
            />
          </div>

          <div className='form-group text-center'>
            <Button
              variant='danger'
              size='sm'
              className={classes.button}
              type='submit'
            >
              Consultar 
            </Button>
          </div>
        </ValidatorForm>
      </Card.Body>
    </Card>
  )
}
