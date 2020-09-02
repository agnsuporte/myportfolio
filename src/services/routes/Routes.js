import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, NotFound } from "../../pages";

const ServicesRoutes = (props) => {

  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default ServicesRoutes;
