import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import HoverImgLink from "components/HoverImgLink/HoverImgLink.jsx";
import ProjectsGallery from "components/Projects/ProjectsGallery.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { myProjects, projectsHead } from "variables/ProjectsConfig.jsx";
import { galleryPhotos } from "variables/GalleryConfig.jsx"

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
