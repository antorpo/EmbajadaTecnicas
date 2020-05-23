import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/escudo_colombia.png'
import Country from './Country'
import './styles/NavBar.css'
import { FaFlag } from 'react-icons/fa'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
      <Link className='navbar__item' to='/'>
        <img src={logo} alt='Logo' className='Logo' />
      </Link>

      <ul className='navbar-nav'>
        <li>
          <Link className='navbar__item' to='/embajada'>
            Embajada
          </Link>
        </li>
        <li>
          <Link className='navbar__item' to='/citas'>
            Citas
          </Link>
        </li>
        <li>
          <div className='navbar__item'>
            <span className='badge badge-primary'>
              <FaFlag /> Country:
            </span>
            <Country />
          </div>
        </li>
      </ul>
    </nav>
  )
}
