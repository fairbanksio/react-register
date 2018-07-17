import React, { Component } from "react";
import { Card } from "components/Card/Card";
import { Grid, Row, Col } from "react-bootstrap";

import { userConfig } from "variables/UserConfig.jsx";

class Icons extends Component {
  componentDidMount(){
    document.title = 'Projects | ' + userConfig.SiteTitle;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={'More Projects from ' + userConfig.FirstName}
                content={
                  <div>
                    This is just a test div. Fill me!
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
