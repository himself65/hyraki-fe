import React from 'react'
import { Provider } from 'react-redux'
import Router from './router'
import configStore from './store'
import './App.less'

const store = configStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
