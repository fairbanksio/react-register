import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { userConfig } from "variables/UserConfig.jsx";

import { Card } from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title={'More Information About ' + userConfig.FirstName}
                content={
                  <div>
                    This is just a test div. Fill me!
                  </div>
                }
              />
            </Col>
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
                        <i className="fa fa-envelope"></i>
                      </Button>
                    </a>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default UserProfile;
