import React from 'react'
import importedComponent from 'react-imported-component'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoadingView from './views/Loading'
import ErrorView from './views/Error'
import { Provider as MobxProvider } from 'mobx-react'
import { Provider as KeepAliveProvider } from 'react-keep-alive'
import { store } from './store'

const asyncComponentFactory = (resolve: () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>) =>
  importedComponent(resolve, {
    LoadingComponent: LoadingView,
    ErrorComponent: ErrorView
  })

const DashboardView = asyncComponentFactory(() => import('./views/Dashboard'))
const StartView = asyncComponentFactory(() => import('./views/Start'))
const RegisterView = asyncComponentFactory(() => import('./views/Register'))
const ForgetView = asyncComponentFactory(() => import('./views/Forget'))

const App: React.FC = () => {
  return (
    <MobxProvider store={store}>
      <KeepAliveProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={StartView}/>
            <Route path='/login' component={StartView}/>
            <Route path='/dashboard' component={DashboardView}/>
            <Route path='/register' component={RegisterView}/>
            <Route path='/forget' component={ForgetView} />
            <Route path='/error' component={ErrorView}/>
            <Redirect from='/*' to='/error'/>
          </Switch>
        </BrowserRouter>
      </KeepAliveProvider>
    </MobxProvider>
  )
}

export default App
