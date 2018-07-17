import React, { Component } from "react";
import { Grid, Row, Col} from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import HoverImgLink from "components/HoverImgLink/HoverImgLink.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { userLinks, userLinksHead } from "variables/LinksConfig.jsx";

class LinksGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: userLinks,
      linksHead: userLinksHead,
    };
  }

  componentDidMount(){
    document.title = 'Links | ' + userConfig.SiteTitle;
  }
  render() {
    const links = this.state.links.map((link, key) => {
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
                title={this.state.linksHead.Title}
                category={this.state.linksHead.Subtitle}
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
