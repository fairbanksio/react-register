import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { ThisSiteCard } from "components/ThisSiteCard/ThisSiteCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { Gallery } from "components/Gallery/Gallery.jsx";
import { GoogleMaps } from "components/Maps/Maps.jsx";

import { userConfig, extraConfigs } from "variables/UserConfig.jsx";
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
            <a style={{'color':'#000000'}}
              href={extraConfigs.healthMonitor}
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
            <Col lg={3} sm={6}>
            <a style={{'color':'#000000'}}
              href={'https://linkedin.com/in/' + userConfig.LinkedIn}
              target='_blank'
              rel='noopener noreferrer'>
                <StatsCard
                  bigIcon={<i className="fab fa-linkedin" style={{'color':'#0077B5'}}/>}
                  statsText="Contact me on"
                  statsValue="LinkedIn"
                  statsIcon={<i className="fa fa-envelope" />}
                  statsIconText="Drop me a line"
                />
              </a>
            </Col>
            <Col lg={3} sm={6}>
              <DigitalOcean />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Gallery photos={galleryPhotos} />
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
