import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { userConfig, quotes, socials } from "variables/UserConfig.jsx";

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
                    {socials.Facebook ?
                      <a href={'https://www.facebook.com/' + socials.Facebook} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-facebook" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.Twitter ?
                      <a href={'https://twitter.com/' + socials.Twitter} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-twitter" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.GitHub ?
                      <a href={'https://github.com/' + socials.GitHub} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-github" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.LinkedIn ?
                      <a href={'https://linkedin.com/in/' + socials.LinkedIn} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-linkedin" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.Docker ?
                      <a href={'https://hub.docker.com/r/' + socials.Docker} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-docker" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.NPM ?
                      <a href={'https://npmjs.com/~' + socials.NPM} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-npm" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.Behance ?
                      <a href={'https://behance.net/' + socials.Behance} target='_blank' rel='noopener noreferrer'>
                        <Button simple>
                          <i className="fab fa-behance" />
                        </Button>
                      </a>
                      : null
                    }
                    {socials.PayPal ?
                      <a href={'https://paypal.me/' + socials.PayPal} target='_blank' rel='noopener noreferrer'>
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