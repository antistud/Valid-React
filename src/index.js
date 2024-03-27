import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Home1 from './views/home1'
import NotFound from './views/not-found'
import TeamMember from './views/TeamMember'
import QrCode from './views/QrCode'

const App = () => {

  let hostname = window.location.hostname;

  return (
    <Router>
      <Switch>
        {!hostname.includes("valid.health") ? (
          <Route component={Home} exact path="/" />
        ) : (
          <Route component={Home1} exact path="/" />
        )}
        <Route component={Home1} exact path="/home1" />
        <Route component={TeamMember} exact path="/team/:name" />
        <Route component={QrCode} exact path="/code/:name" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
