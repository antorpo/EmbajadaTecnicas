import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/escudo_colombia.png'
import Country from './Country'
import './styles/NavBar.css'
import { FaFlag } from 'react-icons/fa'
import { Navbar, Nav, Badge, NavDropdown } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  top: {
    position: 'sticky',
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)'
  }
})

export const NaveBar = () => {
  const classes = useStyles()
  return (
    <Navbar bg='light' variant='light' fixed='top' className={classes.top}>
      <Navbar.Brand>
        <Link to='/' className='text-dark'>
          <img src={logo} alt='Logo' className='Logo' /> Embajada Colombiana
        </Link>
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <NavDropdown title='Información' id='basic-nav-dropdown'>
          <NavDropdown.Item>
            <Link to='/embajada' className='text-dark'>¿Quienes Somos?</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to='/funciones' className='text-dark'>Funciones</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to='/funcionarios' className='text-dark'>Funcionarios</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>
          <Link to='/citas' className='text-dark'>Citas</Link>
        </Nav.Link>
      </Nav>
      <Badge pill variant='primary'>
        <FaFlag /> País:
      </Badge>
      <Country />
    </Navbar>
  )
}
