import React from 'react'
import header from '../assets/img/banner.jpg'
import './styles/Header.css'

export const Header = () => {
  return (
    <div className='header__hero'>
      <img className='header__hero-image img-fluid' src={header} alt='Logo' />
    </div>
  )
}
