import React, { Component } from "react";
import { Card } from "components/Card/Card.jsx";

export class ThisSiteCard extends Component {
  render() {
    return (
      <Card
        statsIcon="fab fa-node-js"
        title="Behind The Scenes"
        category="This site is brought to you by..."
        stats="Powered by Javascript"
        content={
          <div style={{'padding':'10px'}}>
            <ul>
              {/* TO DO: Load all of this from a config? */}
              <li><a href={this.props.doReferral} target='_blank' rel='noopener noreferrer'>Digital Ocean Droplets</a></li>
              <li><a href={this.props.siteRepo} target='_blank' rel='noopener noreferrer'>This React Dashboard</a> with special thanks to Tim, Brandon and Jon</li>
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
    );
  }
}

export default ThisSiteCard;
