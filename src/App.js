import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.css";
import "assets/css/index.css";

import Sidebar from "./components/sidebar.js";
import Dashboard from "./pages/dashboard.js";
import About from "./pages/about.js";


class App extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <header>
            <Sidebar/>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/history" component={Dashboard} />
                <Route exact path='/messages' component={Dashboard} />
                <Route exact path="/about" component={About} />} />
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </header>
        <main></main>
      </div>
    );
  }
}

export default App;
