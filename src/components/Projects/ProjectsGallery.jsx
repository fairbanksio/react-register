import React, { Component } from "react";
import ReactGallery from 'react-photo-gallery';

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
      <ReactGallery photos={this.props.photos} onClick={this.redirect} />
    )
  }
}

export default Gallery;
