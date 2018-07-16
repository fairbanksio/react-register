import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import './HoverImgLink.css';

class HoverImgLink extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (

        <Col md={4}>

          <div className="card">
            <a href={this.props.linkURL}>
              <div className="hover-container">

                <img className="hover-image" src={this.props.linkImg} alt="..." />
                <div className="hover-overlay">
                  <h4 className="hover-title">
                    {this.props.linkName}
                  </h4>
                  <div className="hover-text">
                    {this.props.linkDesc}
                  </div>
                </div>

              </div>
            </a>

          </div>

        </Col>

    );
  }
}
export default HoverImgLink;
