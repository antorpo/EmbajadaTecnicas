import React from 'react'
import header from '../assets/img/banner.svg'
import './styles/Header.css'
import { makeStyles } from '@material-ui/core/styles'
import { Col, Row } from 'react-bootstrap'

const useStyles = makeStyles({
  right: {
    padding: '15px 0',
    margin: '0',
    fontSize: '14px',
    float: 'right!important'
  },
  a: {
    color: 'red',
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  }
})

export const Header = () => {
  const classes = useStyles()
  return (
    <div className='header__hero'>
      <Row>
        <Col>
          <img
            className='header__hero-image img-fluid'
            src={header}
            alt='Logo'
          />
        </Col>
        <Col>
          <div className='text-center'>
            <span>
              &copy; {1900 + new Date().getYear()} Esta aplicación fue hecha con
              fines academicos por{' '}
              <a href='https://github.com/vale0722' className={classes.a}>
                Valeria Granada Rodas{' '}
              </a>
              Y
              <a href='https://github.com/antorpo/' className={classes.a}>
                {' '}
                Antonio Gonzalez Restrepo
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}
