import React, { Component } from "react";
import { Card } from "components/Card/CardNoFooter.jsx";
import { Row, Col } from "react-bootstrap";
import { workExperienceTitle, workExperienceSubtitle, workExperience } from "variables/PortfolioConfig.jsx";

export class WorkExperience extends Component {
  render() {
    return (
      <Card
        title={workExperienceTitle}
        ctAllIcons
        category={
          <span>
            {workExperienceSubtitle}
          </span>
        }
        content={
          <Row>
            {workExperience.map((prop, key) => {
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
                    <i className={prop.JobIcon} style={{'color':prop.JobIconColor}} />
                    <h4 style={{'marginBottom':'3px'}}>{prop.JobTitle}</h4>
                    <h6 style={{'marginBottom':'25px'}}>{prop.EmployerName}</h6>
                    <p style={{'marginBottom':'35px','marginLeft':'10px','marginRight':'10px'}}>{prop.JobDescription}</p>
                    <h6 style={{'color':'#9A9A9A','marginBottom':'5px'}}>{prop.StartDate + " - " + prop.EndDate}</h6>
                    <h6 style={{'color':'#9A9A9A','marginBottom':'3px'}}>{prop.JobLocation}</h6>
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

export default WorkExperience;