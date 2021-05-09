import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "./Components/Main/Main";
import Pieces from "./Components/Pieces/Pieces";
import Piece from "./Components/Pieces/Piece";
import Authors from "./Components/Authors/Authors";
import Author from "./Components/Authors/Author";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function Routes() {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/pieces" component={Pieces} />
      <Route exact path="/piece/:id" component={Piece} />
      <Route exact path="/authors" component={Authors} />
      <Route exact path="/author/:id" component={Author} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/shesaid">
        <Redirect to="/piece/shesaid" />
      </Route>
    </>
  );
};

export default Routes;
