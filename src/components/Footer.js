import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Header } from '../components/Header'

const useStyles = makeStyles({
  footer: {
    borderTop: '1px solid',
    position: 'sticky',
    bottom: 0,
    right: 0,
    left: 0,
    color: 'white',
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)'
  }
})

export function Footer (props) {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Header />
    </footer>
  )
}
