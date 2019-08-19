import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import './App.less'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
const DashboardView = asyncComponent({ resolve: () => import('./views/Dashboard') })
const LoginView = asyncComponent({ resolve: () => import('./views/Login') })
const RegisterView = asyncComponent({ resolve: () => import('./views/Register') })
const ErrorView = asyncComponent({ resolve: () => import('./views/Error') })

export const store = configStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginView}/>
          <Route path='/dashboard' component={DashboardView}/>
          <Route path='/register' component={RegisterView}/>
          <Route path='/error' component={ErrorView}/>
          <Redirect from='/*' to='/error'/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(App)
