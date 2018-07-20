import React, { Component } from "react";
import { Card } from "components/Card/Card";
import { Grid, Row, Col } from "react-bootstrap";

import { userConfig } from "variables/UserConfig.jsx";
import { myProjects, projectsHead } from "variables/ProjectsConfig.jsx";

class Icons extends Component {
  componentDidMount(){
    document.title = 'Projects | ' + userConfig.SiteTitle;
  }
  render() {
    const proj = myProjects.map((proj, key) => {
      return (
        <HoverImgLink
          key={key}
          linkImg={proj.Img}
          linkURL={proj.URL}
          linkName={proj.Name}
          linkDesc={proj.Desc}
        />
      );
    });

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <CardNoFooter
                title={projectsHead.Title}
                category={projectsHead.Subtitle}
                content={
                  <Row>
                    {proj}
                  </Row>
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
