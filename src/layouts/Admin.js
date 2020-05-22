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
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import aboutMe from "aboutMe.js";

class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/app") {
        console.log(prop.layout + prop.path);
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  getAboutMeRoute = aboutMe => {
    return aboutMe.map((prop, key) => {
      if (prop.layout === "/app") {
        console.log(prop.layout + prop.path);
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
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

  getAboutMeBrandText = path => {
    for (let i = 0; i < aboutMe.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          aboutMe[i].layout + aboutMe[i].path
        ) !== -1
      ) {
        return aboutMe[i].name;
      }
    }
    return "Brand";
  };

  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          aboutMe={aboutMe}
        />
        <div className="main-content" ref="mainContent">

          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          
          <Switch>
            {this.getRoutes(routes)}
            {this.getAboutMeRoute(aboutMe)}
            <Redirect from="*" to="/app/index" />
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
