import Home from "views/Home/Home";
import Projects from "views/Projects/Projects";
import Links from "views/Links/Links";
import AboutMe from "views/AboutMe/AboutMe";
import Gallery from "views/Gallery/Gallery";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-home",
    component: Home
  },
  {
    path: "/gallery",
    name: "Gallery",
    icon: "pe-7s-photo",
    component: Gallery
  },
  {
      path: "/projects",
      name: "Projects",
      icon: "pe-7s-plugin",
      component: Projects
  },
  {
    path: "/links",
    name: "Links",
    icon: "pe-7s-link",
    component: Links
  },
  {
    path: "/about",
    name: "About Me",
    icon: "pe-7s-id",
    component: AboutMe
  },

  { redirect: true, path: "/", to: "/home", name: "Home" }
];

export default dashboardRoutes;
