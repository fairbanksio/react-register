import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import HoverImgLink from "components/HoverImgLink/HoverImgLink"



class Links extends Component {

  componentDidMount(){
    document.title = 'Links';
  }
  render() {

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <CardNoFooter
                title={this.props.userLinksHead.Title}
                category={this.props.userLinksHead.SubTitle}
                content={
                  <Table striped hover style={{"marginBottom":"0px"}}>
                    <thead>
                      <tr>
                        <th key='0'>Name</th>
                        <th key='1'>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.userLinks.map((prop, key) => {
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

export default Links;
