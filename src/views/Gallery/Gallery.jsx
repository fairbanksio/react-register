import React, { Component } from "react";
import { FullGallery } from "components/FullGallery/FullGallery.jsx";

class Gallery extends Component {

  constructor(props) {
      super(props);
      this.state = {data: this.props};
  }

  componentDidMount(){
    document.title = 'Gallery';
  }
  render() {
    return (
      <FullGallery {...this.props} />
    );
  }
}

export default Gallery;
