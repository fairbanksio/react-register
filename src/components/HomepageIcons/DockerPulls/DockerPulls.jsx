import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { userConfig, corsProxy } from "variables/UserConfig.jsx";

export class DockerPulls extends Component {
  getPullCount() {
    var _this = this;
    if(corsProxy){
      var endpoint = corsProxy + 'https://hub.docker.com/v2/repositories/' + userConfig.Docker;
    } else {
      var endpoint = 'https://hub.docker.com/v2/repositories/' + userConfig.Docker;
    }

    fetch(endpoint)
    .then((resp) => resp.json())
    .then((data) => {
      var total_pulls = 0;
      data.results.forEach(function(repo){
        total_pulls += repo.pull_count;
      });
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
