import React, { Component } from "react";
import ReactGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Card } from "components/Card/Card.jsx";

import { galleryTitle, gallerySubtitle, galleryFooter, galleryFooterLogo, galleryPhotos } from "variables/GalleryConfig.jsx";

{/* const photos = this.props.photos; */}
const photos = galleryPhotos;

export class Gallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <Card
        id={galleryTitle}
        title={galleryTitle}
        category={gallerySubtitle}
        statsIcon={galleryFooterLogo}
        stats={galleryFooter}
        content={
          <div>
            <ReactGallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        }
      />
    )
  }
}

export default Gallery;
