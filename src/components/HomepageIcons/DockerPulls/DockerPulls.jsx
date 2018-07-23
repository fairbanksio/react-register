import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

export class DockerPulls extends Component {
  getPullCount() {
    var _this = this;
    var endpoint = '';
    if(this.props.corsproxy){
      endpoint = this.props.corsproxy + 'https://hub.docker.com/v2/repositories/' + this.props.username;
    } else {
      endpoint = 'https://hub.docker.com/v2/repositories/' + this.props.username;
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
        href={'https://hub.docker.com/r/' + this.props.username}
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
