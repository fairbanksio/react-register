import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class DockerPulls extends Component {
  constructor(){
    super();
    this.state = {
      "pulls": "--"
    }
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
      _this.setState({"pulls": this.numberWithCommas(total_pulls)})
    })
    .catch((err) => console.log(err))
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
        </a>
    );
  }
}

export default DockerPulls;
