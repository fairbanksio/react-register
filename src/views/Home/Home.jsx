import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { MiniStatsCard } from "components/MiniStatsCard/MiniStatsCard.jsx";
import { ThisSiteCard } from "components/ThisSiteCard/ThisSiteCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { Gallery } from "components/Gallery/Gallery.jsx";

import { userConfig, extraConfigs } from "variables/UserConfig.jsx";
// eslint-disable-next-line
import { galleryTitle1, gallerySubtitle1, galleryFooter1, galleryFooterLogo1, galleryPhotos1 } from "variables/GalleryConfig.jsx";
// eslint-disable-next-line
import { galleryTitle2, gallerySubtitle2, galleryFooter2, galleryFooterLogo2, galleryPhotos2 } from "variables/GalleryConfig.jsx";

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
              <Gallery />
            </Col>
            <Col md={4}>
              <MiniStatsCard style={{'color':'#A9A9A9'}}
                bigIcon={<i className="fas fa-lg fa-code" style={{'color':'#A9A9A9'}}/>}
                statsText="Code, Projects & Tutorials"
                statsValue="Code, Projects & Tutorials"
              />
              <MiniStatsCard style={{'color':'#A9A9A9'}}
                bigIcon={<i className="fas fa-lg fa-link" style={{'color':'#A9A9A9'}}/>}
                statsText="Development Links & Tools"
                statsValue="Development Links & Tools"
              />
              <MiniStatsCard style={{'color':'#A9A9A9'}}
                bigIcon={<i className="fas fa-lg fa-id-card" style={{'color':'#A9A9A9'}}/>}
                statsText="About Me"
                statsValue="About Me"
              />
              <ThisSiteCard />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
