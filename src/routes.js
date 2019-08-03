import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Componentes
import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './auth'
import Logout from './pages/Dashboard/logout'
import Footer from './components/Footer'

export default () =>
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <Route exact path='/logout' component={Logout} />
    </Switch>
    <Footer />
  </Router>