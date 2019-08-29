import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import LoadingView from './views/Loading'
import ErrorView from './views/Error'
const asyncComponentFactory = (resolve: () => Promise<React.ComponentType | {default: React.ComponentType}>) =>
  asyncComponent({
    resolve,
    // @ts-ignore
    LoadingComponent: LoadingView,
    // @ts-ignore
    ErrorComponent: ErrorView
  })

const DashboardView = asyncComponentFactory(() => import('./views/Dashboard'))
const LoginView = asyncComponentFactory(() => import('./views/Login'))
const RegisterView = asyncComponentFactory(() => import('./views/Register'))

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
