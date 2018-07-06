import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { tableTitle, tableSubtitle, thArray, tdArray } from "variables/LinksConfig.jsx";

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
