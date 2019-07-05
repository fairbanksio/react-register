import React, { Component } from "react";
import { Card } from "components/Card/Card.jsx";



export class UnorderedListCard extends Component {
  render() {

    const listItems = this.props.listItems.map((item, i) =>
      <li dangerouslySetInnerHTML={{__html: item}} key={i}/>
    );

    return (
      <Card
        statsIcon="fab fa-node-js"
        title={this.props.listTitle}
        category={this.props.listDescription}
        stats="Powered by Javascript"
        content={
          <div style={{'padding':'10px'}} >
            <ul>{listItems}</ul>
          </div>
        }
      />
    );
  }
}

export default UnorderedListCard;
