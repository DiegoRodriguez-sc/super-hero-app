import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HeroScreen from "../components/HeroScreen";
// import HeroScreen from "../components/HeroScreen";
import NavBar from "../components/NavBar";
import HomeScreen from "../pages/HomeScreen";
import SearchScreen from "../pages/SearchScreen";

const DashBoardRoute = () => {
  return (
    <Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route  path="/home" component={HomeScreen} />
          <Route  path="/search" component={SearchScreen} />
          <Route  path="/hero/:heroId" component={HeroScreen} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </Fragment>
  );
};

export default DashBoardRoute;
