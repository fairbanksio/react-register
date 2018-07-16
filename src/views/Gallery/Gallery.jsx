import React, { Component } from "react";
import dashboardRoutes from "routes/dashboard.jsx";

import { FullGallery } from "components/FullGallery/FullGallery.jsx";
import { userConfig } from "variables/UserConfig.jsx";
import { galleryPhotos } from "variables/GalleryConfig.jsx";

class Gallery extends Component {
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  componentDidMount(){
    document.title = this.getBrand() + ' | ' + userConfig.SiteTitle;
  }
  render() {
    return (
      <FullGallery photos={galleryPhotos} />
    );
  }
}

export default Gallery;
