import React, { Component } from "react";
import { Grid, Row, Col} from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import HoverImgLink from "components/HoverImgLink/HoverImgLink.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { userLinks, userLinksHead } from "variables/LinksConfig.jsx";

class LinksGrid extends Component {
  componentDidMount(){
    document.title = 'Links | ' + userConfig.SiteTitle;
  }
  render() {
    const links = userLinks.map((link, key) => {
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
                title={userLinksHead.Title}
                category={userLinksHead.Subtitle}
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
