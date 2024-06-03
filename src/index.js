import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import Home1 from "./views/home1";
import NotFound from "./views/not-found";
import TeamMember from "./views/TeamMember";
import QrCode from "./views/QrCode";
import BiginForm from "./views/BiginForm";
import Post from "./views/post";
import PostsPage from "./views/posts";
import Page from "./views/page";
import Doc from "./views/doc";
import DocFull from "./views/doc_full";
import Pricing from "./views/pricing";
import About from "./views/about";
import KlaviyoForm from "./views/KlaviyoForm";
import Dataroom from "./views/dataroom";
import ContactForm from "./views/ContactForm";

const App = () => {
  let hostname = window.location.hostname;

  return (
    <Router>
      <Switch>
        {hostname.includes("valid.health") ||
        hostname.includes("login.health") ? (
          <Route component={Home1} exact path="/" />
        ) : (
          <Route component={Home} exact path="/" />
        )}
        <Route component={Home1} exact path="/health" />
        <Route component={Home1} exact path="/auth" />
        <Route component={Home1} exact path="/patient" />
        <Route component={Home1} exact path="/user" />
        <Route component={Home1} exact path="/join" />
        <Route component={Home} exact path="/provider" />
        <Route component={TeamMember} exact path="/team/:name" />
        <Route component={ContactForm} exact path="/form/:form" />
        <Route component={ContactForm} exact path="/event/:form" />
        <Route component={KlaviyoForm} exact path="/forms/:form" />
        <Route component={KlaviyoForm} exact path="/events/:form" />
        <Route component={QrCode} exact path="/code/:name" />
        <Route component={Post} path="/post/:name" />
        <Route component={Page} path="/page/:name" />
        <Route component={About} path="/about" />
        <Route component={Doc} path="/doc/:name" />
        <Route component={DocFull} path="/_doc/:name" />
        <Route component={PostsPage} path="/posts" />
        <Route component={Pricing} path="/sign-up" />
        <Route component={Pricing} path="/pricing" />
        <Route component={Dataroom} path="/data-room" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
