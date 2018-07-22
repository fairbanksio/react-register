import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { socials } from "variables/UserConfig.jsx";

export class GitHubRepos extends Component {
  getRepoCount() {
    var _this = this;
    var endpoint = 'https://api.github.com/users/' + socials.GitHub;
    fetch(endpoint)
    .then((resp) => resp.json())
    .then(function(data){
      _this.setState({"repos": data.public_repos});
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  componentWillMount() {
    this.setState({
      "repos": "--"
    });
  }
  componentDidMount() {
    this.getRepoCount();
  }
  render() {
    return (
      <a style={{'color':'#000000'}}
        href={'https://github.com/' + socials.GitHub + '?tab=repositories'}
        target='_blank'
        rel='noopener noreferrer'>
        <StatsCard
          bigIcon={ <i className="fab fa-lg fa-github" style={{'color':'#6E5494'}}/> }
          statsText="GitHub Repos"
          statsValue={this.state.repos}
          statsIcon={ <i className="fa fa-refresh" /> }
          statsIconText="Updated now"
        />
      </a>
    );
  }
}

export default GitHubRepos;