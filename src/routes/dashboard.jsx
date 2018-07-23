import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Gallery from "views/Gallery/Gallery";
import Links from "views/Links/Links";
import { ThisSiteCard } from "components/ThisSiteCard/ThisSiteCard.jsx";
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

import siteData from "variables/SiteData.jsx";

var Components = {
    'Gallery': Gallery,
    'Links': Links,
    'Github': GitHubRepos,
    'Docker': DockerPulls,
    'LinkedIn': LinkedIn,
    'DigitalOcean': DigitalOcean,
    'FullGallery': FullGallery,
    'ThisSiteCard': ThisSiteCard,
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
    render() {
        return (
          <div className="content">
            <Grid fluid>
              <Row>
                < Page data = {this.props.page} />
              </Row>
            </Grid>
          </div>
        );
    }
}

class Page extends Component {
    render() {
        var elements = this.props.data["elements"].map(function(elementData) {
            var component = Components[elementData['component']];
            return React.createElement(component, elementData.props);
        });

        return (
            <div>
                {elements.map(function(element, i){
                   return <Col md={element.props.col_md || 12} key={i}> {element} </Col>;
                })}
            </div>
        );
    }
}


var sitePages = siteData.pages.map(function(page){
  console.log(page);

  if (page.redirect === true) {
    return { redirect: true, path: page.path, to: page.to, name: page.name}
  } else {
    var pageComponent = (props) => <DynamicPage page={page}/>
    return { path: page.path, name: page.name, icon: page.icon, component: pageComponent}
  }


})

export default sitePages;
