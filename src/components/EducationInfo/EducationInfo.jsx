import React, { Component } from "react";
import { Card } from "components/Card/CardNoFooter.jsx";
import { Row, Col } from "react-bootstrap";
import { educationInfoTitle, educationInfoSubtitle, educationInfo } from "variables/PortfolioConfig.jsx";

export class EducationInfo extends Component {
  render() {
    return (
      <Card
        title={educationInfoTitle}
        ctAllIcons
        category={
          <span>
            {educationInfoSubtitle}
          </span>
        }
        content={
          <Row>
            {educationInfo.map((prop, key) => {
              return (
                <Col
                  lg={2}
                  md={3}
                  sm={4}
                  xs={6}
                  className="font-icon-list"
                  key={key}
                >
                  <div className="font-icon-detail">
                    <i className={prop.SchoolIcon} style={{'color':prop.SchoolIconColor}} />
                    <h4 style={{'marginBottom':'3px'}}>{prop.SchoolName}</h4>
                    <h6 style={{'marginBottom':'25px'}}>{prop.SchoolLocation}</h6>
                    <p style={{'marginBottom':'35px','marginLeft':'10px', 'marginRight':'10px'}}>{prop.DegreeDescription}</p>
                    <h6 style={{'color':'#9A9A9A','marginBottom':'5px'}}>{prop.StartDate + " - " + prop.EndDate}</h6>
                  </div>
                </Col>
              );
            })}
          </Row>
        }
      />
    );
  }
}

export default EducationInfo;