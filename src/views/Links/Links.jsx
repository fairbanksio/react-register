import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { tableTitle, tableSubtitle, thArray, tdArray } from "variables/LinksConfig.jsx";

import { NavLink } from "react-router-dom";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={tableTitle}
                category={tableSubtitle}
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
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
                                return <NavLink to='#'><td key={key}>{prop}</td></NavLink>; // TO DO: What's the plan? Are we going to make the user pass in a whole object? Maybe ew for newbies.
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
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
