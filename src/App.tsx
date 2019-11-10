import React from 'react'
import { AsyncComponentProvider, asyncComponent } from 'react-async-component'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoadingView from './views/Loading'
import ErrorView from './views/Error'

const asyncComponentFactory = (resolve: () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>) =>
  asyncComponent({
    resolve,
    // @ts-ignore
    LoadingComponent: LoadingView,
    // @ts-ignore
    ErrorComponent: ErrorView
  })

const DashboardView = asyncComponentFactory(() => import('./views/Dashboard'))
const LoginView = asyncComponentFactory(() => import('./views/Start'))
const RegisterView = asyncComponentFactory(() => import('./views/Register'))

const App: React.FC = () => {
  return (
    <AsyncComponentProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginView}/>
          <Route path='/login' component={LoginView}/>
          <Route path='/dashboard' component={DashboardView}/>
          <Route path='/register' component={RegisterView}/>
          <Route path='/error' component={ErrorView}/>
          <Redirect from='/*' to='/error'/>
        </Switch>
      </BrowserRouter>
    </AsyncComponentProvider>
  )
}

export default App
