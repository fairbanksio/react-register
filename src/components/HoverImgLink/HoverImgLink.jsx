import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import './HoverImgLink.css';

class HoverImgLink extends Component {
  render() {
    return (
        <Col lg={3.5} md={4} sm={6} xs={12}>
          <div className="card">
            <a href={this.props.linkURL} target='_blank' rel='noopener noreferrer'>
              <div className="hover-container">
                <img className="hover-image" src={this.props.linkImg} alt={this.props.Name} />
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
