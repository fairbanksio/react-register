import React, { Component } from "react";
import { Grid } from "react-bootstrap";
//import dashboardRoutes from "routes/dashboard.jsx";
import { NavLink } from "react-router-dom";


class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">

            <ul>
              {this.props.sitePages.map((prop, key) => {
                if (!prop.redirect && !prop.hidden)
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
            <a href={this.props.Website}>{this.props.SiteTitle}</a>, {this.props.FooterNote}
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
