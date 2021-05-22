import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./Components/Main/Main";
import Pieces from "./Components/Pieces/Pieces";
import Piece from "./Components/Pieces/Piece";
import Authors from "./Components/Authors/Authors";
import Author from "./Components/Authors/Author";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";
import NotFound from "./Components/NotFound/NotFound";
import ScrollToTop from "./Common/scrollToTop";

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Route exact path="/" component={Main} />
      <Route exact path="/pieces" component={Pieces} />
      <Route exact path="/piece/:id" component={Piece} />
      <Route exact path="/authors" component={Authors} />
      <Route exact path="/author/:id" component={Author} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/shesaid">
        <Redirect to="/piece/shesaid" />
      </Route>
      {/* <Route path='*' exact={true} component={NotFound} /> */}
    </>
  );
};

export default Routes;
