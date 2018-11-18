import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          {/* Additional LeftNav items can be added here. */}
        </Nav>
        <Nav pullRight>
          {/* Additional RightNav items can be added here. */}
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
