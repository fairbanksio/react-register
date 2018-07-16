import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { userConfig } from "variables/UserConfig.jsx";

import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import WorkExperience from "components/WorkExperience/WorkExperience";
import EducationInfo from "components/EducationInfo/EducationInfo";

class UserProfile extends Component {
  componentDidMount(){
    document.title = 'About Me | ' + userConfig.SiteTitle;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <UserCard
                bgImage={userConfig.ProfileBanner}
                avatar={userConfig.ProfileImage}
                name={userConfig.FullName}
                userName={userConfig.Twitter}
                description={
                  <span>
                    {userConfig.Description}
                  </span>
                }
                socials={
                  <div>
                    <a href={'https://www.facebook.com/' + userConfig.Facebook} target='_blank'>
                      <Button simple>
                        <i className="fab fa-facebook" />
                      </Button>
                    </a>
                    <a href={'https://github.com/' + userConfig.GitHub} target='_blank'>
                      <Button simple>
                        <i className="fab fa-github" />
                      </Button>
                    </a>
                    <a href={'https://linkedin.com/in/' + userConfig.LinkedIn} target='_blank'>
                      <Button simple>
                        <i className="fab fa-linkedin" />
                      </Button>
                    </a>
                    <a href={'https://hub.docker.com/r/' + userConfig.Docker} target='_blank'>
                      <Button simple>
                        <i className="fab fa-docker" />
                      </Button>
                    </a>
                    <a href={'https://npmjs.com/~' + userConfig.NPM} target='_blank'>
                      <Button simple>
                        <i className="fab fa-npm" />
                      </Button>
                    </a>
                    <a href={'https://paypal.me/' + userConfig.PayPal} target='_blank'>
                      <Button simple>
                        <i className="fab fa-paypal" />
                      </Button>
                    </a>
                    <a href={'mailto:' + userConfig.Email}>
                      <Button simple>
                        <i className="fa fa-envelope" />
                      </Button>
                    </a>
                  </div>
                }
              />
            </Col>
            <Col md={8}>
              <WorkExperience />
              <EducationInfo />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
