import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class GitDockerCombo extends Component {
  constructor(){
    super();
    this.state = {
      "repos": "--",
      "pulls": "--"
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
  componentDidMount() {
    this.getPullCount();
    this.getRepoCount();
  }

  render() {
    return (

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
          <hr />
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                { <i className="fab fa-lg fa-docker" style={{'color':'#0DB7ED'}}/>}
              </div>
            </Col>
            <Col xs={7}>
              <div className="numbers">
                <p>Docker Pulls</p>
                {this.state.pulls}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default GitDockerCombo;
