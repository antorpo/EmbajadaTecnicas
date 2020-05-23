import React from 'react'
import { NavBar } from '../components/NavBar'
import { Header } from '../components/Header'

export const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  )
}
