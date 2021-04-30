import * as React from "react";
import { Route } from "react-router-dom";
import Main from "./Components/Main/Main";

function Routes() {
  return (
    <>
      <Route path="/" component={Main} />
    </>
  );
};

export default Routes;
