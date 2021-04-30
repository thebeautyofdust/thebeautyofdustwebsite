import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";

const App: React.FC = () => (
  <HashRouter>
    <Routes />
  </HashRouter>
);

ReactDOM.render(<App />, document.querySelector("#root"));
