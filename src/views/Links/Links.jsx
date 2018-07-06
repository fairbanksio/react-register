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
                            {prop.map((prop, key) => { // v This is a whole hodgepodge of half ass ideas v
                              if({key}) { // TO DO: The first element in the tdArray is the <NavLink> item loaded from variables/LinksConfig.jsx, which here is represented by 'key'. If you dump 'key', it starts at 0 (of type number). So ideally, we'd check for 0 and make it a link, otherwise not. However, this causes React to complain about a missing , in multiple scenarios.
                                console.log({key});
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
