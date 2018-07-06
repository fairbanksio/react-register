import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales
} from "variables/Variables.jsx";

import { userConfig } from "variables/UserConfig.jsx";

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
  getRepoCount() {
    var _this = this;
    var endpoint = 'https://api.github.com/users/' + userConfig.GitHub;
    fetch(endpoint)
    .then((resp) => resp.json())
    .then(function(data){
      console.log(data.public_repos);
      _this.setState({"repos": data.public_repos});
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  componentWillMount() {
    this.setState({
      "repos": 0
    });
  }
  componentDidMount() {
    this.getRepoCount();
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-github" />}
                statsText="Repositories"
                statsValue={this.state.repos}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fab fa-digital-ocean"
                title={userConfig.SiteTitle + " Behind The Scenes"}
                category="This site is brought to you by..."
                stats="Powered by DigitalOcean"
                content={
                  <div>
                    <ul>
                      {/* TO DO: Load all of this from a config? */}
                      <li><a href='https://github.com/Fairbanks-io/react-register' target='_blank' rel='noopener noreferrer'>This React Dashboard</a> with special thanks to Tim, Brandon and Jon</li>
                      <li>Node, courtesy of <a href='https://github.com/creationix/nvm' target='_blank' rel='noopener noreferrer'>NVM</a></li>
                      <li><a href='https://docs.docker.com/' target='_blank' rel='noopener noreferrer'>Docker Virtualization</a></li>
                      <li>Load balancing, rate limiting and proxy support from <a href='https://nginx.org/en/' target='_blank' rel='noopener noreferrer'>Nginx!</a></li>
                      <li>Modules such as <a href='https://expressjs.com/' target='_blank' rel='noopener noreferrer'>Express</a> and <a href='https://github.com/krakenjs/lusca' target='_blank' rel='noopener noreferrer'>Lusca</a></li>
                      <li><a href='https://letsencrypt.org/' target='_blank' rel='noopener noreferrer'>Let's Encrypt</a> SSL certificates auto-renewed with <a href='https://github.com/srvrco/getssl' target='_blank' rel='noopener noreferrer'>GetSSL</a></li>
                      <li><a href='https://www.splunk.com/en_us/software/splunk-enterprise.html' target='_blank' rel='noopener noreferrer'>Splunk</a> Monitoring and Alerting</li>
                    </ul>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
