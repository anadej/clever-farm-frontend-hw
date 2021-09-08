import React, { Suspense } from "react";
// import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
import ContactPage from "../../pages/ContactPage";
import DetailsPage from "../../pages/DetailsPage";
import SensorsPage from "../../pages/SensorsPage";
import MainStyled from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      {/* <Suspense
        fallback={
          <div className="loader">
            <Loader type="ThreeDots" color="#00a179" height={80} width={80} />
          </div>
        }
      > */}
      <Switch>
        <Route path="/" component={SensorsPage} exact />
        <Route path="/details" component={DetailsPage} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
      {/* </Suspense> */}
    </MainStyled>
  );
};

export default Main;
