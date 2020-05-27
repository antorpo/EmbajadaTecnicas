import React from 'react'
import './styles/Loader.css'

export const Loader = (props) => {
  const { mensaje } = props

  return (
    <div className='spinner-container'>
      <div className='spinner'>
        <div className='sk-chase '>
          <div className='sk-chase-dot' />
          <div className='sk-chase-dot' />
          <div className='sk-chase-dot' />
          <div className='sk-chase-dot' />
          <div className='sk-chase-dot' />
          <div className='sk-chase-dot' />
        </div>

        <h2>{mensaje}</h2>
      </div>
    </div>
  )
}
