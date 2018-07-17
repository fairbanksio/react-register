import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { userConfig } from "variables/UserConfig.jsx";

export class DockerPulls extends Component {
  getPullCount() {
    var _this = this;
    var endpoint = 'https://hub.docker.com/v2/repositories/' + userConfig.Docker;
    console.log('DockerHub Endpoint: ' + endpoint);
    fetch(endpoint, { 'mode':'no-cors' })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('Resp: ' + JSON.stringify(data, null, ' '))
      var total_pulls = "?";
      _this.setState({"pulls": total_pulls})
    })
    .catch((err) => console.log(err))
  }
  componentWillMount() {
    this.setState({
      "pulls": "--"
    });
  }
  componentDidMount() {
    this.getPullCount();
  }
  render() {
    return (
      <a style={{'color':'#000000'}}
        href={'https://hub.docker.com/r/' + userConfig.Docker}
        target='_blank'
        rel='noopener noreferrer'>
        <StatsCard
          bigIcon={ <i className="fab fa-lg fa-docker" style={{'color':'#0DB7ED'}}/> }
          statsText="Docker Pulls"
          statsValue={this.state.pulls}
          statsIcon={ <i className="fa fa-refresh" /> }
          statsIconText="Updated now"
        />
      </a>
    );
  }
}

export default DockerPulls;