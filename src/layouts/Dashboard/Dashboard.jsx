import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import cheet from 'cheet.js';

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import { style } from "components/Notifications/NotificationsVariables.jsx";

//import routes and data from config
import sitePages from "routes/dashboard.jsx";
import siteData from "variables/SiteData.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.state = {
      _notificationSystem: null
    };

    this.siteData = siteData;
  }

  handleNotificationClick(position) {
    console.log("Hello World!");
  }
  componentDidMount() {
    if(this.siteData.welcomeBanner){
      this.setState({ _notificationSystem: this.refs.notificationSystem });
      var _notificationSystem = this.refs.notificationSystem;
      _notificationSystem.addNotification({
        title: <span data-notify="icon" className={this.siteData.welcomeBannerLogo} />,
        message: (
          <div className="text-center" dangerouslySetInnerHTML={{__html: this.siteData.welcomeBannerText}} />
        ),
        level: this.siteData.welcomeBannerType,
        position: "tc",
        autoDismiss: 15
      });
    }
    cheet('r i c k', function () {
      window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      try{
        document.scrollingElement.scrollTop = 0;
      }catch(err){}
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} Website={this.siteData.Website} SiteTitle={this.siteData.SiteTitle} sitePages={sitePages} siteLogo={this.siteData.siteLogo} siteLogoColor={this.siteData.siteLogoColor} sidebarBackground={this.siteData.sidebarBackground}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props}  sitePages={sitePages}/>
          <Switch>
            {sitePages.map((prop, key) => {
              if (prop.name === "Notifications")
                return (
                  <Route
                    path={prop.path}
                    key={key}
                    render={routeProps => (
                      <prop.component
                        {...routeProps}
                        handleClick={this.handleNotificationClick}
                      />
                    )}
                  />
                );
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Footer {...this.props} Website={this.siteData.Website} SiteTitle={this.siteData.SiteTitle} FooterNote={this.siteData.FooterNote}  sitePages={sitePages}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
