import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { ThisSiteCard } from "components/ThisSiteCard/ThisSiteCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { LinkedIn } from "components/HomepageIcons/LinkedIn/LinkedIn.jsx";
import { DockerPulls } from "components/HomepageIcons/DockerPulls/DockerPulls.jsx";
import { FullGallery } from "components/FullGallery/FullGallery.jsx";
import { GoogleMaps } from "components/Maps/Maps.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { galleryPhotos } from "variables/GalleryConfig.jsx";

class Home extends Component {
  componentDidMount() {
    document.title = userConfig.SiteTitle;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <GitHubRepos />
            </Col>
            <Col lg={3} sm={6}>
              <DockerPulls />
            </Col>
            <Col lg={3} sm={6}>
              <LinkedIn />
            </Col>
            <Col lg={3} sm={6}>
              <DigitalOcean />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FullGallery photos={galleryPhotos} />
            </Col>
            <Col md={4}>
              <ThisSiteCard />
              <GoogleMaps />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
