import React, { Component } from "react";
import { Grid, Row, Col} from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import HoverImgLink from "components/HoverImgLink/HoverImgLink.jsx";




class LinksGrid extends Component {
  componentDidMount(){
    document.title = 'Links';
  }
  render() {
    const links = this.props.userLinks.map((link, key) => {
      return (
        <HoverImgLink
          key={key}
          linkImg={link.Img}
          linkURL={link.URL}
          linkName={link.Name}
          linkDesc={link.Desc}
        />
      );
    });

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <CardNoFooter
                title={this.props.userLinksHead.Title}
                category={this.props.userLinksHead.SubTitle}
                content={
                  <Row>
                    {links}
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default LinksGrid;
