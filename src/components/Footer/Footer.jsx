import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { userConfig } from "../../variables/UserConfig.jsx";
import dashboardRoutes from "routes/dashboard.jsx";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">

            <ul>
              {dashboardRoutes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li key={key}>
                      <NavLink to={prop.path}>
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>

          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href={userConfig.Website}>{userConfig.SiteTitle}</a>, made with
            love in React
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
