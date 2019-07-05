import React, { Component } from "react";
import CardNoFooter from "components/Card/CardNoFooter.jsx";
import { Row, Col } from "react-bootstrap";

export class WorkExperience extends Component {
  render() {
    return (
      <CardNoFooter
        title={this.props.workExperienceTitle}
        ctAllIcons
        category={
          <span>
            {this.props.workExperienceSubtitle}
          </span>
        }
        content={
          <Row>
            {this.props.workExperience.map((prop, key) => {
              return (
                <Col
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  className="font-icon-list"
                  key={key}
                >
                  <div className="font-icon-detail">
                    <i className={prop.JobIcon} style={{'color':prop.JobIconColor}} />
                    <h4 style={{'marginBottom':'3px'}}>{prop.JobTitle}</h4>
                    <h6 style={{'marginBottom':'25px'}}>{prop.EmployerName}</h6>
                    <p style={{'marginBottom':'25px','marginLeft':'10px','marginRight':'10px','fontSize':'12px'}}>{prop.JobDescription}</p>
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
