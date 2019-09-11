import React from 'react'
import { Provider } from 'react-redux'
import { asyncComponent, AsyncComponentProvider } from 'react-async-component'
import configStore from './store'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoadingView from './views/Loading'
import ErrorView from './views/Error'
import { loginAction } from './store/action/user'

// fixme: remove type any
const asyncComponentFactory = (resolve: () => Promise<any>) =>
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
  // fixme: abstract this check
  if (localStorage.getItem('JWT_TOKEN')) {
    store.dispatch(loginAction('已经登录'))
  }
  return (
    <AsyncComponentProvider>
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
    </AsyncComponentProvider>
  )
}

export default App
