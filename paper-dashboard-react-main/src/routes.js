import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import HafsaCookie from "./views/HafsaCookie";
import BreakFast from "./views/Breakfast";
import Lunch from "./views/Lunch";
import Login from "views/Login";
import Dinner from "views/Dinner";
var routes = [
  {
    path: "/breakfast",
    name: "BreakFast",
    icon: "nc-icon nc-bank",
    component: BreakFast,
    layout: "/admin",
  },
  {
    path: "/lunch",
    name: "Lunch",
    icon: "nc-icon nc-diamond",
    component: Lunch,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Dinner",
    icon: "nc-icon nc-pin-3",
    component: Dinner,
    layout: "/admin",
  },
  {
    path: "/hafsacookie",
    name: "HafsaCookie",
    icon: "nc-icon nc-pin-3",
    component: HafsaCookie,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: Login,
    layout: "/admin",
  },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  {
    pro: true,
    path: "/upgrade",
    name: "Contact Us",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
