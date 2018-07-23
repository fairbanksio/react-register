import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import dashboardRoutes from "routes/dashboard.jsx";
import CardNoFooter from "components/Card/CardNoFooter.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { userLinks, userLinksHead } from "variables/LinksConfig.jsx";

class TableList extends Component {
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  componentDidMount(){
    document.title = this.getBrand() + ' | ' + userConfig.SiteTitle;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <CardNoFooter
                title={userLinksHead.Title}
                category={userLinksHead.Subtitle}
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover style={{"marginBottom":"0px"}}>
                    <thead>
                      <tr>
                        <th key='0'>Name</th>
                        <th key='1'>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userLinks.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td><a href={prop.URL} target='_blank' rel='noopener noreferrer'>{prop.Name}</a></td>
                            <td>{prop.Desc}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            {/* Additional Tables can be added by duplicating the <Col></Col> section above. */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;