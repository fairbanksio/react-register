import React, { Component } from "react";
import ReactGallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import { galleryPhotos } from "variables/GalleryConfig.jsx";

// eslint-disable-next-line
{/* const photos = this.props.photos; TO DO: This data is here, but using it causes the component to fail. If we could use this, gallery would be re-usable. */}
// eslint-disable-next-line
const photos = galleryPhotos;

export class FullGallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
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
  gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
  handleClickImage () {
    if (this.state.currentImage === photos.length - 1) return;

    this.gotoNext();
  }
  componentDidMount() {
    try{
      console.log("[components/FullGallery]: " + JSON.stringify(this.props, null, ' '));
    }catch(err){}
  }
  render() {
    return (
      <div>
        <ReactGallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
          showThumbnails={true}
          onClickThumbnail={this.gotoImage}
          onClickImage={this.handleClickImage}
        />
      </div>
    )
  }
}

export default FullGallery;
