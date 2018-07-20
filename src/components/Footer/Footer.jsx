import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import dashboardRoutes from "routes/dashboard.jsx";
import { NavLink } from "react-router-dom";

import siteData from "variables/SiteData";

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
                        {prop.name}
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>

          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href={siteData.Website}>{siteData.SiteTitle}</a>, {siteData.FooterNote}
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
