import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import dashboardRoutes from "routes/dashboard.jsx";
import CardNoFooter from "components/Card/CardNoFooter.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { tableTitle, tableSubtitle, thArray, tdArray } from "variables/LinksConfig.jsx";

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
                title={tableTitle}
                category={tableSubtitle}
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover style={{"marginBottom":"0px"}}>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              if({key}.key === 0) {
                                return <td key={key}><a href={prop[1]} target='_blank' rel='noopener noreferrer'>{prop[0]}</a></td>;
                              }else {
                                return <td key={key}>{prop}</td>;
                              }
                            })}
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
