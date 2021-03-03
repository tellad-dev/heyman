import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Signin from './pages/signin'
import Customer from './pages/customer'
import CustomerShow from './pages/customer/show'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/customer">
          <Customer />
        </Route>
        <Route exact path="/customer/:id">
          <CustomerShow />
        </Route>
        {/* Not Found */}
        <Route component={() => <Redirect to="/signin" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
