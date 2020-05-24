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
    color: 'white'
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
