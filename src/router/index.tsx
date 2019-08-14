import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginView from '../views/Login'

export default function Router () {
  return (
    <BrowserRouter>
      <Route exact path='/' component={LoginView}/>
    </BrowserRouter>
  )
}
