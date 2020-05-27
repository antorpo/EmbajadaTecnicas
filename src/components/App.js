import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { traerEstado } from '../actions'
import { NotFound } from '../pages/NotFound'
import Home from '../pages/Home'
import { Embajada } from '../pages/Embajada'
import { Layout } from '../layouts/Layout'
import { Loader } from './Loader'

const App = (props) => {
  const { traerEstado, loading, error } = props

  useEffect(() => {
    traerEstado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loader mensaje='Cargando...' />
  }

  if (error) {
    return <h1>{`Error: ${error}`}</h1>
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/embajada' component={Embajada} />
          <Route path='/404' component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = {
  traerEstado
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
