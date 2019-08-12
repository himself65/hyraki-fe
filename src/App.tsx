import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './store'
import LoginView from './views/Login'
import './App.less'

const store = configStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={LoginView}/>
      </Router>
    </Provider>
  )
}

export default App
