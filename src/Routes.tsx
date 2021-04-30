import * as React from "react";
import { Route } from "react-router-dom";
import Main from "./Components/Main/Main";

import About from "./Components/About/About";

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
    </>
  );
};

export default Routes;
