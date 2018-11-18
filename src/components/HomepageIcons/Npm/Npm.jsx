import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Row, Col } from "react-bootstrap";

export class Npm extends Component {
  constructor(){
    super();
    this.state = {
      "packages": "--",
    }
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
  componentDidMount() {
    this.getPackageCount();
  }
  render() {
    return (
      <a style={{'color':'#000000'}}
        href={"https://www.npmjs.com/~" + this.props.maintainer}
        target='_blank'
        rel='noopener noreferrer'>
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
      </a>
    );
  }
}

export default Npm;
