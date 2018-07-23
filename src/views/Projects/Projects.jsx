import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import ProjectsGallery from "components/Projects/ProjectsGallery.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { projectsHead } from "variables/ProjectsConfig.jsx";
import { galleryPhotos } from "variables/GalleryConfig.jsx"

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
              <CardNoFooter
                title={projectsHead.Title}
                category={projectsHead.Subtitle}
                content={
                  <ProjectsGallery photos={galleryPhotos} />
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
