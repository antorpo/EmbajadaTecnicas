import React from 'react'
import './styles/Badge.css'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import { Card } from 'react-bootstrap'

const useStyles = makeStyles({
  root: {
    minHeight: 480,
    marginTop: 40,
    marginBottom: 5,
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)'
  },
  media: {
    objectFit: 'cover',
    objectPosition: 'center center'
  }
})

export const Badge = (props) => {
  const { nombre, flag, email, telefono, direccion, atencion } = props
  const ImgFlag = require(`../assets/img/${flag}`)
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component='img'
        alt='Bandera'
        height='140'
        image={ImgFlag}
        title='Bandera'
      />
      <Card.Body>
        <Card.Title className='text-center'>
          Embajada de Colombia en {nombre}
        </Card.Title>
        <Card.Text className='Badge__section-info'>
          <br />
          <span className='titulos__content'>Telefono:</span> {telefono}
          <span className='titulos__content'>Dirección:</span> {direccion}
          <span className='titulos__content'>Atención:</span> {atencion}
        </Card.Text>
        <div className='Badge__footer titulos__content'>
          Correo Electrónico: {email}
        </div>
      </Card.Body>
    </Card>
  )
}
