import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { userConfig } from "../../variables/UserConfig.jsx";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/links">Links</a>
              </li>
              <li>
                <a href="/about">About Me</a>
              </li>
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
