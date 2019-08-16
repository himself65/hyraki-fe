import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'react-router'
import { asyncComponent } from 'react-async-component'
const DashboardView = asyncComponent({ resolve: () => import('../views/Dashboard') })
const LoginView = asyncComponent({ resolve: () => import('../views/Login') })
const RegisterView = asyncComponent({ resolve: () => import('../views/Register') })

export default function Router () {
  // todo: judge if haven't login, then redirect to '/' page
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginView}/>
        <Route path='/dashboard' component={DashboardView}/>
        <Route path='/register' component={RegisterView}/>
      </Switch>
    </BrowserRouter>
  )
}
