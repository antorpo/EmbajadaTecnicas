import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Header } from '../components/Header'

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#F8F8F8',
    textAlign: 'center',
    position: 'fixed',
    bottom: 23,
    height: 60,
    width: '100%',
    borderTop: '1px solid',
    color: 'white',
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)'
  },
  phantom: {
    display: 'block',
    width: '100%'
  }
})

export function Footer () {
  const classes = useStyles()
  return (
    <div className={classes.phantom}>
      <footer className={classes.footer}>
        <Header />
      </footer>
    </div>
  )
}
