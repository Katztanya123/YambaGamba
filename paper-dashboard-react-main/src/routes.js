/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import HafsaCookie from "./views/HafsaCookie";

var routes = [
  {
    path: "/dashboard",
    name: "BreakFast",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Lunch",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Dinner",
    icon: "nc-icon nc-pin-3",
    component: Maps,
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
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
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
