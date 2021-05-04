import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.css";
import "assets/css/index.css";

import Sidebar from "./components/sidebar.js";
import Dashboard from "./pages/dashboard.js";
import About from "./pages/about.js";
import Login from "./pages/login.js";


class App extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <header>
            <Switch>
                <Route exact path="/app" component={Dashboard} />
                <Route exact path="/app/dashboard" component={Dashboard} />
                <Route exact path="/app/history" component={Dashboard} />
                <Route exact path='/app/messages' component={Dashboard} />
                <Route exact path="/app/about" component={About} />} />
                <Route exact path="/app/signup" component={About} />} />
                <Route exact path="/app/login" component={Login} />} />
                <Redirect from="/" to="/app/dashboard" />
            </Switch>
        </header>
        <main></main>
      </div>
    );
  }
}

export default App;
