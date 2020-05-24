import React from 'react'
import { NaveBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const Layout = (props) => {
  const { children } = props

  return (
    <>
      <NaveBar />
      {children}
      <Footer />
    </>
  )
}
