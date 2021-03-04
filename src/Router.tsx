import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Setting from './pages/setting'
import CustomerList from './pages/CustomerManagement/customerList'
import CustomerDetail from './pages/CustomerManagement/customerDetail'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/customer">
          <CustomerList />
        </Route>
        <Route exact path="/customer/:id">
          <CustomerDetail />
        </Route>
        <Route exact path="/setting">
          <Setting />
        </Route>
        {/* Not Found */}
        <Route component={() => <Redirect to="/signin" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
