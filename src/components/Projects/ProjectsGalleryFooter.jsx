import React, { Component } from "react";
import ReactGallery from 'react-photo-gallery';
import { Card } from "components/Card/Card.jsx";

export class Gallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.redirect = this.redirect.bind(this);
  }
  redirect(event, obj) {
    console.log(" PrintObj " + JSON.stringify(obj))
    window.open('http://www.website.com/page')
  }
  render() {
    return (
      <Card
        id={this.props.galleryTitle}
        title={this.props.galleryTitle}
        category={this.props.gallerySubtitle}
        statsIcon={this.props.galleryFooterLogo}
        stats={this.props.galleryFooter}
        content={
          <div>
            <ReactGallery photos={this.props.photos} onClick={this.redirect} />
          </div>
        }
      />
    )
  }
}

export default Gallery;
