import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Gallery from "views/Gallery/Gallery";
import Links from "views/Links/Links";
import { UnorderedListCard } from "components/UnorderedListCard/UnorderedListCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { LinkedIn } from "components/HomepageIcons/LinkedIn/LinkedIn.jsx";
import { DockerPulls } from "components/HomepageIcons/DockerPulls/DockerPulls.jsx";
import { FullGallery } from "components/FullGallery/FullGallery.jsx";
import { GoogleMaps } from "components/Maps/Maps.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import WorkExperience from "components/WorkExperience/WorkExperience";
import EducationInfo from "components/EducationInfo/EducationInfo";
import SkillsCard from "components/SkillsCard/SkillsCard";



var Components = {
    'Gallery': Gallery,
    'Links': Links,
    'Github': GitHubRepos,
    'Docker': DockerPulls,
    'LinkedIn': LinkedIn,
    'DigitalOcean': DigitalOcean,
    'FullGallery': FullGallery,
    'UnorderedListCard': UnorderedListCard,
    'GoogleMaps': GoogleMaps,
    'UserCard': UserCard,
    'SkillsCard': SkillsCard,
    'WorkExperience': WorkExperience,
    'EducationInfo': EducationInfo,
};



class DynamicPage extends Component{
    componentDidMount(){
      document.title = this.props.page.name;
    }

    renderElements(elements){
      var rtrnElements = elements.map(function(elementData){
        if (Array.isArray(elementData.group)){
          var subElements = elementData.group.map(function(elementData, i){
            var Component = Components[elementData['component']] || elementData['component'];
            return <Component {...elementData.props} {...elementData} key={i}/>
          });
          return (<Col md={elementData.col.md}> {subElements} </Col>);
        } else {
          var Component = Components[elementData['component']] || elementData['component'];
          return <Component {...elementData.props} {...elementData}/>
        }
      });
      return rtrnElements;
    }

    render() {
        var elements = this.renderElements(this.props.page["elements"]);

        return (
          <div className="content">
            <Grid fluid>
              <Row>

                  {elements.map(function(element, i){

                      return <Col {...element.props.col} key={i}> {element} </Col>;

                  })}

              </Row>
            </Grid>
          </div>
        );
    }
}

export default DynamicPage;
