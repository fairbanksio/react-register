import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class GitDockerCombo extends Component {
  constructor(){
    super();
    this.state = {
      "repos": "--",
      "pulls": "--",
      "packages": "--",
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

  getPackageCount() {
    var _this = this;
    var endpoint = 'https://registry.npmjs.com/-/v1/search?text=maintainer:' + this.props.maintainer;

    let headers = new Headers();

    fetch(endpoint, {method:'GET',
      headers: headers,
    })
    .then((resp) => resp.json())
    .then(function(data){
      _this.setState({"packages": data.objects.length});
    })
    .catch(function(err) {
      console.log('NPM Fetch Error: ' + err);
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
    this.getPackageCount();
  }

  render() {
    return (
      <Row>

        <Col xs={12} md={4}>
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
        </Col>

        <Col xs={12} md={4}>
          <div className="card card-stats">
            <div className="content">

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
        </Col>

        <Col xs={12} md={4}>
          <div className="card card-stats">
            <div className="content">

              <Row>
                <Col xs={5}>
                  <div className="icon-big text-center icon-warning">
                    { <i className="fab fa-lg fa-npm" style={{'color':'#cb3837'}}/>}
                  </div>
                </Col>
                <Col xs={7}>
                  <div className="numbers">
                    <p>NPM Packages</p>
                    {this.state.packages}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>

      </Row>

    );
  }
}

export default GitDockerCombo;
