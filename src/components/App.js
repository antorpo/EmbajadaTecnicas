import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import Home from '../pages/Home'
import { Embajada } from '../pages/Embajada'
import { Layout } from '../layouts/Layout'

export const App = () => {
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
