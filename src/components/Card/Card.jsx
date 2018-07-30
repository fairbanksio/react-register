import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        {this.props.title
          ? <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
            <h4 className="title">{this.props.title}</h4>
            <p className="category">{this.props.category}</p>
          </div>
          : null
        }
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}
          {this.props.stats
            ? <div className="footer">
              {this.props.legend}
              {this.props.stats != null ? <hr /> : ""}
              <div className="stats">
                <i className={this.props.statsIcon} /> {this.props.stats}
              </div>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

export default Card;
