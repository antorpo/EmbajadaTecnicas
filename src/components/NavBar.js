import React from 'react'
import logo from '../assets/img/escudo_colombia.png'
import Country from './Country'
import './styles/NavBar.css'
import { FaFlag } from 'react-icons/fa'
import { Navbar, Nav, Badge, NavDropdown } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  top: {
    position: 'sticky'
  }
})

export const NaveBar = () => {
  const classes = useStyles()
  return (
    <Navbar bg='light' variant='light' fixed='top' className={classes.top}>
      <Navbar.Brand href='/'><img src={logo} alt='Logo' className='Logo' />{' '} Embajada Colombiana </Navbar.Brand>
      <Nav className='mr-auto'>
        <NavDropdown title='Información' id='basic-nav-dropdown'>
          <NavDropdown.Item href='/embajada'>¿Quienes Somos?</NavDropdown.Item>
          <NavDropdown.Item href='/embajada/#funciones'>Funciones</NavDropdown.Item>
          <NavDropdown.Item href='/'>Funcionarios</NavDropdown.Item>
          <NavDropdown.Item href='/'>Cualquier Cosa</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href='/citas'>Citas</Nav.Link>
      </Nav>
      <Badge pill variant='primary'>
        <FaFlag /> País:
      </Badge>
      <Country />
    </Navbar>
  )
}
