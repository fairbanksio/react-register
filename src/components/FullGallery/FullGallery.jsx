import React, { Component } from "react";
import ReactGallery from 'react-photo-gallery';
import Lightbox from 'react-images';

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
    if (this.state.currentImage === this.props.photos.length - 1) return;
    this.gotoNext();
  }
  render() {
    return (
      <div>
        <ReactGallery photos={this.props.photos} onClick={this.openLightbox} />
        <Lightbox images={this.props.photos}
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
        <br/>
      </div>
    )
  }
}

export default FullGallery;
