import React from "react";
import { Route, Switch } from "react-router";
import BigCalendarPage from "../../pages/BigCalendarPage";
import DetailsPage from "../../pages/DetailsPage";
import SensorsPage from "../../pages/SensorsPage";
import MainStyled from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        <Route path="/" component={SensorsPage} exact />
        <Route path="/details" component={DetailsPage} exact />
        <Route path="/big-calendar" component={BigCalendarPage} exact />
      </Switch>
    </MainStyled>
  );
};

export default Main;
