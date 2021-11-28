import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Overview",
    path: "/",
    component: lazy(() => import("../pages/SensorsPage")),
    exact: true,
  },
  {
    name: "BigCalendar",
    path: "/big-calendar",
    component: lazy(() => import("../pages/BigCalendarPage")),
    exact: true,
  },
];
