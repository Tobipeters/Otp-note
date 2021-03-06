import React, { Fragment } from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRoutes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path={"/"} exact component={App} />
        <Route path={"/favourite"} exact component={App} />
        <Route path={"/tag"} exact component={App} />
        <Route path={"/tag/personal"} exact component={App} />
        <Route path={"/tag/work"} exact component={App} />
        <Route path={"/tag/social"} exact component={App} />
        <Route path={"/tag/important"} exact component={App} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRoutes;
