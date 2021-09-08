import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Overview",
    path: "/",
    component: lazy(() => import("../pages/SensorsPage")),
    exact: true,
  },
  {
    name: "Contact",
    path: "/contact",
    component: lazy(() => import("../pages/ContactPage")),
    exact: true,
  },
];
