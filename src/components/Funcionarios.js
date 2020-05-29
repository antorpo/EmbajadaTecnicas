import React from 'react'
import { connect } from 'react-redux'
import './styles/Badge.css'
import { FuncionarioBadge } from './FuncionarioBadge'
import { Col, Row } from 'react-bootstrap'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    padding: 0,
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    textAlign: 'center'
  },
  title: {
    padding: '10px 10px',
    color: 'gray'
  },
  media: {
    objectFit: 'unset',
    objectPosition: 'center center'
  }
})

const Funcionarios = (props) => {
  const { pais } = props
  const ImgFlag = require('../assets/img/BanderaColombia.png')
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col lg='12' className={classes.root}>
          <div className={classes.title}>
            <h2> FUNCIONARIOS </h2>
          </div>
          <CardMedia
            className={classes.media}
            component='img'
            alt='Bandera'
            height='100'
            image={ImgFlag}
            title='Bandera'
          />
        </Col>
        {pais.embajada.funcionarios.map((_funcionario) => {
          return <FuncionarioBadge key={_funcionario.nombre} {..._funcionario} />
        })}
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pais: state.countries.filter(
    (_country) => _country.id === state.seleccionado
  )[0]
})

export default connect(mapStateToProps)(Funcionarios)
