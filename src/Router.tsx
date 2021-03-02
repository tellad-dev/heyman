import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login'
import Customer from './pages/customer'
import CustomerShow from './pages/customer/show'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/customer">
          <Customer />
        </Route>
        <Route exact path="/customer/:id">
          <CustomerShow />
        </Route>
        {/* Not Found */}
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
