import React from 'react'
import './styles/Badge.css'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Col } from 'react-bootstrap'

const useStyles = makeStyles({
  root: {
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

export const FuncionarioBadge = (props) => {
  const { cargo, nombre, genero, seed } = props
  const classes = useStyles()
  const ImgAvatar = `https://avatars.dicebear.com/api/${genero}/${seed}.svg`

  return (
    <Col xs={12} sm={12} lg={4} md={12}>
      <Card className={classes.root}>
        <Card.Img style={{ height: '80px' }} variant='top' src={ImgAvatar} />
        <Card.Body>
          <Card.Title className='text-center'>{cargo}</Card.Title>
          <Card.Text className='Badge__section-info'>
            <span className='titulos__content text-center'>Nombre:</span>{' '}
            {nombre}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default FuncionarioBadge
