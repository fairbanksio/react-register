import React from "react";
import DynamicPage from "views/DynamicPage/DynamicPage";
import siteData from "variables/SiteData.jsx";

// Dynamically make routes from the config file
var sitePages = siteData.pages.map(function(page){
  if (page.redirect === true) {
    return { redirect: true, path: page.path, to: page.to, name: page.name}
  } else {
    var pageComponent = (props) => <DynamicPage page={page} website={siteData.Website} siteTitle={siteData.SiteTitle} />
    return { path: page.path.toLowerCase(), name: page.name, icon: page.icon, component: pageComponent, hidden: page.hidden}
  }
})

export default sitePages;
