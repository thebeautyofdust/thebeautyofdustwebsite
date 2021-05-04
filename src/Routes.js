import * as React from "react";
import { Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Pieces from "./Components/Pieces/Pieces";
import About from "./Components/About/About";

function Routes() {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/pieces" component={Pieces} />
      <Route exact path="/about" component={About} />
    </>
  );
};

export default Routes;
