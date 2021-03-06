/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// core components
import Navigation from "components/navbar.js";
import Sidebar from "components/sidebar.js";

import routes from "routes.js";

class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return (
      <Route
        path={prop.layout + prop.path}
        component={prop.component}
        key={key}
      />
    );
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  render() {
    return (
      <>
        <Sidebar
          {...this.props}
        />
        <div className="main-content" ref="mainContent">

          <Navigation
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/app/dashboard" />
          </Switch>


          {/* <Container fluid> */}
            {/* <AdminFooter /> */}
          {/* </Container> */}
        </div>
      </>
    );
  }
}

export default Admin;
