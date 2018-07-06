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
                    <a href={'https://github.com/' + userConfig.GitHub} target='_blank'>
                      <Button simple>
                        <i className="fa fa-github" />
                      </Button>
                    </a>
                    <a href={'https://linkedin.com/' + userConfig.LinkedIn} target='_blank'>
                      <Button simple>
                        <i className="fa fa-linkedin" />
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
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default UserProfile;
