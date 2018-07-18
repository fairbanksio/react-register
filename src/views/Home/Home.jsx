import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { ThisSiteCard } from "components/ThisSiteCard/ThisSiteCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { TestComponents } from "components/HomepageIcons/TestComponents/TestComponents.jsx";
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
            <Col lg={4} sm={7}>
              <GitHubRepos />
            </Col>
            <Col lg={4} sm={7}>
            <a style={{'color':'#000000'}}
              href="#"
              target='_blank'
              rel='noopener noreferrer'>
                <StatsCard
                  bigIcon={<i className="pe-7s-graph1 text-danger" />}
                  statsText="Errors"
                  statsValue="23"
                  statsIcon={<i className="fa fa-clock-o" />}
                  statsIconText="In the last hour"
                />
              </a>
            </Col>
            <Col lg={4} sm={7}>
              <TestComponents />
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
