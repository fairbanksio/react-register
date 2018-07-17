import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { userConfig, quotes } from "variables/UserConfig.jsx";

import { Card } from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

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
                quotes={quotes}
                description={
                  <span>
                    {userConfig.Description}
                  </span>
                }
                socials={
                  <div>
                    <a href={'https://www.linkedin.com/' + userConfig.LinkedIn} target='_blank'>
                      <Button simple>
                        <i className="fab fa-linkedin" />
                      </Button>
                    </a>
                    <a href={'https://www.behance.net/' + userConfig.Behance} target='_blank'>
                      <Button simple>
                        <i className="fab fa-behance-square" />
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
              <Card
                title={'Program Knowledge'}
                content={
                  <div>
                    Adobe
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
