import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { userConfig, quotes } from "variables/UserConfig.jsx";

import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import WorkExperience from "components/WorkExperience/WorkExperience";
import EducationInfo from "components/EducationInfo/EducationInfo";
import SkillsCard from "components/SkillsCard/SkillsCard";

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
                jobTitle={userConfig.JobTitle}
                quotes={quotes}
                description={
                  <span>
                    {userConfig.Description}
                  </span>
                }
                socials={
                  <div>
                    {userConfig.Facebook ?
                      <a href={'https://www.facebook.com/' + userConfig.Facebook} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-facebook" />
                        </Button>
                      </a>
                      : <div></div>
                    }
                    {userConfig.Twitter ?
                      <a href={'https://twitter.com/' + userConfig.Twitter} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-twitter" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.GitHub ?
                      <a href={'https://github.com/' + userConfig.GitHub} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-github" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.LinkedIn ?
                      <a href={'https://linkedin.com/in/' + userConfig.LinkedIn} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-linkedin" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.Docker ?
                      <a href={'https://hub.docker.com/r/' + userConfig.Docker} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-docker" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.NPM ?
                      <a href={'https://npmjs.com/~' + userConfig.NPM} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-npm" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.Behance ?
                      <a href={'https://behance.net/' + userConfig.Behance} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-behance" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.PayPal ?
                      <a href={'https://paypal.me/' + userConfig.PayPal} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-paypal" />
                        </Button>
                      </a>
                      : null
                    }
                    {userConfig.Email ?
                      <a href={'mailto:' + userConfig.Email}>
                        <Button simple>
                          <i className="fa fa-envelope" />
                        </Button>
                      </a>
                      : null
                    }
                  </div>
                }
              />
              <SkillsCard />
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
