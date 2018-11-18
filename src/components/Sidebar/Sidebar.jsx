import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.sidebarBackground + ")",
      WebkitBoxShadow: "2px 0px 20px 1px rgba(0,0,0,0.5)",
      MozBoxShadow: "2px 0px 20px 1px rgba(0,0,0,0.5)",
      boxShadow: "2px 0px 20px 1px rgba(0,0,0,0.5)"
    };
    var customTitleStyle = {
      lineHeight: '.95'
    }
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={this.props.sidebarBackground}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a
            href={this.props.Website}
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <i style={{color: this.props.siteLogoColor}} className={this.props.siteLogo}></i>
            </div>
          </a>
          <a
            href={this.props.Website}
            className="simple-text logo-normal"
            style={customTitleStyle}
          >
            {this.props.SiteTitle}
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            
            {this.props.sitePages.map((prop, key) => {
              if (!prop.redirect && !prop.hidden)
                  return (
                    <li
                      className={
                        prop.upgrade
                          ? "active active-pro"
                          : this.activeRoute(prop.path)
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
