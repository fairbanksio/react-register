import React, { Component } from "react";
import CardNoFooter from "components/Card/CardNoFooter.jsx";
import { Row, Col } from "react-bootstrap";

export class EducationInfo extends Component {
  render() {
    return (
      <CardNoFooter
        title={this.props.educationInfoTitle}
        ctAllIcons
        category={
          <span>
            {this.props.educationInfoSubtitle}
          </span>
        }
        content={
          <Row>
            {this.props.educationInfo.map((prop, key) => {
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
                    <i className={prop.SchoolIcon} style={{'color':prop.SchoolIconColor}} />
                    <h4 style={{'marginBottom':'3px'}}>{prop.SchoolName}</h4>
                    <h6 style={{'marginBottom':'25px'}}>{prop.DegreeName}</h6>
                    <p style={{'marginBottom':'25px','marginLeft':'10px','marginRight':'10px','fontSize':'12px'}}>{prop.DegreeDescription}</p>
                    <h6 style={{'color':'#9A9A9A','marginBottom':'5px'}}>{prop.StartDate + " - " + prop.EndDate}</h6>
                    <h6 style={{'color':'#9A9A9A','marginBottom':'3px'}}>{prop.SchoolLocation}</h6>
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
