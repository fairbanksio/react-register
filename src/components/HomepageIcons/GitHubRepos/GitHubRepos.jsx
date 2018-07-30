import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

export class GitHubRepos extends Component {
  getRepoCount() {
    var _this = this;
    var endpoint = 'https://api.github.com/users/' + this.props.repo;

    let headers = new Headers();
    if(this.props.authToken) {
      headers.set('Authorization', 'bearer ' + this.props.authToken);
    }

    fetch(endpoint, {method:'GET',
      headers: headers,
    })
    .then((resp) => resp.json())
    .then(function(data){
      _this.setState({"repos": data.public_repos});
    })
    .catch(function(err) {
      console.log('GitHub Fetch Error: ' + err);
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
        href={'https://github.com/' + this.props.repo + '?tab=repositories'}
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
