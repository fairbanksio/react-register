import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import './HoverImgLink.css';

class HoverImgLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <Col lg={3} md={4} sm={6} xs={12}>

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
