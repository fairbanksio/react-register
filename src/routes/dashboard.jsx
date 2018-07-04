import Home from "views/Home/Home";
import Projects from "views/Projects/Projects";
import TableList from "views/TableList/TableList";
import AboutMe from "views/AboutMe/AboutMe";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-home",
    component: Home
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
    component: TableList
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
