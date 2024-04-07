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
import BiginForm from './views/BiginForm'
import Post from './views/post'
import PostsPage from './views/posts'
import Page from './views/page'
import Doc from './views/doc'
import DocFull from './views/doc_full'
import Pricing from './views/pricing'
import About from './views/about'

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
        <Route component={Home1} exact path="/health" />
        <Route component={Home1} exact path="/auth" />
        <Route component={Home1} exact path="/patient" />
        <Route component={Home1} exact path="/user" />
        <Route component={TeamMember} exact path="/team/:name" />
        <Route component={BiginForm} exact path="/form/:form" />
        <Route component={BiginForm} exact path="/event/:form" />
        <Route component={QrCode} exact path="/code/:name" />
        <Route component={Post} path="/post/:name" />
        <Route component={Page} path="/page/:name" />
        <Route component={About} path="/about" />
        <Route component={Doc} path="/doc/:name" />
        <Route component={DocFull} path="/_doc/:name" />
        <Route component={PostsPage} path="/posts" />
        <Route component={Pricing} path="/sign-up" />
        <Route component={Pricing} path="/pricing" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
