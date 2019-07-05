import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class GitHubRepos extends Component {
  constructor(){
    super();
    this.state = {
      "repos": "--"
    }
  }
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
  componentDidMount() {
    this.getRepoCount();
  }
  render() {
    return (
      <a style={{'color':'#000000'}}
        href={'https://github.com/' + this.props.repo + '?tab=repositories'}
        target='_blank'
        rel='noopener noreferrer'>
        <div className="card card-stats">
          <div className="content">
            <Row>
              <Col xs={5}>
                <div className="icon-big text-center icon-warning">
                  { <i className="fab fa-lg fa-github" style={{'color':'#6E5494'}}/> }
                </div>
              </Col>
              <Col xs={7}>
                <div className="numbers">
                  <p>GitHub Repos</p>
                  {this.state.repos}
                </div>
              </Col>
            </Row>

          </div>
        </div>
      </a>
    );
  }
}

export default GitHubRepos;
