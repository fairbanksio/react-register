import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { ThisSiteCard } from "components/ThisSiteCard/ThisSiteCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { Gallery } from "components/Gallery/Gallery.jsx";
import {
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales
} from "variables/Variables.jsx";

import { userConfig, extraConfigs } from "variables/UserConfig.jsx";

class Home extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  componentDidMount() {
    document.title = userConfig.SiteTitle;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <GitHubRepos style={{'minHeight':'100px'}}/>
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
              <Card
                statsIcon="fas fa-camera-retro"
                id="chartHours"
                title="Photo Gallery"
                category="TO DO: Load Images from a Config"
                stats="Updated 3 minutes ago"
                content={ <Gallery /> }
              />
            </Col>
            <Col md={4}>
              <ThisSiteCard />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
