import React, { Component } from "react";
import { Grid, Row, Col} from "react-bootstrap";

import CardNoFooter from "components/Card/CardNoFooter.jsx";
import HoverImgLink from "components/HoverImgLink/HoverImgLink.jsx";

import { userConfig } from "variables/UserConfig.jsx";
import { UserLinks, UserLinksHead } from "variables/LinksConfig.jsx";

class LinksGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: UserLinks,
      linksHead: UserLinksHead,
    };
  }


  componentDidMount(){
    document.title = 'Links | ' + userConfig.SiteTitle;
  }


  render() {

    //MAP THE LINKS IN CONFIG TO THE HoverImgLink component
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
                category={this.state.linksHead.SubTitle}
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
