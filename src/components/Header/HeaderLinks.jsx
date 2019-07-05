import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {

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
